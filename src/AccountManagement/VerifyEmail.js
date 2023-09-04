import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/VerifyEmail.css';
import close from '../assets/close.png';

function EmailVerification() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleButtonClick = () => {
    navigate('/abort');
  };


  const handleVerifyEmail = () => {
    axios
      .post('https://habaapi.glitexsolutions.co.ke/api/v1/verifications/pin/verify', { email })
      .then((response) => {
        console.log('Email Verified:', response.data);
      })
      .catch((error) => {
        console.error('Error verifying email:', error);
      });
  };
  

  return (
    <div className="verify-email">
      <div className="close-btn-container">
        <div className="close-btn" onClick={handleButtonClick}>
          <img src={close} alt="close" />
        </div>
      </div>

      <div className="verify-email-header">
        <h1>Verify Email</h1>
        <p>A verification PIN was sent to the email account you entered</p>
      </div>
      <form>
        <label htmlFor="pin">Verification Pin</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleVerifyEmail}>Verify Email</button>
      </form>
    </div>
  );
}

export default EmailVerification;
