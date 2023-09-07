import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import '../Styles/CreateAccount.css';
import close from '../assets/close.png';

const CreateAccount = () => {
  const history = useNavigate();
  const [name, setName] = useState('');
  const [primaryNumber, setPrimaryNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secondaryNumber, setSecondaryNumber] = useState('');
  const [business, setBusiness] = useState('');
  const [location, setLocation] = useState('');
  const [loginPin, setLoginPin] = useState('');

  const [validationErrors, setValidationErrors] = useState({});

  const handleCancel = () => {
    history('/abort');
  };

  const handleButtonClick = () => {
    history('/abort');
  };

  const validateForm = () => {
    const errors = {};

    if (!name) {
      errors.name = 'This field is required';
    }
    if (!primaryNumber) {
      errors.primaryNumber = 'This field is required';
    }
    if (!email) {
      errors.email = 'This field is required';
    }
    if (!password) {
      errors.password = 'This field is required';
    }
    if (!secondaryNumber) {
      errors.secondaryNumber = 'This field is required';
    }
    if (!business) {
      errors.business = 'This field is required';
    }
    if (!location) {
      errors.location = 'This field is required';
    }
    if (!loginPin) {
      errors.loginPin = 'This field is required';
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleCreateAccount = () => {
    if (!validateForm()) {
      return;
    }

    const adminData = {
      username: name,
      phone: primaryNumber,
      email,
      password,
      secondary_phone: secondaryNumber,
      business_name: business,
      location,
      login_pin: loginPin,
    };

    axios
      .post('https://habaapi.glitexsolutions.co.ke/api/v1/auth/register', adminData)
      .then((response) => {
        console.log('Admin registered successfully:', response.data);

        axios
          .post('https://habaapi.glitexsolutions.co.ke/api/v1/verifications/pin/send', { email }) 
          .then((pinResponse) => {
            console.log('Email Verification Pin Sent:', pinResponse.data);

          
            history('/verify-email');
          })
          .catch((pinError) => {
            console.error('Error sending email verification pin:', pinError);
          });
      })
      .catch((error) => {
        console.error('Error registering admin:', error);
      });
  };



  return (
    <div className="create-account-container">
      <div className="create-account">
        <div className="close-btn-container">
          <div className="close-btn" onClick={handleButtonClick}>
            <img src={close} alt="close" />
          </div>
        </div>

        <div className="create-account-header">
          <h1>Create Admin Account</h1>
          <p>Enter account details for the new admin account</p>
        </div>
        <div className="create-account-details">
          <div className="create-account-detail">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={validationErrors.name ? validationErrors.name : ''}
              className={validationErrors.name ? 'error-input' : ''}
            />

            <label>Primary Number</label>
            <input
              type="text"
              value={primaryNumber}
              onChange={(e) => setPrimaryNumber(e.target.value)}
              placeholder={validationErrors.primaryNumber ? validationErrors.primaryNumber : ''}
              className={validationErrors.primaryNumber ? 'error-input' : ''}
            />

            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={validationErrors.email ? validationErrors.email : ''}
              className={validationErrors.email ? 'error-input' : ''}
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={validationErrors.password ? validationErrors.password : ''}
              className={validationErrors.password ? 'error-input' : ''}
            />
          </div>

          <div className="create-account-line"></div>

          <div className="create-account-detail1">
            <label>Secondary Number</label>
            <input
              type="text"
              value={secondaryNumber}
              onChange={(e) => setSecondaryNumber(e.target.value)}
              placeholder={validationErrors.secondaryNumber ? validationErrors.secondaryNumber : ''}
              className={validationErrors.secondaryNumber ? 'error-input' : ''}
            />

            <label>Business</label>
            <input
              type="text"
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              placeholder={validationErrors.business ? validationErrors.business : ''}
              className={validationErrors.business ? 'error-input' : ''}
            />

            <label>Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder={validationErrors.location ? validationErrors.location : ''}
              className={validationErrors.location ? 'error-input' : ''}
            />

            <label>Login Pin</label>
            <input
              type="password"
              value={loginPin}
              onChange={(e) => setLoginPin(e.target.value)}
              placeholder={validationErrors.loginPin ? validationErrors.loginPin : ''}
              className={validationErrors.loginPin ? 'error-input' : ''}
            />
          </div>
        </div>

        <div className="acc-btn">
          <button onClick={handleCancel} className="btn-cancel">Cancel</button>
          <button onClick={handleCreateAccount} className="btn-verify">Verify</button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;