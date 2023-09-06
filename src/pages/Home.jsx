import React, { useState, useEffect } from 'react';
import '../Styles/Home.css';
import LeftSidebar from '../Components/LeftSidebar';
import Navbar from '../Components/Navbar';
import RightSidebar from '../Components/RightSidebar';
import dropdown from '../assets/dropdown.png';
import vector from '../assets/vector.png';
import review from '../assets/review.png';
import HabaChart from '../Components/HabaChart';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchRecentActivity = async () => {
      try {
        const response = await fetch('https://habaapi.glitexsolutions.co.ke/api/v1/admins/users/activity');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setRecentActivity(data.data);
      } catch (error) {
        console.error('Error fetching recent activity:', error);
      }
    };

    fetchRecentActivity();
  }, []);

  return (
    <div className="home-container">
      <LeftSidebar />

      <div className="transaction-content">
        <Navbar />

        <div className="transaction-stats">
          <div className="transaction-stat">
            <div className="stats">
              <h1 className="title">Transaction Statistics</h1>
              <div className="chart-filters">
                <div className="chart-filter">
                  <h2>Chart Filters</h2>
                  <img src={dropdown} alt="chart filter" />
                </div>

                <div className="details">
                  <div className="week">Week <img src={vector} alt="vector" /></div>
                  <div className="week">100 <img src={vector} alt="vector" /></div>
                </div>
              </div>
            </div>

            <div className="haba-chart" style={{ top: scrollY > 100 ? `${scrollY - 100}px` : 0 }}>
              <HabaChart />
            </div>
          </div>
        </div>

        <div className="recent-activity">
          <h1>Recent Activity</h1>
          <div className="activities">
            {recentActivity && recentActivity.map((activity) => (
              <div className="activity" key={activity.id}>
                <div className="recent">
                  <div className="user" dangerouslySetInnerHTML={{ __html: activity.message }}></div>
                  <div className="time">{activity.timestamp}</div>
                </div>
                <div className="review">Review <img src={review} alt="" /></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <RightSidebar />
    </div>
  );
};

export default Home;
