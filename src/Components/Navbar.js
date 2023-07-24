import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Navbar.css';
import search from '../assets/search.png';
import searchfilter from '../assets/searchfilter.png'; 
import theme from '../assets/theme.png';
import notification from '../assets/notification.png';
import profile from '../assets/profile.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getPageTitle = () => {
    const { pathname } = location;
    switch (pathname) {
      case '/home':
        return 'Home';
      case '/analytics':
        return 'Analytics';
      case '/settings':
        return 'Settings';
      case '/manage-users':
        return 'Manage Users';
      default:
        return 'Page Title';
    }
  };

  const isAnalyticsPage = location.pathname === '/analytics';
  const isSettingsPage = location.pathname === '/settings';
  const isManageUsersPage = location.pathname === '/manage-users';

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="title">
        <Link to="top" smooth={true} duration={500}>
          <h1>{getPageTitle()}</h1>
        </Link>
      </div>

      <div className="navbar-search">
        <div className="search">
          <img src={search} alt="search" />
          <h2>Search...</h2>
        </div>
        {!isAnalyticsPage && !isSettingsPage && !isManageUsersPage && (
          <div className="search-filter">
            <img src={searchfilter} alt="search-filter" />
          </div>
        )}
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
