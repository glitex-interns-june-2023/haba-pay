import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetStatus, setResetStatus] = useState('');
  const [timer, setTimer] = useState(0);
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

  const handleSendOTP = (e) => {
    e.preventDefault();
    setResetStatus('loading');

    // API call to send the OTP
    // Replace the SEND_OTP_API_ENDPOINT with send OTP API endpoint
    const SEND_OTP_API_ENDPOINT = 'https://example.com/send-otp';
    fetch(SEND_OTP_API_ENDPOINT, {
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
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setResetStatus('error');
      });
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setResetStatus('loading');

    // API call to reset the password using the OTP
    // Replace the RESET_PASSWORD_API_ENDPOINT with reset API endpoint
    const RESET_PASSWORD_API_ENDPOINT = 'https://example.com/reset-password';
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
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setResetStatus('error');
      });
  };

  const handleResendOTP = () => {
    setResetStatus('loading');

    // API call to resend the OTP
    // Replace the RESEND_OTP_API_ENDPOINT with resend OTP API endpoint
    const RESEND_OTP_API_ENDPOINT = 'https://example.com/resend-otp';
    fetch(RESEND_OTP_API_ENDPOINT, {
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
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setResetStatus('error');
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
      <h2>Reset Password</h2>
      {resetStatus === 'success' ? (
        <div>
          <p>Password reset successful.</p>
          <button type="button" onClick={() => navigate('/login')}>
            Go to Login
          </button>
        </div>
      ) : (
        <div>
          {resetStatus === 'otpSent' ? (
            <div>
              <p>An OTP has been sent to your email. Please enter it below.</p>
              <form onSubmit={handleResetPassword}>
                <label htmlFor="otp">OTP Code</label>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={handleOtpChange}
                />
                <br />
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                />
                <br />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                <br />
                {resetStatus === 'loading' && <p>Loading...</p>}
                {resetStatus === 'error' && (
                  <p>Error resetting password. Please try again.</p>
                )}
                <button type="submit">Reset Password</button>
              </form>
              {timer === 0 && (
                <button type="button" onClick={handleResendOTP}>
                  Resend OTP
                </button>
              )}
              {timer > 0 && <p>Resend OTP available in {timer} seconds</p>}
            </div>
          ) : (
            <div className="send-otp">
              <p>Enter your email to receive an OTP to reset your password.</p>
              <form onSubmit={handleSendOTP}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <br />
                {resetStatus === 'loading' && <p>Loading...</p>}
                {resetStatus === 'error' && (
                  <p>Error generating OTP. Please try again.</p>
                )}
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
