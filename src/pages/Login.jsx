import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send a POST request to the login API endpoint
      const response = await fetch('/api/login', {
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
        // Handle successful response
        const data = await response.json();
        console.log(data);

        // Reset the form
        setEmail('');
        setPassword('');
      } else {
        // Handle error responses from the API
        console.error('Login failed');
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div>
      <div className="title">
        <h1>HabaPay</h1>
      </div>
      <div className="login-content">
        <div className="login-title">
          <h2>Log in to Account</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Password
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button className="login-btn" type="submit" disabled={loading}>
            {loading ? 'Processing...' : 'Log In'}
          </button>
        </form>
        <Link to="/resetpassword" className="forgot-pwd">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
}

export default Login;
