import React, { useState } from 'react';
import PropTypes from 'prop-types';
import close from '../assets/close.png'; 
import '../Styles/ConfirmIdentity.css';

const ConfirmIdentity = ({ isOpen, closeModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionApproved, setTransactionApproved] = useState(false);

    const handleFinishClick = () => {
        setProcessing(true);

        setTimeout(() => {
            setProcessing(false);
            setTransactionApproved(true);
        }, 2000);
    };

    const handleCloseClick = () => {
        closeModal(); 
    };

    return (
        <div className={`identity-container ${isOpen ? 'open' : ''}`}>
            <div className="identity-wrapper">
                <div className="close-btn-container">
                    <button className="close-btn" onClick={handleCloseClick}>
                        <img src={close} alt="close" />
                    </button>
                </div>

                <div className="identity-title">
                    <h1>Confirm Identity</h1>
                </div>

                <div className="identity-content">
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

                {transactionApproved ? (
                    <div className="notification">Transaction Approved</div>
                ) : (
                    <button
                        className="identity-btn"
                        onClick={handleFinishClick}
                        disabled={processing || !email || !password}
                    >
                        {processing ? "Processing..." : "Finish"}
                    </button>
                )}
            </div>
        </div>
    );
};

ConfirmIdentity.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ConfirmIdentity;
