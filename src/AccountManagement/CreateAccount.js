import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import '../Styles/CreateAccount.css';
import close from '../assets/close.png';

const CreateAccount = () => {
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

  const handleButtonClick = () => {
    history('/abort');
  };

  const handleVerifyEmail = () => {
    axios
      .post('https://habaapi.glitexsolutions.co.ke/api/v1/verifications/pin/verify', { email, loginPin })
      .then((response) => {
        console.log('Email Verified:', response.data);
      })
      .catch((error) => {
        console.error('Error verifying email:', error);
      });
  };


  return (
    <div className="create-account-container">
      <div className="create-account">
        <div className="close-btn-container">
          <div className="close-btn" onClick={handleButtonClick}>
            <img src={close} alt="close" />
          </div>
        </div>

        <div className="create-account-header">
          <h1>Create Admin Account</h1>
          <p>Enter account details for the new admin account</p>
        </div>
        <div className="create-account-details">
          <div className="create-account-detail">
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

          <div className="create-account-line"></div>

          <div className="create-account-detail1">
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
          <button onClick={handleVerifyEmail} className="btn-verify">Verify Email</button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
