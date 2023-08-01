import React, { useState } from 'react';
import checkbox from '../assets/checkbox.png';

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
          <p>Name: <span>John Doe</span></p>
          <p>Email: <span>johndoe@example.com</span></p>
          <p>Number: <span>254766675678</span></p>
          <p>Location: <span>Machakos, Kenya</span></p>
        </div>

        <div className="suspend-detail">
          <h3>Account Details</h3>
          <p>Status: <span>Active</span></p>
          <p>Balance: <span>Ksh 00.00</span></p>
          <p>Business: <span>n/a</span></p>
          <p>Created: <span>2 Feb 2023</span></p>
        </div>

        <div className="suspend-detail">
          <h3>Other Actions</h3>
          <div className="suspend-actions">
            <p><span>
              <svg className="suspend-edit" xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                <path d="M10.1196 9.79312C9.15111 9.79312 8.20441 9.50595 7.39918 8.96791C6.59394 8.42986 5.96634 7.66513 5.59573 6.7704C5.22512 5.87567 5.12815 4.89113 5.31708 3.94129C5.50602 2.99145 5.97237 2.11897 6.65717 1.43417C7.34196 0.749375 8.21445 0.283023 9.16429 0.0940883C10.1141 -0.0948466 11.0987 0.00212161 11.9934 0.372731C12.8881 0.74334 13.6529 1.37094 14.1909 2.17618C14.7289 2.98142 15.0161 3.92811 15.0161 4.89656C15.0127 6.19415 14.4957 7.43761 13.5781 8.35515C12.6606 9.27269 11.4171 9.78968 10.1196 9.79312ZM10.1196 1.95863C9.53849 1.95863 8.97047 2.13093 8.48733 2.45376C8.00419 2.77658 7.62762 3.23543 7.40526 3.77226C7.18289 4.3091 7.12471 4.89982 7.23807 5.46973C7.35144 6.03963 7.63125 6.56312 8.04212 6.974C8.453 7.38488 8.97649 7.66469 9.5464 7.77805C10.1163 7.89141 10.707 7.83323 11.2439 7.61086C11.7807 7.3885 12.2395 7.01193 12.5624 6.52879C12.8852 6.04565 13.0575 5.47763 13.0575 4.89656C13.0575 4.11737 12.748 3.3701 12.197 2.81913C11.646 2.26816 10.8987 1.95863 10.1196 1.95863ZM0.979312 18.9334C0.719582 18.9334 0.470491 18.8302 0.286834 18.6465C0.103177 18.4629 0 18.2138 0 17.9541C0 11.7518 7.09022 11.7517 10.1196 11.7517C11.0597 11.7517 11.8954 11.7517 12.6527 11.8432C12.9103 11.8632 13.1496 11.9842 13.3183 12.1799C13.4871 12.3756 13.5717 12.63 13.5537 12.8878C13.5304 13.1465 13.4066 13.3858 13.2088 13.5542C13.0111 13.7227 12.7552 13.8069 12.496 13.7887C11.7909 13.7887 11.0075 13.7104 10.1196 13.7104C3.35578 13.7104 1.95862 15.4078 1.95862 17.9541C1.96038 18.0832 1.93625 18.2113 1.88766 18.3309C1.83906 18.4505 1.76699 18.5592 1.6757 18.6505C1.58441 18.7417 1.47576 18.8138 1.35615 18.8624C1.23654 18.911 1.1084 18.9351 0.979312 18.9334ZM12.8747 19.9257C12.615 19.9255 12.3661 19.8222 12.1826 19.6385C12.0795 19.5402 12.0001 19.4198 11.9503 19.2864C11.9006 19.1529 11.8818 19.0099 11.8954 18.8681L12.1043 16.361C12.1204 16.1305 12.2176 15.9132 12.3785 15.7473L19.5862 8.5396C20.0835 8.07891 20.7364 7.82296 21.4143 7.82296C22.0922 7.82296 22.7451 8.07891 23.2423 8.5396C23.4875 8.78672 23.6808 9.08036 23.8109 9.40327C23.9409 9.72617 24.0051 10.0718 23.9997 10.4199C24.0048 10.7407 23.9462 11.0594 23.8274 11.3575C23.7087 11.6555 23.532 11.9271 23.3076 12.1565L16.0999 19.3643C15.94 19.5282 15.7272 19.63 15.4992 19.6515L12.9661 19.8866L12.8747 19.9257ZM14.0237 16.8703L13.9454 17.8627L14.9639 17.7713L21.9235 10.8116C22.0057 10.7131 22.0477 10.5872 22.0411 10.4591C22.0406 10.2773 21.9758 10.1015 21.8582 9.96287C21.7299 9.86748 21.5742 9.81597 21.4143 9.81597C21.2544 9.81597 21.0987 9.86748 20.9703 9.96287L14.0237 16.8703Z" fill="#323232"/>
              </svg>
              Edit Details</span></p>

            <p><span>
              <svg className="suspend-delete" xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                <path d="M17 3.92578C17.2652 3.92578 17.5196 4.03114 17.7071 4.21867C17.8946 4.40621 18 4.66056 18 4.92578C18 5.191 17.8946 5.44535 17.7071 5.63289C17.5196 5.82042 17.2652 5.92578 17 5.92578H16L15.997 5.99678L15.064 19.0678C15.0281 19.5724 14.8023 20.0446 14.4321 20.3894C14.0619 20.7341 13.5749 20.9258 13.069 20.9258H4.93C4.42414 20.9258 3.93707 20.7341 3.56688 20.3894C3.1967 20.0446 2.97092 19.5724 2.935 19.0678L2.002 5.99778C2.00048 5.97381 1.99982 5.9498 2 5.92578H1C0.734784 5.92578 0.48043 5.82042 0.292893 5.63289C0.105357 5.44535 0 5.191 0 4.92578C0 4.66056 0.105357 4.40621 0.292893 4.21867C0.48043 4.03114 0.734784 3.92578 1 3.92578H17ZM13.997 5.92578H4.003L4.931 18.9258H13.069L13.997 5.92578ZM11 0.925781C11.2652 0.925781 11.5196 1.03114 11.7071 1.21867C11.8946 1.40621 12 1.66056 12 1.92578C12 2.191 11.8946 2.44535 11.7071 2.63289C11.5196 2.82042 11.2652 2.92578 11 2.92578H7C6.73478 2.92578 6.48043 2.82042 6.29289 2.63289C6.10536 2.44535 6 2.191 6 1.92578C6 1.66056 6.10536 1.40621 6.29289 1.21867C6.48043 1.03114 6.73478 0.925781 7 0.925781H11Z" fill="#323232"/>
              </svg>
              Delete</span></p>

            <p><span>
              <svg className="suspend-contact" xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                <path d="M3.54 2.92578C3.6 3.81578 3.75 4.68578 3.99 5.51578L2.79 6.71578C2.38 5.51578 2.12 4.24578 2.03 2.92578H3.54ZM13.4 14.9458C14.25 15.1858 15.12 15.3358 16 15.3958V16.8858C14.68 16.7958 13.41 16.5358 12.2 16.1358L13.4 14.9458ZM4.5 0.925781H1C0.45 0.925781 0 1.37578 0 1.92578C0 11.3158 7.61 18.9258 17 18.9258C17.55 18.9258 18 18.4758 18 17.9258V14.4358C18 13.8858 17.55 13.4358 17 13.4358C15.76 13.4358 14.55 13.2358 13.43 12.8658C13.3307 12.8298 13.2256 12.8128 13.12 12.8158C12.86 12.8158 12.61 12.9158 12.41 13.1058L10.21 15.3058C7.37543 13.8562 5.06961 11.5504 3.62 8.71578L5.82 6.51578C6.1 6.23578 6.18 5.84578 6.07 5.49578C5.69065 4.34384 5.49821 3.13858 5.5 1.92578C5.5 1.37578 5.05 0.925781 4.5 0.925781Z" fill="#323232"/>
              </svg>
              Contact</span></p>
          </div>
        </div>
      </div>
      <div>
        
        <div className="suspendaccount-btns">
          <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
          <button className="suspend-btn" onClick={handleSuspend} disabled={isSuspended}>
            {isSuspended ? 'Suspended' : 'Suspend'}
        </button>
        </div>
      </div>
    </div>
  );
}

export default SuspendAccount;
