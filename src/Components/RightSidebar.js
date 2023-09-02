import React, { useState, useEffect } from 'react';
import axios from 'axios';
import withdrawal from '../assets/withdrawal.png';
import deposit from '../assets/deposit.png';
import review from '../assets/review.png';
import user from '../assets/user.png';
import '../Styles/RightSidebar.css';

const RightSidebar = () => {
    const [selectedStatus, setSelectedStatus] = useState('Pending');
    const [transactions, setTransactions] = useState([
        {
            type: 'withdrawal',
            name: 'Jane Mukenya M.',
            phoneNumber: '+254712345678',
            currency: 'Ksh',
            amount: '240',
            time: '12:45 PM'
        },

        {
            type: 'withdrawal',
            name: 'Obi Peter',
            phoneNumber: '+254712345678',
            currency: 'Ksh',
            amount: '4000',
            time: '12:00 PM'
        },

        {
            type: 'deposit',
            name: 'Bola Tinubu',
            phoneNumber: '+254712345678',
            currency: 'Ksh',
            amount: '40',
            time: '11:45 PM'
        },

        {
            type: 'withdrawal',
            name: 'John Doe',
            phoneNumber: '+254712345678',
            currency: 'Ksh',
            amount: '60',
            time: '11:05 PM'
        },

        {
            type: 'deposit',
            name: 'Client Mwilu',
            phoneNumber: '+254712345678',
            currency: 'Ksh',
            amount: '100',
            time: '8:16 AM'
        },

        {
            type: 'withdrawal',
            name: 'Josephine Naruto',
            phoneNumber: '+254712345678',
            currency: 'Ksh',
            amount: '180',
            time: '5:55 AM'
        },

        {
            type: 'deposit',
            name: 'Grace Mwai',
            phoneNumber: '+254712345678',
            currency: 'Ksh',
            amount: '750',
            time: '1:07 PM'
        },
    ]);

    useEffect(() => {
        // Fetch data from API when selectedStatus changes
        fetchTransactionsFromAPI(selectedStatus);
    }, [selectedStatus]);

    const fetchTransactionsFromAPI = (status) => {
        axios.get(`https://habaapi.glitexsolutions.co.ke/api/v1/admins/transactions?status=${status}`)
            .then((response) => {
                setTransactions(response.data);
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
                        {transactions.map((transaction, index) => (
                            <div className="transaction-detail" key={index}>
                                <img src={transaction.type === 'withdrawal' ? withdrawal : deposit} alt="" />
                                <div className="admin-details">
                                    <div className="admin-detail">
                                        <div className="name">{transaction.name}</div>
                                        <div className="admin-number">{transaction.phoneNumber}</div>
                                    </div>
                                    <div className="status-details">
                                        <div className="amount">{transaction.currency} <span>{transaction.amount}</span></div>
                                        <div className="time">{transaction.time}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

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
    );
};

export default RightSidebar;