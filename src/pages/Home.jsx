import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/Home.css';
import LeftSidebar from '../Components/LeftSidebar';
import Navbar from '../Components/Navbar';
import RightSidebar from '../Components/RightSidebar';
import dropdown from '../assets/dropdown.png';
import vector from '../assets/vector.png';
import review from '../assets/review.png';
import HabaChart from '../Components/HabaChart';

const Home = () => {
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    axios.get('https://habaapi.glitexsolutions.co.ke/api/v1/admins/transactions/{id}')
      .then(response => {
        const activityData = response.data.data;
  
        setRecentActivity(activityData);
      })
      .catch(error => {
        console.error('Error fetching recent activity:', error);
      });
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

          <div className="haba-chart">
            <HabaChart />
          </div>
        </div>
      </div>

      <div className="recent-activity">
        <h1>Recent Activity</h1>
        <div className="activities">
          <div className="activities">
            {recentActivity.map(activity => (
              <div className="activity" key={activity.id}>
                <div className="recent">
                  <div className="user">{activity.username} <span>created an account</span></div>
                  <div className="time">Today</div>
                </div>
                <div className="review">Review <img src={review} alt="" /></div>
              </div>
            ))}
          </div>
          <div className="activity">
            <div className="recent">
              <div className="user">Grace Mwai <span>created a HabaPay account</span></div>
              <div className="time">Today, 01:07PM</div>
            </div>
            <div className="review">Review <img src={review} alt="" /></div>
          </div>

          <div className="activity">
            <div className="recent">
              <div className="user">Jane Mukenya M. <span>withdrew Ksh 240</span></div>
              <div className="time">Today, 12:45PM</div>
            </div>
            <div className="review">Review <img src={review} alt="" /></div>
          </div>

          <div className="activity">
            <div className="recent">
              <div className="user">Obi Peter <span>withdrew Ksh 40000</span></div>
              <div className="time">Today, 12:00PM</div>
            </div>
            <div className="review">Review <img src={review} alt="" /></div>
          </div>

          <div className="activity">
            <div className="recent">
              <div className="user">Grace Mwai <span>added business to HabaPay</span></div>
              <div className="time">Today, 11:55PM</div>
            </div>
            <div className="review">Review <img src={review} alt="" /></div>
          </div>

          <div className="activity">
            <div className="recent">
              <div className="user">Bola Tinubu <span>sent Ksh 40 to <span className="client">Client Mwilu</span></span></div>
              <div className="time">Today, 11:05AM</div>
            </div>
            <div className="review">Review <img src={review} alt="" /></div>
          </div>

          <div className="activity">
            <div className="recent">
              <div className="user">Bola Tinubu <span>deposited Ksh to wallet</span></div>
              <div className="time">Today, 11:00AM</div>
            </div>
            <div className="review">Review <img src={review} alt="" /></div>
          </div>

          <div className="activity">
            <div className="recent">
              <div className="user">Bola Tinubu <span>created a new HabaPay account</span></div>
              <div className="time">Today, 10:30AM</div>
            </div>
            <div className="review">Review <img src={review} alt="" /></div>
          </div>
        </div>
      </div>
     </div>
     < RightSidebar />
    </div>
  );
};

export default Home;
