import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AppPin = () => {
  const history = useNavigate();
  const [loginPin, setLoginPin] = useState('');

  const handleCreatePin = () => {
    // Handle login pin creation logic here
    // Redirect to the finish page or show a success toast
    toast.success('Account was created successfully');
    history('/dashboard');
  };

  return (
    <div>
      <h1>App Login Pin</h1>
      <p>Create a PIN to log in to the app</p>
      <input
        type="password"
        value={loginPin}
        onChange={(e) => setLoginPin(e.target.value)}
      />
      <button onClick={handleCreatePin}>Finish</button>
    </div>
  );
};

export default AppPin;
