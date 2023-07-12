import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import LeftSidebar from '../Components/LeftSidebar';
import Navbar from '../Components/Navbar';

const Home = () => {
  return (
    <div className="container">
      <LeftSidebar />
      <Navbar />
      
      <Link to="/create-account" className="forgot-pwd">
          Create Account
      </Link>

    </div>
  );
};

export default Home;
