import React from 'react';
import deposit from '../assets/deposit.png';

const DepositModal = () => {
    return (
        <div className="depositmodal-container">
            <div className="depositmodal-wrapper">
                <div className="depositmodal-header">
                    <h1>Transaction Details</h1>
                    <h2><span><img src={deposit} alt="deposit" /></span>Deposit</h2>
                </div>

                <div className="depositmodal-content">
                    <div className="depositmodal-transaction">
                        <div className="depositmodal-from">
                            <h2>From</h2>
                            <h3>Jane Mukenya</h3>
                            <h4>0712345678</h4>
                        </div>

                        <div className="depositmodal-to">
                            <h2>To</h2>
                            <h3>Jane Mukenya</h3>
                            <h4>0712345678</h4>
                        </div>
                    </div>

                    <div className="depositmodal-amount">
                        <h2>Amount</h2>
                        <h3>Ksh 250</h3>
                    </div>

                    <div className="transaction-id">
                        <h2>Transaction ID</h2>
                        <h3>BN12345678</h3>
                    </div>

                    <div className="depositmodal-time">
                        <h2>Time</h2>
                        <h3>12:45 PM 5th March 2023</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepositModal;