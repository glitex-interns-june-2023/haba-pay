import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import '../App.css'

const Home = () => {
  const navigate = useNavigate();

  const handleSignInButtonClick = () => {
    navigate('/login');
  };

  return (
    <div className="app-container">
      <div className="app-title">
        <h1>HabaPay</h1>
      </div>
      <div className="content">
        <h2>Welcome back</h2>
        <p>Sign in to proceed into your account</p>
        <img className="logo" src={logo} alt="HabaPay logo" />
        <button className="sign-in" onClick={handleSignInButtonClick}>Sign in</button>
      </div>
    </div>
  );
};

export default Home;
