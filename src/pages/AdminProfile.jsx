import React from 'react';
import '../Styles/AdminProfile.css';
import LeftSidebar from '../Components/LeftSidebar';
import Navbar from '../Components/Navbar';
import HabaChart from '../Components/HabaChart';
import ellipse from '../assets/ellipse.png';
import union from '../assets/union.png';
import review from '../assets/review.png';

const AdminProfile = () => {
    return (
        <div className="profile-container">
            <LeftSidebar />

            <div className="profile-wrapper">
                <Navbar />

                <div className="profile-content">
                    <div className="back-login">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="17" viewBox="0 0 12 17" fill="none">
                            <path d="M10.1528 16.4216L0 8.2108L10.1528 0L11.9549 1.45742L3.60424 8.2108L11.9549 14.9642L10.1528 16.4216Z" fill="black"/>
                        </svg>
                        <span>Back</span>
                    </div>

                    <div className="userprofile-stats">
                        <div className="profile-logo">
                            <img src={ellipse} alt="" />
                            <h6>JD</h6>
                        </div>

                        <div className="profile-name">
                            <h2>John Doe
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 18 23" fill="none">
                                    <path d="M9 0.5L18 4.5V10.5C18 16.05 14.16 21.24 9 22.5C3.84 21.24 0 16.05 0 10.5V4.5L9 0.5ZM9 2.68L2 5.8V10.72C2 15.04 5.25 19.5 9 20.5C12.75 19.5 16 15.04 16 10.72V5.8L9 2.68ZM13 13.5V15.09C12.96 15.31 12.78 15.46 12.53 15.5H5.47C5.22 15.46 5.04 15.31 5 15.09V13.5H13ZM14 7.5L13 12.5H5L4 7.5L6.67 10.17L9 7.84L11.33 10.17L14 7.5Z" fill="#FDAC15"/>
                                </svg>
                            </span></h2>
                        </div>

                        <div className="userprofile-details">
                            <div className="userprofile-occupation"><span><img src={union} alt="" />Doe Designs</span></div>

                            <div className="userprofile-location">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                        <path d="M8.07512 9C8.57012 9 8.99402 8.8236 9.34682 8.4708C9.69962 8.118 9.87572 7.6944 9.87512 7.2C9.87512 6.705 9.69872 6.2811 9.34592 5.9283C8.99312 5.5755 8.56952 5.3994 8.07512 5.4C7.58012 5.4 7.15622 5.5764 6.80342 5.9292C6.45062 6.282 6.27452 6.7056 6.27512 7.2C6.27512 7.695 6.45152 8.1189 6.80432 8.4717C7.15712 8.8245 7.58072 9.0006 8.07512 9ZM8.07512 15.615C9.90512 13.935 11.2626 12.4086 12.1476 11.0358C13.0326 9.663 13.4751 8.4444 13.4751 7.38C13.4751 5.745 12.9537 4.4064 11.9109 3.3642C10.8681 2.322 9.58952 1.8006 8.07512 1.8C6.56012 1.8 5.28122 2.3214 4.23842 3.3642C3.19562 4.407 2.67452 5.7456 2.67512 7.38C2.67512 8.445 3.11762 9.6639 4.00262 11.0367C4.88762 12.4095 6.24512 13.9356 8.07512 15.615ZM8.07512 18C5.66012 15.945 3.85652 14.0364 2.66432 12.2742C1.47212 10.512 0.875722 8.8806 0.875122 7.38C0.875122 5.13 1.59902 3.3375 3.04682 2.0025C4.49462 0.6675 6.17072 0 8.07512 0C9.98012 0 11.6565 0.6675 13.1043 2.0025C14.5521 3.3375 15.2757 5.13 15.2751 7.38C15.2751 8.88 14.6787 10.5114 13.4859 12.2742C12.2931 14.037 10.4895 15.9456 8.07512 18Z" fill="#323232"/>
                                    </svg>
                                    Machakos, Kenya
                                </span>
                            </div>

                            <div className="userprofile-date">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                        <path d="M4.77515 10.8C4.52015 10.8 4.30625 10.7136 4.13345 10.5408C3.96065 10.368 3.87455 10.1544 3.87515 9.9C3.87515 9.645 3.96155 9.4311 4.13435 9.2583C4.30715 9.0855 4.52075 8.9994 4.77515 9C5.03015 9 5.24405 9.0864 5.41685 9.2592C5.58965 9.432 5.67575 9.6456 5.67515 9.9C5.67515 10.155 5.58875 10.3689 5.41595 10.5417C5.24315 10.7145 5.02955 10.8006 4.77515 10.8ZM8.37515 10.8C8.12015 10.8 7.90625 10.7136 7.73345 10.5408C7.56065 10.368 7.47455 10.1544 7.47515 9.9C7.47515 9.645 7.56155 9.4311 7.73435 9.2583C7.90715 9.0855 8.12075 8.9994 8.37515 9C8.63015 9 8.84405 9.0864 9.01685 9.2592C9.18965 9.432 9.27575 9.6456 9.27515 9.9C9.27515 10.155 9.18875 10.3689 9.01595 10.5417C8.84315 10.7145 8.62955 10.8006 8.37515 10.8ZM11.9751 10.8C11.7201 10.8 11.5062 10.7136 11.3334 10.5408C11.1606 10.368 11.0745 10.1544 11.0751 9.9C11.0751 9.645 11.1615 9.4311 11.3343 9.2583C11.5071 9.0855 11.7207 8.9994 11.9751 9C12.2301 9 12.444 9.0864 12.6168 9.2592C12.7896 9.432 12.8757 9.6456 12.8751 9.9C12.8751 10.155 12.7887 10.3689 12.6159 10.5417C12.4431 10.7145 12.2295 10.8006 11.9751 10.8ZM2.07515 18C1.58015 18 1.15625 17.8236 0.803448 17.4708C0.450648 17.118 0.274548 16.6944 0.275148 16.2V3.6C0.275148 3.105 0.451548 2.6811 0.804348 2.3283C1.15715 1.9755 1.58075 1.7994 2.07515 1.8H2.97515V0.8775C2.97515 0.6225 3.06155 0.4125 3.23435 0.2475C3.40715 0.0825001 3.62075 0 3.87515 0C4.13015 0 4.34405 0.0864001 4.51685 0.2592C4.68965 0.432 4.77575 0.6456 4.77515 0.9V1.8H11.9751V0.8775C11.9751 0.6225 12.0615 0.4125 12.2343 0.2475C12.4071 0.0825001 12.6207 0 12.8751 0C13.1301 0 13.344 0.0864001 13.5168 0.2592C13.6896 0.432 13.7757 0.6456 13.7751 0.9V1.8H14.6751C15.1701 1.8 15.594 1.9764 15.9468 2.3292C16.2996 2.682 16.4757 3.1056 16.4751 3.6V16.2C16.4751 16.695 16.2987 17.1189 15.9459 17.4717C15.5931 17.8245 15.1695 18.0006 14.6751 18H2.07515ZM2.07515 16.2H14.6751V7.2H2.07515V16.2ZM2.07515 5.4H14.6751V3.6H2.07515V5.4Z" fill="#323232"/>
                                    </svg>
                                    2 Feb 2023
                                </span>
                            </div>
                        </div>

                        <div className="profile-usagestats">
                            <div className="stats-title">
                                <h2>Usage Stats</h2>
                            </div>

                            <div className="profile-transaction">
                                <div className="duration">Duration 
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M7 10L12 15L17 10H7Z" fill="#FDAC15"/>
                                        </svg>
                                    </span>
                                </div>

                                <div className="transactionbtn">Transaction
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M7 10L12 15L17 10H7Z" fill="#FDAC15"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div className="usersprofile-stats">
                                <div className="stats-chart">
                                    <HabaChart />
                                </div>

                                <div className="userprofile-accdetails">
                                    <div className="userprofile-btns">
                                        <div className="userprofile-btn">
                                            <h2>Profile</h2>
                                        </div>

                                        <div className="useractions-btn">
                                            <h2>Actions</h2>
                                        </div>

                                        <div className="usercontact-btn">
                                            <h2>Contact</h2>
                                        </div>
                                    </div>

                                    <div className="line"></div>

                                    <div className="useracc-details">
                                        <div className="useremail">
                                            <div className="email-svg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                    <path d="M10 20.5C8.63333 20.5 7.34167 20.2373 6.125 19.712C4.90833 19.1867 3.84567 18.47 2.937 17.562C2.029 16.654 1.31233 15.5917 0.787001 14.375C0.261668 13.1583 -0.000665399 11.8667 1.26743e-06 10.5C1.26743e-06 9.11667 0.262668 7.82067 0.788001 6.612C1.31333 5.40333 2.03 4.34533 2.938 3.438C3.846 2.52933 4.908 1.81267 6.124 1.288C7.34 0.763333 8.632 0.500667 10 0.5C11.3833 0.5 12.6793 0.762667 13.888 1.288C15.0967 1.81333 16.1547 2.53 17.062 3.438C17.9707 4.346 18.6873 5.40433 19.212 6.613C19.7367 7.82167 19.9993 9.11733 20 10.5V11.95C20 12.9333 19.6627 13.771 18.988 14.463C18.3133 15.155 17.484 15.5007 16.5 15.5C15.9 15.5 15.3417 15.3667 14.825 15.1C14.3083 14.8333 13.8833 14.4833 13.55 14.05C13.1 14.5 12.5707 14.8543 11.962 15.113C11.3533 15.3717 10.6993 15.5007 10 15.5C8.61667 15.5 7.43733 15.0123 6.462 14.037C5.48667 13.0617 4.99933 11.8827 5 10.5C5 9.11667 5.48767 7.93733 6.463 6.962C7.43833 5.98667 8.61733 5.49933 10 5.5C11.3833 5.5 12.5627 5.98767 13.538 6.963C14.5133 7.93833 15.0007 9.11733 15 10.5V11.95C15 12.4333 15.15 12.8123 15.45 13.087C15.75 13.3617 16.1 13.4993 16.5 13.5C16.9 13.5 17.25 13.3623 17.55 13.087C17.85 12.8117 18 12.4327 18 11.95V10.5C18 8.31667 17.2123 6.43733 15.637 4.862C14.0617 3.28667 12.1827 2.49933 10 2.5C7.81667 2.5 5.93734 3.28767 4.362 4.863C2.78667 6.43833 1.99933 8.31733 2 10.5C2 12.6833 2.78767 14.5627 4.363 16.138C5.93833 17.7133 7.81733 18.5007 10 18.5H15V20.5H10ZM10 13.5C10.8333 13.5 11.5417 13.2083 12.125 12.625C12.7083 12.0417 13 11.3333 13 10.5C13 9.66667 12.7083 8.95833 12.125 8.375C11.5417 7.79167 10.8333 7.5 10 7.5C9.16667 7.5 8.45833 7.79167 7.875 8.375C7.29167 8.95833 7 9.66667 7 10.5C7 11.3333 7.29167 12.0417 7.875 12.625C8.45833 13.2083 9.16667 13.5 10 13.5Z" fill="#323232"/>
                                                </svg>
                                            </div>

                                            <div className="useremail-detail">
                                                <h2>Email:</h2>
                                                <h3>johndoe@mail.com</h3>
                                            </div>
                                        </div>

                                        <div className="userprimaryno">
                                            <div className="primaryno-svg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                                                    <path d="M32 28C30.8 28 29.5 27.8 28.4 27.4H28.1C27.8 27.4 27.6 27.5 27.4 27.7L25.2 29.9C22.4 28.4 20 26.1 18.6 23.3L20.8 21.1C21.1 20.8 21.2 20.4 21 20.1C20.7 19 20.5 17.7 20.5 16.5C20.5 16 20 15.5 19.5 15.5H16C15.5 15.5 15 16 15 16.5C15 25.9 22.6 33.5 32 33.5C32.5 33.5 33 33 33 32.5V29C33 28.5 32.5 28 32 28ZM17 17.5H18.5C18.6 18.4 18.8 19.3 19 20.1L17.8 21.3C17.4 20.1 17.1 18.8 17 17.5ZM31 31.5C29.7 31.4 28.4 31.1 27.2 30.7L28.4 29.5C29.2 29.7 30.1 29.9 31 29.9V31.5Z" fill="#323232"/>
                                                </svg>
                                            </div>

                                            <div className="userprimaryno-detail">
                                                <h2>Primary Number:</h2>
                                                <h3>+254 723232323</h3>
                                            </div>
                                        </div>

                                        <div className="usersecondaryno">
                                            <div className="secondaryno-svg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                                                    <path d="M29.5 21.342C27.976 20.837 26.146 20.5 24 20.5C21.855 20.5 20.024 20.837 18.5 21.342M29.5 21.342C32.521 22.342 34.335 24.002 35 25L32.5 27.5L29.5 25.5V21.342ZM18.5 21.342C15.479 22.342 13.665 24.002 13 25L15.5 27.5L18.5 25.5V21.342Z" fill="#323232"/>
                                                    <path d="M29.5 21.342C27.976 20.837 26.146 20.5 24 20.5C21.855 20.5 20.024 20.837 18.5 21.342M29.5 21.342C32.521 22.342 34.335 24.002 35 25L32.5 27.5L29.5 25.5V21.342ZM18.5 21.342C15.479 22.342 13.665 24.002 13 25L15.5 27.5L18.5 25.5V21.342Z" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </div>

                                            <div className="usersecondaryno-detail">
                                                <h2>Secondary Number:</h2>
                                                <h3>n/a</h3>
                                            </div>
                                        </div>

                                        <div className="userbal">
                                            <div className="bal-svg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9915 23.8676C26.3294 24.1067 26.5848 24.4443 26.7228 24.8343C26.7447 24.8963 26.754 24.9617 26.7506 25.0274C26.7472 25.0931 26.7308 25.1573 26.7025 25.2164C26.6742 25.2757 26.6344 25.3287 26.5856 25.3726C26.5367 25.4166 26.4796 25.4505 26.4178 25.4722C26.3558 25.4942 26.2901 25.5037 26.2247 25.5001C26.159 25.4967 26.0948 25.4803 26.0355 25.452C25.9158 25.3948 25.8238 25.2923 25.7798 25.1673C25.7395 25.0535 25.6792 24.9485 25.6023 24.8572C25.5476 24.7923 25.4844 24.7339 25.4141 24.6841C25.2451 24.5647 25.0434 24.5007 24.8366 24.5007V26.5009C25.3672 26.5009 25.8758 26.7116 26.2511 27.0866C26.6261 27.4619 26.8368 27.9705 26.8368 28.5011C26.8368 29.0316 26.6261 29.5402 26.2511 29.9155C25.8758 30.2905 25.3672 30.5012 24.8366 30.5012V31.0013H23.8365V30.5012C23.4229 30.5012 23.0193 30.373 22.6817 30.1342C22.3438 29.8952 22.0884 29.5575 21.9504 29.1676C21.9262 29.1051 21.915 29.0387 21.9172 28.9718C21.9187 28.9298 21.925 28.8883 21.9367 28.8483C21.9436 28.8246 21.9524 28.8014 21.9629 28.7787C21.9907 28.7179 22.0305 28.6634 22.0801 28.6183C22.1294 28.5733 22.1872 28.5384 22.2505 28.5162C22.3135 28.494 22.3804 28.4845 22.447 28.4886C22.5137 28.4925 22.5791 28.5101 22.6389 28.5396C22.6988 28.5694 22.7522 28.6107 22.7959 28.6615C22.8106 28.6786 22.8243 28.6966 22.8365 28.7157C22.8604 28.7525 22.8794 28.7923 22.8929 28.8346C23.0311 29.2235 23.4015 29.5011 23.8365 29.5011V27.501C23.306 27.501 22.7974 27.2903 22.4221 26.9152C22.0471 26.54 21.8364 26.0314 21.8364 25.5008C21.8364 24.9703 22.0471 24.4617 22.4221 24.0864C22.7974 23.7114 23.306 23.5007 23.8365 23.5007V23.0006H24.8366V23.5007C25.2502 23.5007 25.6538 23.6288 25.9915 23.8676ZM23.1295 24.7937C23.317 24.6062 23.5714 24.5007 23.8365 24.5007V26.5009C23.5714 26.5009 23.317 26.3954 23.1295 26.2079C22.9419 26.0204 22.8365 25.766 22.8365 25.5008C22.8365 25.2357 22.9419 24.9812 23.1295 24.7937ZM25.5437 29.2081C25.3562 29.3957 25.1018 29.5011 24.8366 29.5011V27.501C25.1018 27.501 25.3562 27.6065 25.5437 27.794C25.6414 27.8916 25.7168 28.0074 25.7666 28.1331C25.8125 28.2491 25.8367 28.3739 25.8367 28.5011C25.8367 28.7662 25.7312 29.0206 25.5437 29.2081Z" fill="#323232"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.3561 15.5C22.1528 15.5 20.1397 16.21 18.9126 16.8107C18.7907 16.8702 18.6767 16.9291 18.5705 16.9862C18.3566 17.1002 18.1772 17.2077 18.0355 17.3002L19.8707 20.0004C15.5754 24.5198 12.3747 33.5 24.3561 33.5C36.3376 33.5 33.0482 24.3537 28.7898 20.0004L30.6372 17.3002C30.4281 17.1605 30.131 16.9886 29.7631 16.8065L29.694 16.7731C28.4734 16.1805 26.5133 15.5 24.3561 15.5ZM29.0814 17.8027L27.6027 19.9645C25.5447 20.696 23.1114 20.696 21.0539 19.9633L20.0938 18.5498C20.2733 18.5964 20.4535 18.6389 20.6346 18.6775C20.7435 18.7007 20.8527 18.7224 20.9623 18.7427C22.1199 18.9563 23.37 19.0059 24.495 18.6807C26.0701 18.2248 27.7062 17.9018 29.0814 17.8027ZM28.1853 20.8144C25.7776 21.7456 22.8841 21.7456 20.4762 20.8154C19.5127 21.854 18.6162 23.1286 17.9735 24.4526C17.3001 25.8414 16.94 27.2129 17.0074 28.388C17.0721 29.5192 17.5274 30.4851 18.5651 31.2042C19.6487 31.9542 21.4628 32.4999 24.3556 32.4999C27.2453 32.4999 29.0511 31.9449 30.1247 31.1863C31.1545 30.4582 31.6057 29.4787 31.6636 28.3321C31.7237 27.144 31.3557 25.7652 30.6796 24.3862C30.0311 23.0778 29.1905 21.8738 28.1853 20.8144ZM21.1432 17.7592C20.7194 17.6806 20.3013 17.5771 19.9012 17.4582C21.0263 16.9806 22.6328 16.5001 24.3556 16.5001C25.4856 16.5001 26.5619 16.7071 27.4819 16.984C26.3792 17.1618 25.2888 17.4074 24.2165 17.7197C23.2965 17.9863 22.2185 17.9572 21.1432 17.7592Z" fill="#323232"/>
                                                </svg>
                                            </div>

                                            <div className="userbal-detail">
                                                <h2>Account Balance</h2>
                                                <h3>Ksh 2,334.00</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="line"></div>
                                </div>
                            </div>  
                        </div>

                        <div className="profile-activities">
                            <div className="profile-activity">
                                <div className="stats-title">
                                    <h2>User Activity</h2>
                                </div>

                                <div className="profile-transaction">
                                    <div className="duration">Duration 
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M7 10L12 15L17 10H7Z" fill="#FDAC15"/>
                                            </svg>
                                        </span>
                                    </div>

                                    <div className="transactionbtn">Transaction
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M7 10L12 15L17 10H7Z" fill="#FDAC15"/>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="transaction-activity">
                                <div className="activity">
                                    <div className="recent">
                                        <div className="user">John Doe <span>withdrew Ksh 50</span></div>
                                        <div className="time">1 March 2023, 01:07PM</div>
                                    </div>
                                    <div className="review">Review <img src={review} alt="" /></div>
                                </div>

                                <div className="activity">
                                    <div className="recent">
                                        <div className="user">John Doe <span>withdrew Ksh 240</span></div>
                                        <div className="time">26 Feb 2023, 12:45PM</div>
                                    </div>
                                    <div className="review">Review <img src={review} alt="" /></div>
                                </div>

                                <div className="activity">
                                    <div className="recent">
                                        <div className="user">John Doe <span>sent Ksh 110 to <span className="client">Chris Kiribi</span></span></div>
                                        <div className="time">24 Feb 2023, 12:00PM</div>
                                    </div>
                                    <div className="review">Review <img src={review} alt="" /></div>
                                </div>

                                <div className="activity">
                                    <div className="recent">
                                        <div className="user">John Doe <span>deposited Ksh 500 to wallet</span></div>
                                        <div className="time">24 Feb 2023, 11:55AM</div>
                                    </div>
                                    <div className="review">Review <img src={review} alt="" /></div>
                                </div>

                                <div className="activity">
                                    <div className="recent">
                                        <div className="user">John Doe <span>created a HabaPay account</span></div>
                                        <div className="time">Today, 11:05AM</div>
                                    </div>
                                    <div className="review">Review <img src={review} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;