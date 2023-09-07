import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/ResetPassword.css';
import close from '../assets/close.png';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetStatus, setResetStatus] = useState('');
  const [timer, setTimer] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleButtonClick = () => {
    navigate('/login');
  };

  const handleSendOTP = (e) => {
    e.preventDefault();
    setResetStatus('loading');

    const RESET_PASSWORD_API_ENDPOINT = 'https://habaapi.glitexsolutions.co.ke/api/v1/auth/reset-password';

    fetch(RESET_PASSWORD_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setResetStatus('otpSent');
          setTimer(30);
        } else {
          setResetStatus('error');
          setErrorMessage(data.message || 'An error occurred. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setResetStatus('error');
        setErrorMessage('An error occurred. Please try again.');
      });
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setResetStatus('loading');

    const RESET_PASSWORD_API_ENDPOINT = 'https://habaapi.glitexsolutions.co.ke/api/v1/auth/reset-password';

    fetch(RESET_PASSWORD_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        otp,
        newPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setResetStatus('success');
          navigate('/login');
        } else {
          setResetStatus('error');
          setErrorMessage(data.message || 'An error occurred. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setResetStatus('error');
        setErrorMessage('An error occurred. Please try again.');
      });
  };

  const handleResendOTP = () => {
    setResetStatus('loading');

    const RESET_PASSWORD_API_ENDPOINT = 'https://habaapi.glitexsolutions.co.ke/api/v1/auth/reset-password';

    fetch(RESET_PASSWORD_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setResetStatus('otpSent');
          setTimer(30);
        } else {
          setResetStatus('error');
          setErrorMessage(data.message || 'An error occurred. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setResetStatus('error');
        setErrorMessage('An error occurred. Please try again.');
      });
  };

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => {
        clearInterval(countdown);
      };
    }
  }, [timer]);

  return (
    <div className="reset-pwd">
      <div className="close-btn-container">
        <div className="close-btn" onClick={handleButtonClick}>
          <img src={close} alt="close" />
        </div>
      </div>

      <div className="reset-pwd-header">
        <h2>Reset Password</h2>
      </div>
      {resetStatus === 'success' ? (
        <div>
          <p>Password reset successful.</p>
          <button type="button" onClick={() => navigate('/login')}>
            Login
          </button>
        </div>
      ) : (
        <div>
          {resetStatus === 'otpSent' ? (
            <div>
              <p>An OTP has been sent to your email. Please enter it below.</p>
              <form onSubmit={handleResetPassword}>
                <div className="form-group">
                  {resetStatus === 'loading' && <p>Loading...</p>}
                  {resetStatus === 'error' && <p>{errorMessage}</p>}
                  <label htmlFor="otp">OTP Code</label>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={handleOtpChange}
                  />
                </div>
                <button type="submit">Verify OTP</button>
              </form>
              {timer === 0 && (
                <button type="button" onClick={handleResendOTP}>
                  Resend OTP
                </button>
              )}
              {timer > 0 && <p>Resend OTP available in {timer} seconds</p>}
            </div>
          ) : resetStatus === 'otpVerified' ? (
            <div>
              <p>OTP verified. Enter your new password to reset.</p>
              <form onSubmit={handleResetPassword}>
                <div className="form-group">
                  {resetStatus === 'loading' && <p>Loading...</p>}
                  {resetStatus === 'error' && <p>{errorMessage}</p>}
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </div>
                <button type="submit">Reset Password</button>
              </form>
            </div>
          ) : (
            <div className="send-otp">
              <p>Enter your email to receive an OTP to reset your password.</p>
              <form onSubmit={handleSendOTP}>
                <div className="form-group">
                  {resetStatus === 'loading' && <p>Loading...</p>}
                  {resetStatus === 'error' && <p>{errorMessage}</p>}
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <button type="submit">Send OTP</button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResetPassword;