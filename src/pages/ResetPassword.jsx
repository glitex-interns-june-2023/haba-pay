import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetStatus, setResetStatus] = useState('');
  const navigate = useNavigate();

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResetStatus('loading');

    setTimeout(() => {
      setResetStatus('success');
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="reset-pwd">
      <h2>Reset Password</h2>
      <h3>Create a new password for the user</h3>

      {resetStatus === 'success' ? (
        <p>Reset instructions sent to your email address.</p>
      ) : (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />

            {resetStatus === 'loading' && <p>Loading...</p>}
          </form>

          <button type="submit" className="reset-btn">
              Finish
            </button>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
