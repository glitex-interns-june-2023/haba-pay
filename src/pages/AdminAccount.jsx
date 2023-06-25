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
        </div>
      </div>

      <button onClick={handleCancel}>Cancel</button>
      <button onClick={handleVerify}>Verify</button>
    </div>
  );
};

export default AdminAccount;
