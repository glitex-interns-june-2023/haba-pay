import React from 'react';
import { Link } from 'react-router-dom';
import withdrawal from '../assets/withdrawal.png';
import '../Styles/WithdrawalModal.css';

const WithdrawalModal = () => {
    return (
        <div className="withdrawalmodal-container">
            <div className="withdrawalmodal-wrapper">
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