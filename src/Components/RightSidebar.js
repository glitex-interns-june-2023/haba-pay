import React, { useState, useEffect } from 'react';
import axios from 'axios';
import withdraw from '../assets/withdraw.png';
import deposit from '../assets/deposit.png';
import sent from '../assets/sent.png';
import review from '../assets/review.png';
import user from '../assets/user.png';
import '../Styles/RightSidebar.css';

const RightSidebar = () => {
    const [selectedStatus, setSelectedStatus] = useState('Pending');
    const [transactions, setTransactions] = useState([
        {
            type: 'withdraw',
            full_name: 'Jane Mukenya M.',
            phone: '+254712345678',
            currency: 'Ksh',
            amount: '240',
            timestamp: '12:45 PM'
        },

        {
            type: 'withdraw',
            full_name: 'Obi Peter',
            phone: '+254712345678',
            currency: 'Ksh',
            amount: '4000',
            timestamp: '12:00 PM'
        },

        {
            type: 'sent',
            full_name: 'Bola Tinubu',
            phone: '+254712345678',
            currency: 'Ksh',
            amount: '40',
            timestamp: '11:45 PM'
        },

        {
            type: 'withdraw',
            full_name: 'John Doe',
            phone: '+254712345678',
            currency: 'Ksh',
            amount: '60',
            timestamp: '11:05 PM'
        },

        {
            type: 'sent',
            full_name: 'Client Mwilu',
            phone: '+254712345678',
            currency: 'Ksh',
            amount: '100',
            timestamp: '8:16 AM'
        },

        {
            type: 'withdraw',
            full_name: 'Josephine Naruto',
            phoneNumber: '+254712345678',
            currency: 'Ksh',
            amount: '180',
            timestamp: '5:55 AM'
        },

        {
            type: 'sent',
            full_name: 'Grace Mwai',
            phone: '+254712345678',
            currency: 'Ksh',
            amount: '750',
            timestamp: '1:07 PM'
        },
    ]);

    useEffect(() => {
        // Fetch data from API when selectedStatus changes
        fetchTransactionsFromAPI(selectedStatus);
    }, [selectedStatus]);

    const fetchTransactionsFromAPI = (status) => {
        axios
            .get(`https://habaapi.glitexsolutions.co.ke/api/v1/admins/transactions?status=${status}`)
            .then((response) => {
                const transactionData = response.data.data.data;

                setTransactions(transactionData);
            })
            .catch((error) => {
                console.error('Error fetching data from API:', error);
            });
    };


    return (
        <div className="right-sidebar">
            <div className="transactions">
                <div className="transaction">
                    <h1>Transactions</h1>
                    <div className="transaction-status">
                        <button className="pending-btn" onClick={() => setSelectedStatus('Pending')}>Pending</button>
                        <button className="approved-btn" onClick={() => setSelectedStatus('Approved')}>Approved</button>
                    </div>

                    <div className="transaction-details">
                        {Array.isArray(transactions) && transactions.map((transaction, index) => (
                            <div className="transaction-detail" key={index}>
                                <img src={transaction.type === 'withdraw' ? withdraw : transaction.type === 'deposit' ? deposit : sent} alt="" />
                                <div className="admin-details">
                                    <div className="admin-detail">
                                        <div className="name">{transaction.full_name}</div>
                                        <div className="admin-number">{transaction.phone}</div>
                                    </div>
                                    <div className="status-details">
                                        <div className="amount">{transaction.currency} <span>{transaction.amount}</span></div>
                                        <div className="time">{transaction.timestamp}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="new-reg-users">
                <div className="users-reg">
                    <div className="new-details">
                        <div className="details-title">New Users</div>
                        <div className="user-view">View All <img src={review} alt="" /></div>
                    </div>

                    <div className="user-reg">
                        <div className="date-reg">
                            <h1>5th March 2023</h1>
                        </div>

                        <div className="reg-details">
                            <div className="reg-detail">
                                <div className="detail-name">Grace Mwai</div>
                                <div className="detail-email">gracemwai444@haba.co.ke</div>
                            </div>

                            <div className="view">
                                <img src={user} alt="" />
                            </div>
                        </div>

                        <div className="reg-details">
                            <div className="reg-detail">
                                <div className="detail-name">Bola Tinubu</div>
                                <div className="detail-email">bolatinubu00@outlook.com</div>
                            </div>

                            <div className="view">
                                <img src={user} alt="" />
                            </div>
                        </div>

                        <div className="reg-details">
                            <div className="reg-detail">
                                <div className="detail-name">Nancy Wajacoki</div>
                                <div className="detail-email">nancywajacoki22@yahoo.com</div>
                            </div>

                            <div className="view">
                                <img src={user} alt="" />
                            </div>
                        </div>

                        <div className="reg-details">
                            <div className="reg-detail">
                                <div className="detail-name">Peter Obi</div>
                                <div className="detail-email">obidientpeter@state.ng</div>
                            </div>

                            <div className="view">
                                <img src={user} alt="" />
                            </div>
                        </div>

                        <div className="reg-details">
                            <div className="reg-detail">
                                <div className="detail-name">Client Mwilu</div>
                                <div className="detail-email">clientmwilu@gmail.com</div>
                            </div>

                            <div className="view">
                                <img src={user} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;