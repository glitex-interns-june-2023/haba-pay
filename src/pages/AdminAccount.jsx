import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminAccount = () => {
  const history = useNavigate(); 
  const [name, setName] = useState('');
  const [primaryNumber, setPrimaryNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secondaryNumber, setSecondaryNumber] = useState('');
  const [business, setBusiness] = useState('');
  const [location, setLocation] = useState('');
  const [loginPin, setLoginPin] = useState('');

  const handleCancel = () => {
    history('/abort'); 
  };

  const handleVerify = () => {
    
    sendVerificationEmail(email);

    history('/verifyemail'); 
  };

  const sendVerificationEmail = async (email) => {
    try {
      const response = await fetch('YOUR_VERIFICATION_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log('Verification email sent successfully!');
      } else {
        console.log('Failed to send verification email.');
      }
    } catch (error) {
      console.error('An error occurred while sending the verification email:', error);
    }
  };

  return (
    <div className="create-account">
      <h1>Create User Account</h1>
      <p>Enter account details for new account</p>
      <div className="details">
        <div className="detail">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Primary Number</label>
          <input
            type="text"
            value={primaryNumber}
            onChange={(e) => setPrimaryNumber(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="detail">
          <label>Secondary Number</label>
          <input
            type="text"
            value={secondaryNumber}
            onChange={(e) => setSecondaryNumber(e.target.value)}
          />

          <label>Business</label>
          <input
            type="text"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
          />

          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <label>Login Pin</label>
          <input
            type="password"
            value={loginPin}
            onChange={(e) => setLoginPin(e.target.value)}
          />
        </div>
      </div>

      <div className="acc-btn">
        <button onClick={handleCancel} className="btn-cancel">Cancel</button>
        <button onClick={handleVerify} className="btn-verify">Verify</button>
      </div>
    </div>
  );
};

export default AdminAccount;
