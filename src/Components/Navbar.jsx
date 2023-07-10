import React from 'react';
import '../Styles/Navbar.css';
import search from '../Assets/search.png';
import searchfilter from '../Assets/searchfilter.png';
import theme from '../Assets/theme.png';
import notification from '../Assets/notification.png';
import profile from '../Assets/profile.png';



const Navbar = () => {
    return (
        <div className="navbar">
            <div className="title">
                <h1>Home</h1>
            </div>

            <div className="navbar-search">
                <div className="search">
                    <img src={search} alt="search" />
                    <h2>Search...</h2>
                </div>

                <div className="search-filter">
                    <img src={searchfilter} alt="search-filter" />
                </div>
            </div>

            <div className="navbar-menu">
                <img src={theme} className="theme" alt="theme" />
                <img src={notification} className="notification" alt="notification" />
                <img src={profile} className="profile" alt="profile" />
            </div>

        </div>
    );
};

export default Navbar;