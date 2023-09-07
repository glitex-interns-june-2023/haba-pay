import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/VerifyEmail.css';
import close from '../assets/close.png';

function VerifyEmail({ primaryNumber }) {
  const navigate = useNavigate();
  const [pin, setPin] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleButtonClick = () => {
    navigate('/abort');
  };

  const handlePinChange = (event) => {
    setPin(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleVerifyClick = () => {
    const verificationData = {
      email: email,
      pin,
    };

    axios
      .post('https://habaapi.glitexsolutions.co.ke/api/v1/verifications/pin/verify', verificationData)
      .then((response) => {
        console.log('Email Pin Verified:', response.data);

        // After verifying the email pin, send the OTP to the primary number
        axios
          .post('https://habaapi.glitexsolutions.co.ke/api/v1/verifications/otp/send', { phone: primaryNumber })
          .then((otpResponse) => {
            console.log('OTP Sent to Primary Number:', otpResponse.data);
            navigate('/verify-number');
          })
          .catch((error) => {
            const { response: { data } = {} } = error;
            // setError(data); // If you want to handle the error here
            setErrorMessage(data.message);
          })
      })
      .catch((error) => {
        const { response: { data } = {} } = error;
        // setError(data); // If you want to handle the error here
        setErrorMessage(data.message);
      })
      
  };

  return (
    <div className="verify-email">
      <div className="close-btn-container">
        <div className="close-btn" onClick={handleButtonClick}>
          <img src={close} alt="close" />
        </div>
      </div>

      <div className="error-message">{errorMessage}</div>

      <div className="verify-email-header">
        <h1>Verify Email</h1>
        <p>A verification PIN was sent to the email account you entered</p>
      </div>

      <label htmlFor="pin">Verification Pin</label>
      <input type="text" id="pin" value={pin} onChange={handlePinChange} />

      <label htmlFor="email">Email</label>
      <input type="text" id="email" value={email} onChange={handleEmailChange} />

      <button onClick={handleVerifyClick}>Verify</button>
    </div>
  );
}

export default VerifyEmail;
