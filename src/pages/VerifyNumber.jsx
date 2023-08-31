import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const handleVerifyClick = async () => {
    try {
      const response = await fetch('https://habaapi.glitexsolutions.co.ke/api/google/verify-otp/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp }),
      });

      if (response.ok) {
        console.log('Number verification successful!');
      } else {
        console.log('Failed to verify number.');
      }
    } catch (error) {
      console.error('An error occurred while verifying the number:', error);
    }
  };

  const handleResendOtp = async () => {
    try {
      const response = await fetch('https://habaapi.glitexsolutions.co.ke/api/google/update-phone-number/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber: 'USER_PHONE_NUMBER' }),
      });

      if (response.ok) {
        console.log('OTP sent successfully!');
      } else {
        console.log('Failed to send OTP.');
      }
    } catch (error) {
      console.error('An error occurred while sending the OTP:', error);
    }
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
      <button onClick={handleVerifyClick}>Verify</button>
      <button onClick={handleResendOtp}>Resend OTP</button>
    </div>
  );
}

export default NumberVerification;
