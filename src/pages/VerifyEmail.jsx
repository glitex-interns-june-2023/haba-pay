import React, { useState } from 'react';

function EmailVerification() {
  const [pin, setPin] = useState('');

  const handlePinChange = (event) => {
    setPin(event.target.value);
  };

  const handleVerifyClick = () => {
   
  };

  return (
    <div className="verify-email">
      <h1>Verify Email</h1>
      <p>A verification PIN was sent to the email account you entered</p>
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
