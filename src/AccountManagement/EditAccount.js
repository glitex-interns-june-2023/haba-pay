import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/EditAccount.css';
import close from '../assets/close.png';

const EditAccount = () => {
  const [name, setName] = useState('');
  const [primaryNumber, setPrimaryNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secondaryNumber, setSecondaryNumber] = useState('');
  const [business, setBusiness] = useState('');
  const [location, setLocation] = useState('');
  const [loginPin, setLoginPin] = useState('');
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/abort');
  };

  const handleButtonClick = () => {
    navigate('/abort');
  };

  const handleSave = () => {
    // Perform save functionality here
  };

  return (
    <div className="edit-account-container">
      <div className="edit-account">
      <div className="close-btn-container">
        <div className="close-btn" onClick={handleButtonClick}>
          <img src={close} alt="close" />
        </div>
      </div>

      <div className="edit-account-header">
        <h1>Edit Account Details</h1>
        <p>Make changes to account details</p>
      </div>

      <div className="edit-account-details">
        <div className="edit-account-detail">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Primary Number</label>
          <input
            type="text"
            value={primaryNumber}
            onChange={(e) => setPrimaryNumber(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="edit-account-line"></div>

        <div className="edit-account-detail1">
          <label>Secondary Number</label>
          <input
            type="text"
            value={secondaryNumber}
            onChange={(e) => setSecondaryNumber(e.target.value)}
          />

          <label>Business</label>
          <input
            type="text"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
          />

          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <label>Login Pin</label>
          <input
            type="password"
            value={loginPin}
            onChange={(e) => setLoginPin(e.target.value)}
          />
        </div>
      </div>

      <div className="acc-btn">
        <button onClick={handleCancel} className="btn-cancel">Cancel</button>
        <button onClick={handleSave} className="btn-save">Save</button>
      </div>
    </div>
    </div>
  );
};

export default EditAccount;
