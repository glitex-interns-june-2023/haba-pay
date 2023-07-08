import React, { useState } from 'react';
import checkbox from '../Assets/checkbox.png';

function SuspendAccount() {
  const [isSuspended, setIsSuspended] = useState(false);

  const handleCancel = () => {
    // cancel logic
    console.log('Cancel');
  };

  const handleSuspend = () => {
    // suspend logic
    setIsSuspended(true);
    console.log('Suspend');
  };

  return (
    <div className="suspend-account">
      <h1>Confirm Suspend</h1>
      <div className="suspend-details">
        <div className="suspend-detail">
          <img className="checkbox" src={checkbox} alt="Checkbox" />
        </div>

        <div className="suspend-detail">
          <h3>Personal Details</h3>
          <p>Name: John Doe</p>
          <p>Email: johndoe@example.com</p>
          <p>Number: 254766675678</p>
          <p>Location: Machakos, Kenya</p>
        </div>

        <div className="suspend-detail">
          <h3>Account Details</h3>
          <p>Status: Active</p>
          <p>Balance: Ksh 00.00</p>
          <p>Business: n/a</p>
          <p>Created: 2 Feb 2023</p>
        </div>

        <div className="suspend-detail">
          <h3>Other Actions</h3>
          <p>Edit Details</p>
          <p>Delete</p>
          <p>Contact</p>
        </div>
      </div>
      <div>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleSuspend} disabled={isSuspended}>
          {isSuspended ? 'Suspended' : 'Suspend'}
        </button>
      </div>
    </div>
  );
}

export default SuspendAccount;
