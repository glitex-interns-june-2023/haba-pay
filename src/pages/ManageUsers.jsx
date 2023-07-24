import React from 'react';
import LeftSidebar from '../Components/LeftSidebar';
import Navbar from '../Components/Navbar';
import '../Styles/ManageUsers.css';
import filter from '../Assets/filter.png';
import forwardreview from '../assets/forwardreview.png';
import uncheck from '../assets/uncheck.png';
import manage from '../assets/manage.png';
import activity from '../assets/activity.png';
import review from '../assets/review.png';
import user from '../assets/user.png';

const ManageUsers = () => {
    return (
        <div className="manage-container">
            <LeftSidebar />

            <div className="manage-content">
                <Navbar />

                <div className="manage-details">
                    <div className="manage-header">
                        <div className="header-title">
                            <h4>Users</h4>
                        </div>

                        <div className="actions">
                            <div className="quick-actions">
                                <h5>Quick Actions</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 10L12 15L17 10H7Z" fill="#FDAC15"/>
                                </svg>
                            </div>
                            
                            <div className="quick-filter">
                                <h6>Filter</h6>
                                <img src={filter}alt="" />
                            </div>
                        </div>

                        <div className="manage-numbers">
                            <img className="forward-review" src={forwardreview} alt="" />
                            <span>20 - 30 of 4,550</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="21" viewBox="0 0 13 21" fill="none">
                                <path d="M2.55005 0.5L12.55 10.5L2.55005 20.5L0.775049 18.725L9.00005 10.5L0.775049 2.275L2.55005 0.5Z" fill="#898989"/>
                            </svg>
                        </div>
                    </div>

                    <div className="users-data">
                        <div className="data-uncheck">
                            <img src={uncheck} alt="" />
                            <img src={uncheck} alt="" />
                            <img src={uncheck} alt="" />
                            <img src={uncheck} alt="" />
                            <img src={uncheck} alt="" />
                            <img src={uncheck} alt="" />
                            <img src={uncheck} alt="" />
                            <img src={uncheck} alt="" />
                            <img src={uncheck} alt="" />
                            <img src={uncheck} alt="" />
                            <img src={uncheck} alt="" />
                        </div>

                        <div className="data-name">
                            <div className="header-name">Name</div>
                            <div className="names">Grace Mwai</div>
                            <div className="names">Peter Obi</div>
                            <div className="names">Brian Nakamoto</div>
                            <div className="names">John Doe</div>
                            <div className="names">Chris Kiribi</div>
                            <div className="names">Jacqueline Rop</div>
                            <div className="names">Chris Mganda</div>
                            <div className="names">Jane Mukenya</div>
                            <div className="names">Janice Juma</div>
                            <div className="names">Brianna Molly</div>
                        </div>

                        <div className="data-number">
                            <div className="header-number">Number</div>
                            <div className="numbers">+254725346448</div>
                            <div className="numbers">+254747940078</div>
                            <div className="numbers">+254712345678</div>
                            <div className="numbers">+254766675678</div>
                            <div className="numbers">+254710003678</div>
                            <div className="numbers">+254722342314</div>
                            <div className="numbers">+254712999090</div>
                            <div className="numbers">+254700345678</div>
                            <div className="numbers">+254724345474</div>
                            <div className="numbers">+254712345678</div>
                        </div>

                        <div className="data-email">
                            <div className="header-email">Email</div>
                            <div className="emails">gracemwai444@haba.co.ke</div>
                            <div className="emails">obidientpeter@state.ng</div>
                            <div className="emails">briannakamoto@mail.com</div>
                            <div className="emails">johndoe@mail.com</div>
                            <div className="emails">chriskiribi@mail.com</div>
                            <div className="emails">jacquelinerop@mail.com</div>
                            <div className="emails">chrismganda@mail.com</div>
                            <div className="emails">janemukenya@mail.com</div>
                            <div className="emails">janicejuma@mail.com</div>
                            <div className="emails">briannamolly@mail.com</div>
                        </div>

                        <div className="data-bal">
                            <div className="header-bal">Balance (Ksh)</div>
                            <div className="balance">Ksh 450</div>
                            <div className="balance">Ksh 670</div>
                            <div className="balance">Ksh 50</div>
                            <div className="balance">Ksh 2,334</div>
                            <div className="balance">Ksh 509</div>
                            <div className="balance">Ksh 1010</div>
                            <div className="balance">Ksh 5000</div>
                            <div className="balance">Ksh 150</div>
                            <div className="balance">Ksh 139</div>
                            <div className="balance">Ksh 423</div>
                        </div>

                        <div className="data-status">
                            <div className="header-status">Status</div>
                            <div className="status">Active</div>
                            <div className="status">Active</div>
                            <div className="status">Active</div>
                            <div className="status">Active</div>
                            <div className="status">Active</div>
                            <div className="status">Suspended</div>
                            <div className="status">Active</div>
                            <div className="status">Suspended</div>
                            <div className="status">Active</div>
                            <div className="status">Active</div>
                        </div>

                        <div className="data-manage">
                            <div className="header-manage">Manage</div>
                            <img src={manage} alt="" />
                            <img src={manage} alt="" />
                            <img src={manage} alt="" />
                            <img src={manage} alt="" />
                            <img src={manage} alt="" />
                            <img src={manage} alt="" />
                            <img src={manage} alt="" />
                            <img src={manage} alt="" />
                            <img src={manage} alt="" />
                            <img src={manage} alt="" />
                        </div>
                    </div>
                </div>

                <div className="manage-activities">
                    <div className="manage-activity">
                        <h1>User Activity</h1>
                        <div className="activity-img">
                            <img src={activity} alt="activity" />
                            <h2>You haven't selected any user </h2>
                        </div>
                        <div className="activity-desc">
                            <p>Please select a user from the table above or using search
                            to view their activity here</p>
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
            </div>
        </div>
    );
};

export default ManageUsers;
