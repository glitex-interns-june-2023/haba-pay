import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/LeftSidebar.css';
import profile from '../assets/profile.png';
import eye from '../assets/eye.png';
import home from '../assets/home.png';
import analytics from '../assets/analytics.png';
import users from '../assets/users.png';
import settings from '../assets/settings.png';
import logout from '../assets/logout.png';

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <div className="sidebar-details">
        <div className="sidebar-header">
          <h1 className="header-title">HabaPay</h1>
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
                <NavLink to="/home" activeclassname="active">
                  <div className="image-container">
                    <img src={home} alt="home" />
                  </div>
                  <span className="text">Home</span>
                </NavLink>
              </li>

              <li className="analytics">
                <NavLink to="/analytics" activeclassname="active">
                  <div className="image-container">
                    <img src={analytics} alt="analytics" />
                  </div>
                  <span className="text">Analytics</span>
                </NavLink>
              </li>

              <li className="manage-users">
                <NavLink to="/manage-users" activeclassname="active">
                  <div className="image-container">
                    <img src={users} alt="users" />
                  </div>
                  <span className="text">Manage Users</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="settings">
          <div className="setting">
            <NavLink to="/settings">
              <img src={settings} alt="" />
              Settings
            </NavLink>
          </div>

          <div className="logout">
            <NavLink to="/logout">
              <img src={logout} alt="" />
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
