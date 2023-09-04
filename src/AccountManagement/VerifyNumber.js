import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/VerifyNumber.css';
import close from '../assets/close.png';

function NumberVerification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');

  const handleButtonClick = () => {
    navigate('/abort');
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleVerifyNumber = () => {
    axios
      .post('https://habaapi.glitexsolutions.co.ke/api/v1/verifications/otp/verify', { otp })
      .then((response) => {
        console.log('Number Verified:', response.data);
      })
      .catch((error) => {
        console.error('Error verifying number:', error);
      });
  };

 

  return (
    <div className="verify-number">
      <div className="close-btn-container">
        <div className="close-btn" onClick={handleButtonClick}>
          <img src={close} alt="close" />
        </div>
      </div>

      <div className="verify-number-header">
        <h1>Verify Number</h1>
        <p>A verification OTP was sent to the phone number you entered.</p>
      </div>

      <label htmlFor="otp">OTP</label>
      <input
        type="text"
        id="otp"
        value={otp}
        onChange={handleOtpChange}
      />
      <button onClick={handleVerifyNumber}>Verify Number</button>
    </div>
  );
}

export default NumberVerification;