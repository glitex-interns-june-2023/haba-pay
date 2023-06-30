import React, { useState } from 'react';

function NumberVerification() {
  const [otp, setOtp] = useState('');

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleVerifyClick = () => {
    // Perform verification logic here using the 'otp' value

    alert('Number verification successful!');
  };

  return (
    <div className="verify-number">
      <h1>Verify Number</h1>
      <p>A verification OTP was sent to the phone number you entered.</p>
      <label htmlFor="otp">OTP</label>
      <input
        type="text"
        id="otp"
        value={otp}
        onChange={handleOtpChange}
      />
      <button onClick={handleVerifyClick}>Verify</button>
    </div>
  );
}

export default NumberVerification;
