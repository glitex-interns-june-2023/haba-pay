import React from 'react';
import '../Styles/Home.css';
import LeftSidebar from '../Components/LeftSidebar';
import Navbar from '../Components/Navbar';

const Home = () => {
  return (
    <div className="container">
      <LeftSidebar />
      <Navbar />
      {/* The rest of your content */}
    </div>
  );
};

export default Home;
