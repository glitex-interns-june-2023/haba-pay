import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AppPin = () => {
  const navigate = useNavigate();
  const [loginPin, setLoginPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');

  const handleCreatePin = () => {
    if (loginPin === confirmPin) {
      toast.success('Account was created successfully');
      navigate('/home');
    } else {
      toast.error('PINs do not match. Please try again.');
    }
  };

  return (
    <div>
      <h1>App Login Pin</h1>
      <p>Create a PIN to log in to the app</p>
      <label>
        Login PIN
        <input
          type="password"
          value={loginPin}
          onChange={(e) => setLoginPin(e.target.value)}
        />
      </label>
      <br />
      <label>
        Confirm PIN
        <input
          type="password"
          value={confirmPin}
          onChange={(e) => setConfirmPin(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleCreatePin}>Finish</button>
    </div>
  );
};

export default AppPin;
