import React from 'react';
import LeftSidebar from '../Components/LeftSidebar';
import Navbar from '../Components/Navbar';

const Settings = () => {
    return (
        <div className="settings-container">
            <LeftSidebar />

            <div className="settings-content">
                <Navbar />
            </div>
        </div>
    );
};

export default Settings;