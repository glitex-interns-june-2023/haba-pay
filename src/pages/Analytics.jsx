import React from 'react';
import LeftSidebar from '../Components/LeftSidebar';
import Navbar from '../Components/Navbar';

const Analytics = () => {
    return (
        <div className="analytics-container">
            <LeftSidebar />

            <div className="analytics-content">
                <Navbar />
            </div>
        </div>
    );
};

export default Analytics;
