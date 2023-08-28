import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/CreateAccount.css';

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

  const handleVerifyEmail = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const verificationPin = generateVerificationPin();
      await sendVerificationEmail(email, verificationPin);
      history(`/verify-email?email=${email}`);
    } catch (error) {
      console.error('An error occurred while sending the verification email:', error);
    }
  };

  const generateVerificationPin = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const sendVerificationEmail = async (email, verificationPin) => {
    try {
      await fetch('https://habaapi.glitexsolutions.co.ke/api/send-verification-code/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, verificationPin }),
      });
      console.log('Verification email sent');
    } catch (error) {
      console.error('An error occurred while sending the verification email:', error);
    }
  };

  return (
    <div className="create-account">
      <h1>Create Admin Account</h1>
      <p>Enter account details for the new admin account</p>
      <div className="account-details">
        <div className="account-detail">
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

        <div className="account-detail">
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
  );
};

export default CreateAccount;
