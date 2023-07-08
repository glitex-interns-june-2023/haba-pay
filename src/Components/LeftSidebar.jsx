import React from 'react';
import '../Styles/LeftSidebar.css'
import profile from '../Assets/profile.png';
import eye from '../Assets/eye.png';
import home from '../Assets/home.png';
import analytics from '../Assets/analytics.png';
import users from '../Assets/users.png';
import settings from '../Assets/settings.png';
import logout from '../Assets/logout.png';

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="sidebar-details">
        <div className="sidebar-header">
          <h1 className="title">HabaPay</h1>
          <div className="user-details">
            <img src={profile} alt="User Avatar" />
            <div className="user-detail">
              <h2>Welcome back,</h2>
              <h3>James Nakamoto</h3>
            </div>
        </div>

        <div className="user-balance">
           <div className="current-bal">
            <h1>Current Balance</h1>
            <img src={eye} alt="balance" />
           </div>
           <div className="balance">Ksh 345,226</div>
        </div>
      </div>

      <div className="sidebar-menu">
        <div className="menu">
          <ul>
          <li className="home">
            <a href="/home">
              <div className="image-container">
                <img src={home} alt="home" />
              </div>
              <span className="text">Home</span>
            </a>
          </li>

          <li className="analytics">
            <a href="/analytics">
              <div className="image-container">
                <img src={analytics} alt="analytics" />
              </div>
              <span className="text">Analytics</span>
            </a>
          </li>

          <li className="manage-users">
            <a href="/manage-users">
              <div className="image-container">
                <img src={users} alt="users" />
              </div>
              <span className="text">Manage Users</span>
            </a>
          </li>
        </ul>
      </div>
          
          <ul>
            <li>
                <a href="/settings"><img src={settings} alt="settings"></img>Settings</a>
            </li>
            <li>
                <a href="/logout"><img src={logout} alt="logout"></img>Log Out</a>
            </li>
          </ul>
        
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
