import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import close from '../assets/close.png';
import '../Styles/ConfirmIdentity.css';

const ConfirmIdentity = ({ isOpen }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionApproved, setTransactionApproved] = useState(false);

    const handleFinishClick = () => {
        setProcessing(true);

        // Simulate an API call
        setTimeout(() => {
            setProcessing(false);
            setTransactionApproved(true);
        }, 2000);
    };

    const closeModal = () => {
        navigate('/home');
      };
    

    return (
        <div className={`identity-container ${isOpen ? 'open' : ''}`}>
            <div className="identity-wrapper">
                <div className="close-btn-container">
                    <button className="close-btn" onClick={closeModal}>
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
};

export default ConfirmIdentity;
