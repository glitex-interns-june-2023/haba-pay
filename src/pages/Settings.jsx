import React from 'react';
import LeftSidebar from '../Components/LeftSidebar';
import Navbar from '../Components/Navbar';
import ellipse from '../assets/ellipse.png';
import union from '../assets/union.png';
const Settings = () => {
    return (
        <div className="settings-container">
            <LeftSidebar />

            <div className="settings-content">
                <Navbar />

                <div className="profile-settings">
                    <div className="back-login">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="17" viewBox="0 0 12 17" fill="none">
                            <path d="M10.1528 16.4216L0 8.2108L10.1528 0L11.9549 1.45742L3.60424 8.2108L11.9549 14.9642L10.1528 16.4216Z" fill="black"/>
                        </svg>
                        <span>Back</span>
                    </div>

                    <div className="profile-setting">
                        <div className="profile-logo">
                            <img src={ellipse} alt="" />
                            <h6>JD</h6>
                        </div>

                        <div className="profile-name">
                            <h2>James Nakamoto</h2>
                        </div>

                        <div className="setting-details">
                            <div><span><img src={union} alt="" /></span>HabaPay</div>
                            <div><span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                <path d="M8.07512 9C8.57012 9 8.99402 8.8236 9.34682 8.4708C9.69962 8.118 9.87572 7.6944 9.87512 7.2C9.87512 6.705 9.69872 6.2811 9.34592 5.9283C8.99312 5.5755 8.56952 5.3994 8.07512 5.4C7.58012 5.4 7.15622 5.5764 6.80342 5.9292C6.45062 6.282 6.27452 6.7056 6.27512 7.2C6.27512 7.695 6.45152 8.1189 6.80432 8.4717C7.15712 8.8245 7.58072 9.0006 8.07512 9ZM8.07512 15.615C9.90512 13.935 11.2626 12.4086 12.1476 11.0358C13.0326 9.663 13.4751 8.4444 13.4751 7.38C13.4751 5.745 12.9537 4.4064 11.9109 3.3642C10.8681 2.322 9.58952 1.8006 8.07512 1.8C6.56012 1.8 5.28122 2.3214 4.23842 3.3642C3.19562 4.407 2.67452 5.7456 2.67512 7.38C2.67512 8.445 3.11762 9.6639 4.00262 11.0367C4.88762 12.4095 6.24512 13.9356 8.07512 15.615ZM8.07512 18C5.66012 15.945 3.85652 14.0364 2.66432 12.2742C1.47212 10.512 0.875722 8.8806 0.875122 7.38C0.875122 5.13 1.59902 3.3375 3.04682 2.0025C4.49462 0.6675 6.17072 0 8.07512 0C9.98012 0 11.6565 0.6675 13.1043 2.0025C14.5521 3.3375 15.2757 5.13 15.2751 7.38C15.2751 8.88 14.6787 10.5114 13.4859 12.2742C12.2931 14.037 10.4895 15.9456 8.07512 18Z" fill="#323232"/>
                            </svg>
                            </span>Nairobi, Kenya</div>

                            <div><span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                <path d="M4.77515 10.8C4.52015 10.8 4.30625 10.7136 4.13345 10.5408C3.96065 10.368 3.87455 10.1544 3.87515 9.9C3.87515 9.645 3.96155 9.4311 4.13435 9.2583C4.30715 9.0855 4.52075 8.9994 4.77515 9C5.03015 9 5.24405 9.0864 5.41685 9.2592C5.58965 9.432 5.67575 9.6456 5.67515 9.9C5.67515 10.155 5.58875 10.3689 5.41595 10.5417C5.24315 10.7145 5.02955 10.8006 4.77515 10.8ZM8.37515 10.8C8.12015 10.8 7.90625 10.7136 7.73345 10.5408C7.56065 10.368 7.47455 10.1544 7.47515 9.9C7.47515 9.645 7.56155 9.4311 7.73435 9.2583C7.90715 9.0855 8.12075 8.9994 8.37515 9C8.63015 9 8.84405 9.0864 9.01685 9.2592C9.18965 9.432 9.27575 9.6456 9.27515 9.9C9.27515 10.155 9.18875 10.3689 9.01595 10.5417C8.84315 10.7145 8.62955 10.8006 8.37515 10.8ZM11.9751 10.8C11.7201 10.8 11.5062 10.7136 11.3334 10.5408C11.1606 10.368 11.0745 10.1544 11.0751 9.9C11.0751 9.645 11.1615 9.4311 11.3343 9.2583C11.5071 9.0855 11.7207 8.9994 11.9751 9C12.2301 9 12.444 9.0864 12.6168 9.2592C12.7896 9.432 12.8757 9.6456 12.8751 9.9C12.8751 10.155 12.7887 10.3689 12.6159 10.5417C12.4431 10.7145 12.2295 10.8006 11.9751 10.8ZM2.07515 18C1.58015 18 1.15625 17.8236 0.803448 17.4708C0.450648 17.118 0.274548 16.6944 0.275148 16.2V3.6C0.275148 3.105 0.451548 2.6811 0.804348 2.3283C1.15715 1.9755 1.58075 1.7994 2.07515 1.8H2.97515V0.8775C2.97515 0.6225 3.06155 0.4125 3.23435 0.2475C3.40715 0.0825001 3.62075 0 3.87515 0C4.13015 0 4.34405 0.0864001 4.51685 0.2592C4.68965 0.432 4.77575 0.6456 4.77515 0.9V1.8H11.9751V0.8775C11.9751 0.6225 12.0615 0.4125 12.2343 0.2475C12.4071 0.0825001 12.6207 0 12.8751 0C13.1301 0 13.344 0.0864001 13.5168 0.2592C13.6896 0.432 13.7757 0.6456 13.7751 0.9V1.8H14.6751C15.1701 1.8 15.594 1.9764 15.9468 2.3292C16.2996 2.682 16.4757 3.1056 16.4751 3.6V16.2C16.4751 16.695 16.2987 17.1189 15.9459 17.4717C15.5931 17.8245 15.1695 18.0006 14.6751 18H2.07515ZM2.07515 16.2H14.6751V7.2H2.07515V16.2ZM2.07515 5.4H14.6751V3.6H2.07515V5.4Z" fill="#323232"/>
                            </svg>
                            </span>12 Jan 2023</div>
                        </div>

                        <div className="setting-detail">
                            <div className="profile-btn">
                                <h2>Profile</h2>
                            </div>

                            <div className="setting-notification">
                                <h3>Notifications</h3>
                            </div>

                            <div className="general-setting">
                                <h4>General</h4>
                            </div>
                        </div>
                    </div>

                    <div className="settings-notificatio">
                        <h2 className="notification-title">Notification</h2>

                        <div className="notification-headers">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;