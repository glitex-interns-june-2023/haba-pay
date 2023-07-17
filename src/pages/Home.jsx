import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import LeftSidebar from '../Components/LeftSidebar';
import Navbar from '../Components/Navbar';
import dropdown from '../Assets/dropdown.png';
import vector from '../Assets/vector.png';
import HabaChart from '../Components/HabaChart';

const Home = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <LeftSidebar />
        <Navbar />
      </div>
      
      <div className="transaction-stats">
        <div className="stats">
          <div className="title">Transaction Statistics</div>
            <div className="chart-filters">
              <div className="chart-filter">
                <h2>Chart Filters</h2>
                <img src={dropdown} alt="Chart Filters" />
              </div>

              <div className="details">
                <div className="week">Week <img src={vector} alt="vector" /></div>
                <div className="count">100 <img src={vector} alt="vector" /></div>
              </div>
            </div>
          </div>

          <HabaChart />
        </div>
      
      <Link to="/create-account" className="forgot-pwd">
          Create Account
      </Link>

    </div>
  );
};

export default Home;
