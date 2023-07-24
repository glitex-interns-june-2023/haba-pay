import React from 'react';
import approved from '../assets/approved.png';
import pending from '../assets/pending.png';
import review from '../assets/review.png';
import user from '../assets/user.png';
import '../Styles/RightSidebar.css';

const RightSidebar = () => {
    return (
        <div className="right-sidebar">
            <div className="transactions">
                <div className="transaction">
                    <h1>Transactions</h1>
                    <div className="transaction-status">
                        <h2>Pending</h2>
                        <h3>Approved</h3>
                    </div>
                    <div className="transaction-details">
                        <div className="transaction-detail">
                            <img src={approved} alt="" />
                            <div className="admin-details">
                                <div className="admin-detail">
                                    <div className="name">Jane Mukenya M.</div>
                                    <div className="admin-number">+254712345678</div>
                                </div>
                                <div className="status-details">
                                    <div className="amount">Ksh <span>240</span></div>
                                    <div className="time">12:45PM</div>
                                </div>
                            </div>
                        </div>

                        <div className="transaction-detail">
                            <img src={approved} alt="" />
                            <div className="admin-details">
                                <div className="admin-detail">
                                    <div className="name">Obi Peter</div>
                                    <div className="admin-number">+254712345678</div>
                                </div>
                                <div className="status-details">
                                    <div className="amount">Ksh <span>4000</span></div>
                                    <div className="time">12:00PM</div>
                                </div>
                            </div>
                        </div>

                        <div className="transaction-detail">
                            <img src={pending} alt="" />
                            <div className="admin-details">
                                <div className="admin-detail">
                                    <div className="name">Bola Tinubu</div>
                                    <div className="admin-number">+254712345678</div>
                                </div>
                            
                                <div className="status-details">
                                    <div className="amount">Ksh <span>40</span></div>
                                    <div className="time">11:05AM</div>
                                </div>
                            </div>
                        </div>

                        <div className="transaction-detail">
                            <img src={approved} alt="" />
                            <div className="admin-details">
                                <div className="admin-detail">
                                    <div className="name">John Doe</div>
                                    <div className="admin-number">+254712345678</div>
                                </div>
                                <div className="status-details">
                                    <div className="amount">Ksh <span>60</span></div>
                                    <div className="time">10:05AM</div>
                                </div>
                            </div>
                        </div>

                        <div className="transaction-detail">
                            <img src={pending} alt="" />
                            <div className="admin-details">
                                <div className="admin-detail">
                                    <div className="name">Client Mwilu</div>
                                    <div className="admin-number">+254712345678</div>
                                </div>
                                <div className="status-details">
                                    <div className="amount">Ksh <span>100</span></div>
                                    <div className="time">8:16AM</div>
                                </div>
                            </div>
                        </div>

                        <div className="transaction-detail">
                            <img src={approved} alt="" />
                            <div className="admin-details">
                                <div className="admin-detail">
                                    <div className="name">Josephine Naruto</div>
                                    <div className="admin-number">+254712345678</div>
                                </div>
                                <div className="status-details">
                                    <div className="amount">Ksh <span>180</span></div>
                                    <div className="time">5:55AM</div>
                                 </div>
                            </div>
                        </div>

                        <div className="transaction-detail">
                            <img src={pending} alt="" />
                            <div className="admin-details">
                                <div className="admin-detail">
                                    <div className="name">Grace Mwai</div>
                                    <div className="admin-number">+254712345678</div>
                                </div>
                                <div className="status-details">
                                    <div className="amount">Ksh <span>750</span></div>
                                    <div className="time">1:07PM</div>
                                </div>
                            </div>
                        </div>
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