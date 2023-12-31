import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ConfirmIdentity from '../Modals/ConfirmIdentity';
import withdraw from '../assets/withdraw.png';
import close from '../assets/close.png';
import '../Styles/WithdrawalModal.css';

const WithdrawalModal = ({ isOpen, withdrawalTransaction, closeModal, onApprove }) => {
    const [isConfirmIdentityModalOpen, setIsConfirmIdentityModalOpen] = useState(false);

    if (!isOpen || !withdrawalTransaction) {
      return null;
    }

    const handleConfirmIdentityClose = () => {
        setIsConfirmIdentityModalOpen(false);
    };

    const handleApprove = () => {
        axios
            .post(`/api/v1/admins/transactions/{id}/approve`)
            .then((response) => {
                console.log('Transaction approved:', response.data);
                onApprove();
            })
            .catch((error) => {
                console.error('Error approving transaction:', error);
            });
    };

    return (
        <div className="withdrawalmodal-container">
            <div className="withdrawalmodal-wrapper">
                <div className="close-btn-container">
                    <button className="close-btn" onClick={closeModal}>
                        <img src={close} alt="close" />
                    </button>
                </div>

                <div className="withdrawalmodal-header">
                    <h1>Transaction Details</h1>
                    <h2><span><img src={withdraw} alt="Withdraw" /></span>Withdrawal</h2>
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

                <Link to="/confirm-identity" className="withdrawalmodal-btn" onClick={handleApprove}>Approve</Link>
            </div>

            <ConfirmIdentity
                isOpen={isConfirmIdentityModalOpen}
                closeModal={handleConfirmIdentityClose}
            />
        </div>
    );
};

WithdrawalModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    withdrawalTransaction: PropTypes.object,
    closeModal: PropTypes.func.isRequired,
    onApprove: PropTypes.func.isRequired,
};

export default WithdrawalModal;