import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/VerifyEmail.css';
import close from '../assets/close.png';

function EmailVerification() {
  const navigate = useNavigate();
  const [pin, setPin] = useState('');

  const handleButtonClick = () => {
    navigate('/abort');
  };

  const handlePinChange = (event) => {
    setPin(event.target.value);
  };

  const handleVerifyClick = () => {
   
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
        type="text"
        id="pin"
        value={pin}
        onChange={handlePinChange}
      />
      </form>
      <button onClick={handleVerifyClick}>Verify</button>
    </div>
  );
}

export default EmailVerification;
