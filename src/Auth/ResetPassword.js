<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/ResetPassword.css';
import close from '../assets/close.png';
=======
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
>>>>>>> 2c2c18aac105acbad825e719cdaebadbbee0b06b

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetStatus, setResetStatus] = useState("");
  const [timer, setTimer] = useState(0);
<<<<<<< HEAD
  const [errorMessage, setErrorMessage] = useState('');
=======
  const [error, setError] = useState(null);
  
>>>>>>> 2c2c18aac105acbad825e719cdaebadbbee0b06b
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

<<<<<<< HEAD
  const handleButtonClick = () => {
    navigate('/login');
  };

  const handleSendOTP = (e) => {
=======
  const handleSendOTP = async (e) => {
>>>>>>> 2c2c18aac105acbad825e719cdaebadbbee0b06b
    e.preventDefault();
    setResetStatus("loading");

<<<<<<< HEAD
    const RESET_PASSWORD_API_ENDPOINT = 'https://habaapi.glitexsolutions.co.ke/api/v1/auth/reset-password';

    fetch(RESET_PASSWORD_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
=======
    // Replace with the correct send OTP API endpoint
    try {
      const response = await axios.post("/api/v1/auth/reset-password", {
        email: email,
      });
      const data = response.data;

      if (data.success) {
        setResetStatus("otpSent");
        setTimer(30);
      } else {
        setResetStatus("error");
      }
    } catch ({ response: { data: error } = {} }) {

      console.log("testing error", error);
      setError(error);
      setResetStatus("error");
    }
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    setResetStatus("loading");

    // Replace with the correct verify OTP API endpoint
    const VERIFY_OTP_API_ENDPOINT =
      "https://habaapi.glitexsolutions.co.ke/api/google/verify-otp/";

    fetch(VERIFY_OTP_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        otp,
>>>>>>> 2c2c18aac105acbad825e719cdaebadbbee0b06b
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
<<<<<<< HEAD
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
=======
          setResetStatus("otpVerified");
        } else {
          setResetStatus("error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setResetStatus("error");
>>>>>>> 2c2c18aac105acbad825e719cdaebadbbee0b06b
      });
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setResetStatus("loading");

<<<<<<< HEAD
    const RESET_PASSWORD_API_ENDPOINT = 'https://habaapi.glitexsolutions.co.ke/api/v1/auth/reset-password';

    fetch(RESET_PASSWORD_API_ENDPOINT, {
      method: 'POST',
=======
    // Replace with the correct confirm password reset API endpoint
    const CONFIRM_PASSWORD_RESET_API_ENDPOINT =
      "https://habaapi.glitexsolutions.co.ke/api/admins/password-reset/uid/token/";

    // Replace with the correct password reset API endpoint
    const PASSWORD_RESET_API_ENDPOINT =
      "https://habaapi.glitexsolutions.co.ke/api/admins/password-reset/";

    fetch(CONFIRM_PASSWORD_RESET_API_ENDPOINT, {
      method: "POST",
>>>>>>> 2c2c18aac105acbad825e719cdaebadbbee0b06b
      headers: {
        "Content-Type": "application/json",
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
<<<<<<< HEAD
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
=======
          return fetch(PASSWORD_RESET_API_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              newPassword,
            }),
          });
        } else {
          setResetStatus("error");
        }
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setResetStatus("success");
          navigate("/login");
        } else {
          setResetStatus("error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setResetStatus("error");
>>>>>>> 2c2c18aac105acbad825e719cdaebadbbee0b06b
      });
  };

  const handleResendOTP = () => {
    setResetStatus("loading");

<<<<<<< HEAD
    const RESET_PASSWORD_API_ENDPOINT = 'https://habaapi.glitexsolutions.co.ke/api/v1/auth/reset-password';

    fetch(RESET_PASSWORD_API_ENDPOINT, {
      method: 'POST',
=======
    // Reuse the send OTP API endpoint for resending OTP
    const RESEND_OTP_API_ENDPOINT =
      "https://habaapi.glitexsolutions.co.ke/api/google/update-email/";

    fetch(RESEND_OTP_API_ENDPOINT, {
      method: "POST",
>>>>>>> 2c2c18aac105acbad825e719cdaebadbbee0b06b
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setResetStatus("otpSent");
          setTimer(30);
        } else {
<<<<<<< HEAD
          setResetStatus('error');
          setErrorMessage(data.message || 'An error occurred. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setResetStatus('error');
        setErrorMessage('An error occurred. Please try again.');
=======
          setResetStatus("error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setResetStatus("error");
>>>>>>> 2c2c18aac105acbad825e719cdaebadbbee0b06b
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
<<<<<<< HEAD
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
=======
      <h2 className="d-flex justify-content-center mt-2">Reset Password</h2>
      {resetStatus === "success" ? (
        <div>
          <p>Password reset successful.</p>
          <button type="button" onClick={() => navigate("/login")}>
            Go to Login
>>>>>>> 2c2c18aac105acbad825e719cdaebadbbee0b06b
          </button>
        </div>
      ) : (
        <div>
          {resetStatus === "otpSent" ? (
            <div>
              <p>An OTP has been sent to your email. Please enter it below.</p>
<<<<<<< HEAD
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
=======
              <form onSubmit={handleVerifyOTP}>
                <label htmlFor="otp">OTP Code</label>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={handleOtpChange}
                />
                <br />
                {resetStatus === "loading" && <p>Loading...</p>}
                {resetStatus === "error" && (
                  <p>Error verifying OTP. Please try again.</p>
                )}
>>>>>>> 2c2c18aac105acbad825e719cdaebadbbee0b06b
                <button type="submit">Verify OTP</button>
              </form>
              {timer === 0 && (
                <button type="button" onClick={handleResendOTP}>
                  Resend OTP
                </button>
              )}
              {timer > 0 && <p>Resend OTP available in {timer} seconds</p>}
            </div>
          ) : resetStatus === "otpVerified" ? (
            <div>
              <p>OTP verified. Enter your new password to reset.</p>
              <form onSubmit={handleResetPassword}>
<<<<<<< HEAD
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
=======
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
                {resetStatus === "loading" && <p>Loading...</p>}
                {resetStatus === "error" && (
                  <p>Error resetting password. Please try again.</p>
                )}
>>>>>>> 2c2c18aac105acbad825e719cdaebadbbee0b06b
                <button type="submit">Reset Password</button>
              </form>
            </div>
          ) : (
            <div className="send-otp d-flex justify-content-center align-items-center mt-5 flex-column">
              <p>Enter your email to receive an OTP to reset your password.</p>
              <form onSubmit={handleSendOTP}>
<<<<<<< HEAD
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
=======
                <label htmlFor="email" className="m-3">Email</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <br />
                {resetStatus === "loading" && <p>Loading...</p>}
                {resetStatus === "error" && (
                  <p style={{ color: "red" }}>
                    {error?.message || "Error sending OTP. Please try again."}
                  </p>
                )}
>>>>>>> 2c2c18aac105acbad825e719cdaebadbbee0b06b
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