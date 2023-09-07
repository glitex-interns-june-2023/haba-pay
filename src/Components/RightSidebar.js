import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Axios from 'axios';
import WithdrawalModal from '../Modals/WithdrawalModal';
import DepositModal from '../Modals/DepositModal';
import withdraw from '../assets/withdraw.png';
import deposit from '../assets/deposit.png';
import sent from '../assets/sent.png';
import review from '../assets/review.png';
import user1 from '../assets/user1.png';
import '../Styles/RightSidebar.css';

const RightSidebar = () => {
    const [selectedStatus, setSelectedStatus] = useState('Pending');
    const [transactions, setTransactions] = useState([]);
    const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = useState(false);
    const [selectedWithdrawal, setSelectedWithdrawal] = useState(null);
    const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
    const [selectedDeposit, setSelectedDeposit] = useState(null);
    const [newUsersData, setNewUsersData] = useState([]);

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


    const openWithdrawalModal = (transaction) => {
        setSelectedWithdrawal(transaction);
        setIsWithdrawalModalOpen(true);
    };
    
    const closeWithdrawalModal = () => {
        setSelectedWithdrawal(null);
        setIsWithdrawalModalOpen(false);
    };

    const openDepositModal = (transaction) => {
        setSelectedDeposit(transaction);
        setIsDepositModalOpen(true);
    };
    
    const closeDepositModal = () => {
        setSelectedDeposit(null);
        setIsDepositModalOpen(false);
    };


    useEffect(() => {
        fetchNewUsersFromAPI();
    }, []);

    const fetchNewUsersFromAPI = () => {
        Axios.get('https://habaapi.glitexsolutions.co.ke/api/v1/admins/users/new')
            .then((response) => {
                const newUsers = response.data.data.data;
                setNewUsersData(newUsers);
            })
            .catch((error) => {
                console.error('Error fetching new users:', error);
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
                            <div className="transaction-detail" 
                                key={index} 
                                onClick={() => {
                                    if (transaction.type === 'withdraw') {
                                    openWithdrawalModal(transaction);
                                    } else if (transaction.type === 'deposit') {
                                    openDepositModal(transaction);
                                    }
                                }}
                              >
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

                    <WithdrawalModal
                        isOpen={isWithdrawalModalOpen}
                        closeModal={closeWithdrawalModal}
                        withdrawalTransaction={selectedWithdrawal}
                    />

                    <DepositModal
                        isOpen={isDepositModalOpen}
                        closeModal={closeDepositModal}
                        depositTransaction={selectedDeposit}
                    />
                </div>
            </div>

            <div className="new-reg-users">
                <div className="users-reg">
                    <div className="new-details">
                        <div className="details-title">New Users</div>
                        <div className="user-view">View All <img src={review} alt="" /></div>
                    </div>

                    <div className="user-reg">
                        {newUsersData.map((userData, index) => (
                            <div key={index}>
                                <div className="date-reg">
                                    <h1>{userData.date}</h1>
                                </div>
                                {userData.users.map((user, userIndex) => (
                                    <div className="reg-details" key={userIndex}>
                                        <div className="reg-detail">
                                            <div className="detail-name">{user.username}</div>
                                            <div className="detail-email">{user.email}</div>
                                        </div>
                                        <div className="view">
                                            <img src={user1} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
