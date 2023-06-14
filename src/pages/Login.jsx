import React, { useState } from 'react';

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
  };

  return (
      <div>
        <div className="title">
          <h1>HabaPay</h1>
        </div>
        <div className="login-content">
          <div class="login-title"><h2>Log in to account</h2></div>
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
        </div>
      </div>
    );
}

export default Login;
