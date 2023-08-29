import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import withdrawal from '../assets/withdrawal.png';
import close from '../assets/close.png';
import '../Styles/WithdrawalModal.css';

const WithdrawalModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (isOpen && !event.target.closest('.withdrawalmodal-wrapper')) {
            closeModal();
        }
    };

    const modalClassName = isOpen ? 'withdrawalmodal-container open' : 'withdrawalmodal-container';

    return (
        <div className={modalClassName} onClick={handleOutsideClick}>
            <div className="withdrawalmodal-wrapper">
                <div className="close-btn-container">
                    <button className="close-btn" onClick={closeModal}>
                        <img src={close} alt="close" />
                    </button>
                </div>

                <div className="withdrawalmodal-header">
                    <h1>Transaction Details</h1>
                    <h2><span><img src={withdrawal} alt="Withdrawal" /></span>Withdrawal</h2>
                </div>

                <div className="withdrawalmodal-line"></div>

                <div className="withdrawalmodal-content">
                    <div className="withdrawalmodal-request">
                        <h2>Request by</h2>
                        <h3>Jane Mukenya M.</h3>
                    </div>

                    <div className="withdrawalmodal-amount">
                        <h2>Amount</h2>
                        <h3>Ksh 240</h3>
                    </div>

                    <div className="withdrawalmodal-number">
                        <h2>Number</h2>
                        <h3>+254 712345678</h3>
                    </div>

                    <div className="withdrawalmodal-time">
                        <h2>Time</h2>
                        <h3>12:45 PM 5th March 2023</h3>
                    </div>
                </div>

                <Link to="/confirm-identity" className="withdrawalmodal-btn">Approve</Link>
            </div>
        </div>
    );
};

export default WithdrawalModal;
