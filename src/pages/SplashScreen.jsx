import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import logo from '../assets/logo.jpg';
import '../Styles/SplashScreen.css';

const SplashScreen = () => {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleSignInButtonClick = () => {
    navigate('/login');
  };

  return (
    <div className={`app-container ${isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile'}`}>
      <div className="app-title">
        <h1>HabaPay</h1>
      </div>

      <div className="content">
        <h2>Welcome back</h2>
        <p>Sign in to proceed into your account</p>
        <img className={`logo ${isMobile ? 'mobile-logo' : ''}`} src={logo} alt="logo" />
        <button className={`sign-in ${isMobile ? 'mobile-sign-in' : ''}`} onClick={handleSignInButtonClick}>
          Sign in
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;
