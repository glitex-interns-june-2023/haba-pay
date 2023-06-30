import React, { useState } from 'react';

function EmailVerification() {
  const [pin, setPin] = useState('');

  const handlePinChange = (event) => {
    setPin(event.target.value);
  };

  const handleVerifyClick = () => {
    // API call to verify the pin
    fetch('/api/verify-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pin }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the API
        if (data.success) {
          alert('Email verification successful!');
        } else {
          alert('Email verification failed. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error verifying email:', error);
        alert('An error occurred while verifying the email.');
      });
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
