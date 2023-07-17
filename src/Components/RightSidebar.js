import React from 'react';
import approved from '../Assets/approved.png';
import pending from '../Assets/pending.png';
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
                                    <div className="name"><h4>Jane Mukenya M.</h4></div>
                                    <div className="admin-number">+254712345678</div>
                                </div>
                                <div className="status-details">
                                    <div className="amount">Ksh 240</div>
                                    <div className="time">12:45PM</div>
                                </div>
                            </div>
                        </div>

                        <div className="transaction-detail">
                            <img src={approved} alt="" />
                            <div className="dmin-details">
                                <div className="admin-detail">
                                    <h4>Obi Peter</h4>
                                    <div className="admin-number">+254712345678</div>
                                </div>
                                <div className="status-details">
                                    <div className="amount">Ksh 4000</div>
                                    <div className="time">12:00PM</div>
                                </div>
                            </div>
                        </div>

                        <div className="transaction-detail">
                            <img src={pending} alt="" />
                            <div className="admin-details">
                                <div className="admin-detail">
                                    <h4>Bola Tinubu</h4>
                                    <div className="admin-number">+254712345678</div>
                                </div>
                            
                                <div className="statusdetails">
                                    <div className="amount">Ksh 40</div>
                                    <div className="time">11:05AM</div>
                                </div>
                            </div>
                        </div>

                        <div className="transaction-detail">
                            <img src={approved} alt="" />
                            <div className="admin-details">
                                <div className="admin-detail">
                                    <h4>John Doe</h4>
                                    <div className="admin-number">+254712345678</div>
                                </div>
                                <div className="status-details">
                                    <div className="amount">Ksh 60</div>
                                    <div className="time">10:05AM</div>
                                </div>
                            </div>
                        </div>

                        <div className="transaction-detail">
                            <img src={pending} alt="" />
                            <div className="admin-details">
                                <div className="admin-detail">
                                    <h4>Client Mwilu</h4>
                                    <div className="admin-number">+254712345678</div>
                                </div>
                                <div className="status-details">
                                    <div className="amount">Ksh 100</div>
                                    <div className="time">8:16AM</div>
                                </div>
                            </div>
                        </div>

                        <div className="transaction-detail">
                            <img src={approved} alt="" />
                            <div className="admin-details">
                                <div className="admin-detail">
                                    <h4>Josephine Naruto</h4>
                                    <div className="admin-number">+254712345678</div>
                                </div>
                                <div className="status-details">
                                    <div className="amount">Ksh 180</div>
                                    <div className="time">5:55AM</div>
                                 </div>
                            </div>
                        </div>

                        <div className="transaction-detail">
                            <img src={pending} alt="" />
                            <div className="admin-details">
                                <div className="admin-detail">
                                    <h4>Grace Mwai</h4>
                                    <div className="admin-number">+254712345678</div>
                                </div>
                                <div className="status-details">
                                    <div className="amount">Ksh 750</div>
                                    <div className="time">1:07PM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;