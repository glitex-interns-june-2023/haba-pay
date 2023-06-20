import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login functionality here
  };

  return (
    <div>
      <div className="title">
        <h1>HabaPay</h1>
      </div>
      <div className="login-content">
        <div className="login-title">
          <h2>Log in to account</h2>
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
        </form>
        <button className="login-btn" type="submit">Processing...</button>
        <Link to="/resetpassword" className="forgot-pwd">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
}

export default Login;
