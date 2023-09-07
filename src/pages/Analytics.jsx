import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/Analytics.css';
import LeftSidebar from '../Components/LeftSidebar';
import Navbar from '../Components/Navbar';
import AnalyticsChart from '../Components/AnalyticsChart';
import map from '../assets/map.png';
import stats from '../assets/stats.png';
import manage from '../assets/manage.png';

const Analytics = () => {
    const [analyticsData, setAnalyticsData] = useState({
        weeklyTransactions: {
          total: 0,
          percentage: 0,
        },
        weeklySignups: {
          total: 0,
          percentage: 0,
        },
        weeklyExchanges: {
          total: 0,
          percentage: 0,
        },
    });

    const [userData, setUserData] = useState(null);

    
  useEffect(() => {
    axios.get('https://habaapi.glitexsolutions.co.ke/api/v1/analytics/overview') 
      .then((response) => {
        const data = response.data.data;
        setAnalyticsData({
          weeklyTransactions: data.weekly_transactions,
          weeklySignups: data.weekly_signups,
          weeklyExchanges: data.weekly_exchanges,
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = 'https://habaapi.glitexsolutions.co.ke/api/v1/analytics/activity';
  
        const response = await axios.get(apiUrl);
  
        if (response.data.success) {
          const userData = response.data.data;
          setUserData(userData);
        } else {
          console.error('API request failed:', response.data.message);
        }
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    }
  
    fetchData();
  }, []);
  

    
    return (
        <div className="analytics-container">
            <LeftSidebar />

            <div className="analytics-content">
                <Navbar />

                <div className="analytics-statistics">
                    <div className="analytic-statistic">
                        <div className="weekly-analytics">
                            <div className="weekly-analytic">
                                <h2>Weekly Usage</h2>
                                <h3>{analyticsData.weeklyTransactions.total} Transactions</h3>
                                <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
                                    <path d="M17.8049 0.459118L13.4745 0.980859C13.331 0.99825 13.2701 1.17434 13.3723 1.27651L14.6614 2.56565L9.74838 7.4787L7.53533 5.26783C7.39837 5.13087 7.1788 5.13304 7.04402 5.26783L0.050522 12.2635C0.0181562 12.2962 0 12.3403 0 12.3863C0 12.4323 0.0181562 12.4765 0.050522 12.5092L1.02879 13.4918C1.09618 13.5592 1.20705 13.5592 1.27444 13.4918L7.28967 7.4787L9.50055 9.68958C9.63751 9.82436 9.85707 9.82436 9.99185 9.68958L15.8919 3.79391L17.181 5.08304C17.2041 5.10603 17.2332 5.12208 17.265 5.12935C17.2967 5.13662 17.3299 5.13484 17.3607 5.12419C17.3915 5.11355 17.4187 5.09447 17.4392 5.06913C17.4597 5.0438 17.4727 5.01322 17.4767 4.98087L17.9984 0.650423C18.0136 0.539553 17.918 0.443901 17.8049 0.459118Z" fill="#FDAC15"/>
                                </svg>
                                <span>{analyticsData.weeklyTransactions.percentage}%</span>
                                </p>
                            </div>

                            <div className="weekly-analytic">
                                <h2>Weekly Sign-Ups</h2>
                                <h3>{analyticsData.weeklySignups.total} Users</h3>
                                <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
                                    <path d="M17.8049 0.459118L13.4745 0.980859C13.331 0.99825 13.2701 1.17434 13.3723 1.27651L14.6614 2.56565L9.74838 7.4787L7.53533 5.26783C7.39837 5.13087 7.1788 5.13304 7.04402 5.26783L0.050522 12.2635C0.0181562 12.2962 0 12.3403 0 12.3863C0 12.4323 0.0181562 12.4765 0.050522 12.5092L1.02879 13.4918C1.09618 13.5592 1.20705 13.5592 1.27444 13.4918L7.28967 7.4787L9.50055 9.68958C9.63751 9.82436 9.85707 9.82436 9.99185 9.68958L15.8919 3.79391L17.181 5.08304C17.2041 5.10603 17.2332 5.12208 17.265 5.12935C17.2967 5.13662 17.3299 5.13484 17.3607 5.12419C17.3915 5.11355 17.4187 5.09447 17.4392 5.06913C17.4597 5.0438 17.4727 5.01322 17.4767 4.98087L17.9984 0.650423C18.0136 0.539553 17.918 0.443901 17.8049 0.459118Z" fill="#FDAC15"/>
                                </svg>
                                <span>{analyticsData.weeklySignups.percentage}%</span>
                                </p>
                            </div>

                            <div className="weekly-analytic">
                                <h2>Weekly Exchange</h2>
                                <h3>Ksh {analyticsData.weeklyExchanges.total}</h3>
                                <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
                                    <path d="M17.9984 13.3484L17.4767 9.01796C17.4593 8.87448 17.2832 8.81361 17.181 8.91578L15.8919 10.2071L9.99403 4.31142C9.85707 4.17664 9.63751 4.17664 9.50272 4.31142L7.28967 6.5223L1.27444 0.507065C1.24175 0.474699 1.19761 0.456543 1.15161 0.456543C1.10561 0.456543 1.06147 0.474699 1.02879 0.507065L0.050522 1.48968C0.0181562 1.52236 0 1.5665 0 1.6125C0 1.6585 0.0181562 1.70264 0.050522 1.73533L7.04402 8.73318C7.1788 8.87013 7.40054 8.87013 7.53533 8.73318L9.74838 6.5223L14.6636 11.4354L13.3745 12.7245C13.3515 12.7476 13.3354 12.7767 13.3282 12.8085C13.3209 12.8402 13.3227 12.8734 13.3333 12.9042C13.344 12.935 13.363 12.9622 13.3884 12.9827C13.4137 13.0032 13.4443 13.0162 13.4766 13.0201L17.8071 13.5419C17.918 13.5571 18.0136 13.4615 17.9984 13.3484Z" fill="#323232"/>
                                </svg>
                                <span>{analyticsData.weeklyExchanges.percentage}%</span>
                                </p>
                            </div>
                        </div>

                        <div className="analytics-adoption">
                            <div className="adoption-title">
                                <h2>App Adoption</h2>
                            </div>

                            <div className="adoption-filter">
                                <h3>Filter</h3>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11 18C10.7167 18 10.479 17.904 10.287 17.712C10.095 17.52 9.99934 17.2827 10 17C10 16.7167 10.096 16.479 10.288 16.287C10.48 16.095 10.7173 15.9993 11 16H13C13.2833 16 13.521 16.096 13.713 16.288C13.905 16.48 14.0007 16.7173 14 17C14 17.2833 13.904 17.521 13.712 17.713C13.52 17.905 13.2827 18.0007 13 18H11ZM4 8C3.71667 8 3.479 7.904 3.287 7.712C3.095 7.52 2.99934 7.28267 3 7C3 6.71667 3.096 6.479 3.288 6.287C3.48 6.095 3.71734 5.99934 4 6H20C20.2833 6 20.521 6.096 20.713 6.288C20.905 6.48 21.0007 6.71734 21 7C21 7.28334 20.904 7.521 20.712 7.713C20.52 7.905 20.2827 8.00067 20 8H4ZM7 13C6.71667 13 6.479 12.904 6.287 12.712C6.095 12.52 5.99934 12.2827 6 12C6 11.7167 6.096 11.479 6.288 11.287C6.48 11.095 6.71734 10.9993 7 11H17C17.2833 11 17.521 11.096 17.713 11.288C17.905 11.48 18.0007 11.7173 18 12C18 12.2833 17.904 12.521 17.712 12.713C17.52 12.905 17.2827 13.0007 17 13H7Z" fill="#FDAC15"/>
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="adoption-chart">
                            <AnalyticsChart />
                        </div>
                    </div>

                    <div className="region-analytics">
                        <div className="region-title">
                            <h2>Customers by Region</h2>
                        </div>

                        <div className="region-stats">
                            <div className="map-stats">
                                <div className="zoom-map">
                                    <div className="blank-space"></div>
                                    <div className="zoom-out">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                                            <path d="M6 16.6279V9.53223H0V7.16699H6V0.0712891H8V7.16699H14V9.53223H8V16.6279H6Z" fill="#323232"/>
                                        </svg>
                                    </div>
                                    <div className="zoom-in">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="3" viewBox="0 0 14 3" fill="none">
                                            <path d="M14 2.83691H0V0.47168H14V2.83691Z" fill="#323232"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="map">
                                    <img src={map} alt="map" />

                                    <div className="county-analytics">
                                        <img src={stats} alt="" />
                                        <div className="county-content">
                                            <h2>Nakuru</h2>
                                            <div className="county-line"></div>
                                            <div className="county-stats">
                                                <div className="county-users">
                                                    <h3>Users</h3>
                                                    <p>1575</p>
                                                </div>
                                                <div className="users-worth">
                                                    <h3>Worth</h3>
                                                    <p>Ksh 43,754</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="number-stats">
                                        <div className="more-stats">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#FDAC15"/>
                                                <circle cx="10" cy="10" r="6.25" fill="#FDAC15"/>
                                            </svg>
                                            <span> {'>'} 500 </span>
                                        </div>

                                        <div className="range-stats">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#A97616"/>
                                                <circle cx="10" cy="10" r="6.25" fill="#A97616"/>
                                            </svg>
                                            <span> 100 - 500 </span>
                                        </div>

                                        <div className="less-stats">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#323232"/>
                                                <circle cx="10" cy="10" r="6.25" fill="#323232"/>
                                            </svg>
                                            <span> {'<'} 100 </span>
                                        </div>
                                    </div>

                                    <div className="nationalusers-stats">
                                        <div className="total-nationalreach">
                                            <h2>National Reach</h2>
                                            <h3>12 counties</h3>
                                        </div>

                                        <div className="total-nationalusers">
                                            <h2>TotalUsers</h2>
                                            <h3>4,450</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="analytics-recentactivities">
                    <div className="recentactivities-header">
                        <div className="recentactivities-title">
                            <h2>Recent Activity</h2>
                        </div>

                        <div className="recentactivities-filter">
                            <h3>Filter</h3>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M11 18C10.7167 18 10.479 17.904 10.287 17.712C10.095 17.52 9.99934 17.2827 10 17C10 16.7167 10.096 16.479 10.288 16.287C10.48 16.095 10.7173 15.9993 11 16H13C13.2833 16 13.521 16.096 13.713 16.288C13.905 16.48 14.0007 16.7173 14 17C14 17.2833 13.904 17.521 13.712 17.713C13.52 17.905 13.2827 18.0007 13 18H11ZM4 8C3.71667 8 3.479 7.904 3.287 7.712C3.095 7.52 2.99934 7.28267 3 7C3 6.71667 3.096 6.479 3.288 6.287C3.48 6.095 3.71734 5.99934 4 6H20C20.2833 6 20.521 6.096 20.713 6.288C20.905 6.48 21.0007 6.71734 21 7C21 7.28334 20.904 7.521 20.712 7.713C20.52 7.905 20.2827 8.00067 20 8H4ZM7 13C6.71667 13 6.479 12.904 6.287 12.712C6.095 12.52 5.99934 12.2827 6 12C6 11.7167 6.096 11.479 6.288 11.287C6.48 11.095 6.71734 10.9993 7 11H17C17.2833 11 17.521 11.096 17.713 11.288C17.905 11.48 18.0007 11.7173 18 12C18 12.2833 17.904 12.521 17.712 12.713C17.52 12.905 17.2827 13.0007 17 13H7Z" fill="#FDAC15"/>
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="useranalytics-content">
                        <div className="useractivity-name">
                            <div className="useractivityname-title">
                                <h2>Name</h2>
                            </div>

                            <div className="useractivities-analytics">
                                <h3>{userData && userData.username}</h3>
                            </div>
                        </div>

                        <div className="useractivity-balance">
                            <div className="useractivitybal-title">
                                <h2>Balance</h2>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none">
                                        <path d="M12 18L6 24L0 18H12ZM0 6L6 0L12 6H0Z" fill="#DED9D9"/>
                                    </svg>
                                </span>
                            </div>

                            <div className="useractivities-analytics">
                                <h3>{userData && `Ksh ${userData.balance}`}</h3>
                            </div>
                        </div>

                        <div className="useractivity-transaction">
                            <div className="useractivitytransaction-title">
                                <h2>Transactions</h2>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none">
                                        <path d="M12 18L6 24L0 18H12ZM0 6L6 0L12 6H0Z" fill="#DED9D9"/>
                                    </svg>
                                </span>
                            </div>

                            <div className="useractivities-analytics">
                                <h3>{userData && userData.total_transactions}</h3>
                            </div>
                        </div>

                        <div className="useractivity-launch">
                            <div className="useractivitylaunch-title">
                                <h2>App Launches</h2>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none">
                                        <path d="M12 18L6 24L0 18H12ZM0 6L6 0L12 6H0Z" fill="#DED9D9"/>
                                    </svg>
                                </span>
                            </div>

                            <div className="useractivities-analytics">
                                <h3>{userData && userData.app_launches}</h3>
                            </div>
                        </div>

                        <div className="useractivity-status">
                            <div className="useractivitystatus-title">
                                <h2>Status</h2>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none">
                                        <path d="M12 18L6 24L0 18H12ZM0 6L6 0L12 6H0Z" fill="#DED9D9"/>
                                    </svg>
                                </span>
                            </div>

                            <div className="useractivities-analytics">
                                <h3>{userData && userData.status}</h3>
                            </div>
                        </div>

                        <div className="useractivity-manage">
                            <div className="useractivitymanage-title">
                                <h2>Manage</h2>
                            </div>

                            <div className="useractivities-analytics">
                                <img src={manage} alt="" />
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;