import React, { useState } from 'react';

const AppLogin = () => {
  const [loginPin, setLoginPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');

  const handleLoginPinChange = (event) => {
    setLoginPin(event.target.value);
  };

  const handleConfirmPinChange = (event) => {
    setConfirmPin(event.target.value);
  };

  const handleFinishClick = () => {
    if (loginPin === confirmPin) {
      console.log('PIN saved:', loginPin);
    } else {
      console.log('PINs do not match');
    }
  };

  return (
    <div class="app-pin">
      <h1>App Login PIN</h1>
      <p>Create a PIN to log in to the app</p>
      <label>
        Login PIN
        <input
          type="password"
          value={loginPin}
          onChange={handleLoginPinChange}
        />
      </label>
      <br />
      <label>
        Confirm PIN
        <input
          type="password"
          value={confirmPin}
          onChange={handleConfirmPinChange}
        />
      </label>
      <br />
      <button onClick={handleFinishClick}>Finish</button>
    </div>
  );
};

export default AppLogin;
