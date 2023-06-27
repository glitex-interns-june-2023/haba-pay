import React, { useState } from 'react';

const AdminAccount = () => {
  const [name, setName] = useState('');
  const [primaryNumber, setPrimaryNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secondaryNumber, setSecondaryNumber] = useState('');
  const [business, setBusiness] = useState('');
  const [location, setLocation] = useState('');
  const [loginPin, setLoginPin] = useState('');

  const handleCancel = () => {
    // Add cancel logic here
  };

  const handleVerify = () => {
    // Add verification logic here
  };

  return (
    <div>
      <h1>Create User Account</h1>
      <p>Enter account details for new account</p>
      <div className="columns">
        <div className="column">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Primary Number:</label>
          <input
            type="text"
            value={primaryNumber}
            onChange={(e) => setPrimaryNumber(e.target.value)}
          />

          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="column">
          <label>Secondary Number:</label>
          <input
            type="text"
            value={secondaryNumber}
            onChange={(e) => setSecondaryNumber(e.target.value)}
          />

          <label>Business:</label>
          <input
            type="text"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
          />

          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <label>Login Pin:</label>
          <input
            type="password"
            value={loginPin}
            onChange={(e) => setLoginPin(e.target.value)}
          />
        </div>
      </div>

      <button onClick={handleCancel}>Cancel</button>
      <button onClick={handleVerify}>Verify</button>
    </div>
  );
};

export default AdminAccount;
