import React from 'react';
import activity from '../assets/activity.png';

const UsersData = () => {
    return (

        <div className="usersdata-container">
            <div className="users-data">
                <div className="data-uncheck">
                    <label className="checkbox-label header">
                        <input type="checkbox" className="checkbox-input" />
                    </label>
                            
                    <label className="checkbox-label">
                        <input type="checkbox" className="checkbox-input" />
                    </label>

                    <label className="checkbox-label">
                        <input type="checkbox" className="checkbox-input" />
                    </label>

                    <label className="checkbox-label">
                        <input type="checkbox" className="checkbox-input" />
                    </label>

                    <label className="checkbox-label">
                        <input type="checkbox" className="checkbox-input" />
                    </label>

                    <label className="checkbox-label">
                        <input type="checkbox" className="checkbox-input" />
                    </label>

                    <label className="checkbox-label">
                        <input type="checkbox" className="checkbox-input" />
                    </label>

                    <label className="checkbox-label">
                        <input type="checkbox" className="checkbox-input" />
                    </label>

                    <label className="checkbox-label">
                        <input type="checkbox" className="checkbox-input" />
                    </label>

                    <label className="checkbox-label">
                        <input type="checkbox" className="checkbox-input" />
                    </label>
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

            <div className="manage-activity">
                <h1>User Activity</h1>
                <div className="activity-img">
                    <img src={activity} alt="activity" />
                    <h2>You haven't selected any users</h2>
                </div>
                <div className="activity-desc">
                    <p>Please select a user from the table above or using search
                        to view their activity here
                    </p>
                </div>       
            </div>
        </div>
    );
};

export default UsersData