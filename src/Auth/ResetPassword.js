import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import '../Styles/ResetPassword.css';

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetStatus, setResetStatus] = useState("");
  const [timer, setTimer] = useState(0);
  const [error, setError] = useState(null);
  
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

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setResetStatus("loading");

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
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setResetStatus("otpVerified");
        } else {
          setResetStatus("error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setResetStatus("error");
      });
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setResetStatus("loading");

    const CONFIRM_PASSWORD_RESET_API_ENDPOINT =
      "https://habaapi.glitexsolutions.co.ke/api/admins/password-reset/uid/token/";

    const PASSWORD_RESET_API_ENDPOINT =
      "https://habaapi.glitexsolutions.co.ke/api/admins/password-reset/";

    fetch(CONFIRM_PASSWORD_RESET_API_ENDPOINT, {
      method: "POST",
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
      });
  };

  const handleResendOTP = () => {
    setResetStatus("loading");
    const RESEND_OTP_API_ENDPOINT =
      "https://habaapi.glitexsolutions.co.ke/api/google/update-email/";

    fetch(RESEND_OTP_API_ENDPOINT, {
      method: "POST",
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
          setResetStatus("error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setResetStatus("error");
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
      <h2 className="d-flex justify-content-center mt-2">Reset Password</h2>
      {resetStatus === "success" ? (
        <div>
          <p>Password reset successful.</p>
          <button type="button" onClick={() => navigate("/login")}>
            Go to Login
          </button>
        </div>
      ) : (
        <div>
          {resetStatus === "otpSent" ? (
            <div>
              <p>An OTP has been sent to your email. Please enter it below.</p>
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
                <button type="submit">Reset Password</button>
              </form>
            </div>
          ) : (
            <div className="send-otp d-flex justify-content-center align-items-center mt-5 flex-column">
              <p>Enter your email to receive an OTP to reset your password.</p>
              <form onSubmit={handleSendOTP}>
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