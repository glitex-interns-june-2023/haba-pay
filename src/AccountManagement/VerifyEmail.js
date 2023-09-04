import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/VerifyEmail.css';
import close from '../assets/close.png';

function VerifyEmail({ primaryNumber }) {
  const navigate = useNavigate();
  const [pin, setPin] = useState('');

  const handleButtonClick = () => {
    navigate('/abort');
  };

  const handlePinChange = (event) => {
    setPin(event.target.value);
  };

  const handleVerifyClick = () => {
    
    axios
      .post('https://habaapi.glitexsolutions.co.ke/api/v1/verifications/pin/verify', { emailPin: pin })
      .then((response) => {
        console.log('Email Pin Verified:', response.data);

        // After verifying the email pin, send the OTP to the primary number
        axios
          .post('https://habaapi.glitexsolutions.co.ke/api/v1/verifications/otp/send', { phoneNumber: primaryNumber })
          .then((otpResponse) => {
            console.log('OTP Sent to Primary Number:', otpResponse.data);
            navigate('/verify-number');
          })
          .catch((otpError) => {
            console.error('Error sending OTP:', otpError);
          });
      })
      .catch((error) => {
        console.error('Error verifying email pin:', error);
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

      <label htmlFor="pin">Verification Pin</label>
      <input type="text" id="pin" value={pin} onChange={handlePinChange} />

      <button onClick={handleVerifyClick}>Verify</button>
    </div>
  );
}

export default VerifyEmail;