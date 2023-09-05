import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import '../Styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://habaapi.glitexsolutions.co.ke/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        setEmail('');
        setPassword('');

        navigate('/home');
      } else {
        setErrorMessage('Incorrect email or password');
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className={`login-container ${isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile'}`}>
      <div className="title">
        <h2>HabaPay</h2>
      </div>
      <div className="login-content">
        <div className="login-title">
          <h2>Log in to Account</h2>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <label className={email ? 'has-content' : ''}>
            Email
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label className={password ? 'has-content' : ''}>
            Password
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button className={`login-btn ${isMobile ? 'mobile-login' : ''}`} type="submit" disabled={loading}>
            {loading ? 'Processing...' : 'Log In'}
          </button>
        </form>

        <Link to="/reset-password" className="forgot-pwd">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
}

export default Login;
