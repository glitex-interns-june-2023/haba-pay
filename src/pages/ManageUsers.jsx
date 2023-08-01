import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import axios from 'axios';
import LeftSidebar from '../Components/LeftSidebar';
import Navbar from '../Components/Navbar';
import '../Styles/ManageUsers.css';
import filter from '../assets/filter.png';
import forwardreview from '../assets/forwardreview.png';
import uncheck from '../assets/uncheck.png';
import manage from '../assets/manage.png';
import activity from '../assets/activity.png';
import review from '../assets/review.png';
import user from '../assets/user.png';

const ManageUsers = () => {
    const [isQuickActionsOpen, setIsQuickActionsOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const toggleQuickActions = () => {
        setIsQuickActionsOpen((prev) => !prev);
        setIsFilterOpen(false);

        const overlay = document.querySelector('.overlay');
        if (overlay) {
            overlay.style.display = isQuickActionsOpen ? 'none' : 'block';
        }
    };

    const toggleFilter = () => {
        setIsFilterOpen((prev) => !prev);
        setIsQuickActionsOpen(false);

        const overlay = document.querySelector('.overlay');
        if(overlay) {
            overlay.style.display = isFilterOpen ? 'none' : 'block';
        }
    };

    const closeDropdowns = () => {
        setIsQuickActionsOpen(false);
        setIsFilterOpen(false);
    };

    const navigate = useNavigate();
    const [suspendedUsers, setSuspendedUsers] = useState([]);

    const handleCreateUser = () => {
        // Placeholder function for "Create User" action
        // Implement your logic for creating a user here
        // For example, you can navigate to the create user page
        navigate('/create-account');
    };

    const handleDeleteUser = () => {
        // Placeholder function for "Delete User" action
        // Implement your logic for deleting a user here
        navigate('/delete-account')
    };

    const handleSuspendUser = () => {
        // Placeholder function for "Suspend User" action
        // Implement your logic for suspending a user here
        navigate('/suspend-account')
    };

    const handleRestoreUser = (userEmail) => {
        // Placeholder function for "Restore User" action
        // Implement your logic to restore the user with the given email
        // For demonstration purposes, let's assume you have a list of suspendedUsers
        // and you want to restore the user with the given userEmail

        // Find the user with the provided email in the suspendedUsers list
        const userToRestore = suspendedUsers.find((user) => user.email === userEmail);

        if (userToRestore) {
            // Perform the action to restore the user (e.g., API request to update user status)
            // After successful restoration, update the suspendedUsers list
            const updatedSuspendedUsers = suspendedUsers.filter((user) => user.email !== userEmail);
            setSuspendedUsers(updatedSuspendedUsers);
        }
    };

    // Placeholder value for userEmail. Replace this with the actual email of the user you want to restore.
    const userEmail = "user@example.com";

    /* const fetchUsers = async (page) => {
        try {
          const response = await axios.get(`your-api-url?page=${page}&itemsPerPage=${itemsPerPage}`);
          const data = response.data;
          return data;
        } catch (error) {
          throw new Error('Failed to fetch users from the API.');
        }
      }; */

    return (
        <div className="manage-container" onClick={closeDropdowns}>
            <LeftSidebar />

            <div className="manage-content">
                <Navbar />

                <div className="manage-details">
                    <div className="manage-header">
                        <div className="header-title">
                            <h4>Users</h4>
                        </div>

                        <div className="actions">
                            <div className={`quick-actions ${isQuickActionsOpen ? 'open' : ''}`}>
                                <h5 onClick={toggleQuickActions}>Quick Actions</h5>
                                {isQuickActionsOpen && (
                                    <div className="quick-actions-dropdown">
                                        <button onClick={handleCreateUser} className="createuser-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z" fill="#FDAC15"/>
                                            </svg>
                                            <span>Create User</span>
                                        </button>

                                        <button onClick={handleDeleteUser} className="deleteuser-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clip-path="url(#clip0_376_2851)">
                                                <path d="M20 5C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7H19L18.997 7.071L18.064 20.142C18.0281 20.6466 17.8023 21.1188 17.4321 21.4636C17.0619 21.8083 16.5749 22 16.069 22H7.93C7.42414 22 6.93707 21.8083 6.56688 21.4636C6.1967 21.1188 5.97092 20.6466 5.935 20.142L5.002 7.072C5.00048 7.04803 4.99982 7.02402 5 7H4C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H20ZM16.997 7H7.003L7.931 20H16.069L16.997 7ZM14 2C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3C15 3.26522 14.8946 3.51957 14.7071 3.70711C14.5196 3.89464 14.2652 4 14 4H10C9.73478 4 9.48043 3.89464 9.29289 3.70711C9.10536 3.51957 9 3.26522 9 3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2H14Z" fill="#FDAC15"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_376_2851">
                                                    <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                            <span>Delete User</span>
                                        </button>

                                        <button onClick={handleSuspendUser} className="suspenduser-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19" fill="none">
                                            <path d="M16.6941 14.833L19.4825 11.9198L22.2709 14.833L24 13.0344L21.1994 10.134L24 7.2335L22.2709 5.43496L19.4825 8.34809L16.6941 5.43496L14.965 7.2335L17.7534 10.134L14.965 13.0344L16.6941 14.833ZM12.1766 5.06765C12.1916 4.39807 12.0758 3.73228 11.8364 3.11056C11.5969 2.48883 11.2387 1.92409 10.7834 1.4505C10.3281 0.976906 9.78515 0.604298 9.18744 0.355213C8.58973 0.106129 7.94966 -0.0142549 7.30594 0.0013433C6.66222 -0.0142549 6.02214 0.106129 5.42443 0.355213C4.82672 0.604298 4.2838 0.976906 3.8285 1.4505C3.37319 1.92409 3.01498 2.48883 2.77551 3.11056C2.53605 3.73228 2.42032 4.39807 2.43531 5.06765C2.42032 5.73723 2.53605 6.40302 2.77551 7.02475C3.01498 7.64647 3.37319 8.21121 3.8285 8.6848C4.2838 9.1584 4.82672 9.53101 5.42443 9.78009C6.02214 10.0292 6.66222 10.1496 7.30594 10.134C7.94966 10.1496 8.58973 10.0292 9.18744 9.78009C9.78515 9.53101 10.3281 9.1584 10.7834 8.6848C11.2387 8.21121 11.5969 7.64647 11.8364 7.02475C12.0758 6.40302 12.1916 5.73723 12.1766 5.06765ZM4.87062 5.06765C4.85496 4.73068 4.90723 4.39402 5.02408 4.07931C5.14092 3.7646 5.31976 3.47879 5.5491 3.24023C5.77844 3.00168 6.05321 2.81566 6.35577 2.69412C6.65833 2.57258 6.98198 2.51821 7.30594 2.5345C7.62989 2.51821 7.95355 2.57258 8.2561 2.69412C8.55866 2.81566 8.83343 3.00168 9.06277 3.24023C9.29211 3.47879 9.47095 3.7646 9.58779 4.07931C9.70464 4.39402 9.75691 4.73068 9.74125 5.06765C9.75691 5.40462 9.70464 5.74128 9.58779 6.05599C9.47095 6.37071 9.29211 6.65652 9.06277 6.89507C8.83343 7.13363 8.55866 7.31965 8.2561 7.44119C7.95355 7.56273 7.62989 7.6171 7.30594 7.60081C6.98198 7.6171 6.65833 7.56273 6.35577 7.44119C6.05321 7.31965 5.77844 7.13363 5.5491 6.89507C5.31976 6.65652 5.14092 6.37071 5.02408 6.05599C4.90723 5.74128 4.85496 5.40462 4.87062 5.06765ZM2.43531 17.7334C2.43531 16.7257 2.82018 15.7592 3.50524 15.0466C4.19031 14.334 5.11945 13.9337 6.08828 13.9337H8.52359C9.49242 13.9337 10.4216 14.334 11.1066 15.0466C11.7917 15.7592 12.1766 16.7257 12.1766 17.7334V19H14.6119V17.7334C14.6119 16.9018 14.4544 16.0783 14.1484 15.3099C13.8425 14.5416 13.394 13.8435 12.8287 13.2554C12.2633 12.6673 11.5921 12.2009 10.8535 11.8826C10.1148 11.5643 9.32312 11.4005 8.52359 11.4005H6.08828C4.47357 11.4005 2.92499 12.0677 1.78322 13.2554C0.641442 14.443 0 16.0538 0 17.7334V19H2.43531V17.7334Z" fill="#FDAC15"/>
                                        </svg>
                                            <span>Suspend</span>
                                        </button>
                                        <button onClick={() => handleRestoreUser(userEmail)} className="restoreuser-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.32305 5.41527C3.32305 2.70064 5.72004 0.5 8.67688 0.5C11.6337 0.5 14.0307 2.70064 14.0307 5.41527C14.0307 8.12991 11.6337 10.3305 8.67688 10.3305C5.72004 10.3305 3.32305 8.12991 3.32305 5.41527ZM8.67688 2.19492C6.73964 2.19492 5.1692 3.63672 5.1692 5.41527C5.1692 7.19383 6.73964 8.63563 8.67688 8.63563C10.6141 8.63563 12.1846 7.19383 12.1846 5.41527C12.1846 3.63672 10.6141 2.19492 8.67688 2.19492Z" fill="#FDAC15"/>
                                            <path d="M1.5681 14.143C2.57214 13.2212 3.93391 12.7034 5.35384 12.7034H12C13.4199 12.7034 14.7817 13.2212 15.7857 14.143C16.7897 15.0648 17.3538 16.315 17.3538 17.6186V19.6525C17.3538 20.1206 16.9405 20.5 16.4307 20.5C15.9209 20.5 15.5077 20.1206 15.5077 19.6525V17.6186C15.5077 16.7645 15.1381 15.9454 14.4803 15.3415C13.8225 14.7376 12.9303 14.3983 12 14.3983H5.35384C4.42354 14.3983 3.53135 14.7376 2.87353 15.3415C2.21571 15.9454 1.84615 16.7645 1.84615 17.6186V19.6525C1.84615 20.1206 1.43288 20.5 0.923075 20.5C0.413275 20.5 0 20.1206 0 19.6525V17.6186C0 16.315 0.564064 15.0648 1.5681 14.143Z" fill="#FDAC15"/>
                                            <path d="M23.7296 8.04818C24.0901 7.71722 24.0901 7.18064 23.7296 6.84969C23.3692 6.51873 22.7847 6.51873 22.4242 6.84969L18.6462 10.3183L17.0835 8.88359C16.723 8.55264 16.1386 8.55264 15.7781 8.88359C15.4176 9.21455 15.4176 9.75113 15.7781 10.0821L17.9935 12.116C18.1666 12.2749 18.4014 12.3642 18.6462 12.3642C18.891 12.3642 19.1258 12.2749 19.2989 12.116L23.7296 8.04818Z" fill="#FDAC15"/>
                                        </svg>
                                            <span>Restore</span>
                                        </button>
                                    </div>
                                )}
                                <svg
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent the click event from bubbling to the parent div
                                        toggleQuickActions(); // Trigger the toggleQuickActions function
                                    }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path d="M7 10L12 15L17 10H7Z" fill="#FDAC15" />
                                </svg>

                                {isQuickActionsOpen && <div className="overlay" onClick={toggleQuickActions}></div>}
                            </div>

                            <div className={`quick-filter ${isFilterOpen ? 'open' : ''}`}>
                                <h6>Filter</h6>
                                <img
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent the click event from bubbling to the parent div
                                        toggleFilter(); // Trigger the toggleFilter function
                                    }}
                                    src={filter}
                                    alt=""
                                />
                                {isFilterOpen && (
                                    <div className="filter-dropdown">
                                        <button onClick={() => { /* Logic to handle active filter */ }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.32305 5.41527C3.32305 2.70064 5.72004 0.5 8.67688 0.5C11.6337 0.5 14.0307 2.70064 14.0307 5.41527C14.0307 8.12991 11.6337 10.3305 8.67688 10.3305C5.72004 10.3305 3.32305 8.12991 3.32305 5.41527ZM8.67688 2.19492C6.73964 2.19492 5.1692 3.63672 5.1692 5.41527C5.1692 7.19383 6.73964 8.63563 8.67688 8.63563C10.6141 8.63563 12.1846 7.19383 12.1846 5.41527C12.1846 3.63672 10.6141 2.19492 8.67688 2.19492Z" fill="#FDAC15"/>
                                            <path d="M1.5681 14.143C2.57214 13.2212 3.93391 12.7034 5.35384 12.7034H12C13.4199 12.7034 14.7817 13.2212 15.7857 14.143C16.7897 15.0648 17.3538 16.315 17.3538 17.6186V19.6525C17.3538 20.1206 16.9405 20.5 16.4307 20.5C15.9209 20.5 15.5077 20.1206 15.5077 19.6525V17.6186C15.5077 16.7645 15.1381 15.9454 14.4803 15.3415C13.8225 14.7376 12.9303 14.3983 12 14.3983H5.35384C4.42354 14.3983 3.53135 14.7376 2.87353 15.3415C2.21571 15.9454 1.84615 16.7645 1.84615 17.6186V19.6525C1.84615 20.1206 1.43288 20.5 0.923075 20.5C0.413275 20.5 0 20.1206 0 19.6525V17.6186C0 16.315 0.564064 15.0648 1.5681 14.143Z" fill="#FDAC15"/>
                                            <path d="M23.7296 8.04818C24.0901 7.71722 24.0901 7.18064 23.7296 6.84969C23.3692 6.51873 22.7847 6.51873 22.4242 6.84969L18.6462 10.3183L17.0835 8.88359C16.723 8.55264 16.1386 8.55264 15.7781 8.88359C15.4176 9.21455 15.4176 9.75113 15.7781 10.0821L17.9935 12.116C18.1666 12.2749 18.4014 12.3642 18.6462 12.3642C18.891 12.3642 19.1258 12.2749 19.2989 12.116L23.7296 8.04818Z" fill="#FDAC15"/>
                                        </svg>
                                            <span>Active</span>
                                        </button>

                                        <button onClick={() => { /* Logic to handle suspended filter */ }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19" fill="none">
                                            <path d="M16.6941 14.833L19.4825 11.9198L22.2709 14.833L24 13.0344L21.1994 10.134L24 7.2335L22.2709 5.43496L19.4825 8.34809L16.6941 5.43496L14.965 7.2335L17.7534 10.134L14.965 13.0344L16.6941 14.833ZM12.1766 5.06765C12.1916 4.39807 12.0758 3.73228 11.8364 3.11056C11.5969 2.48883 11.2387 1.92409 10.7834 1.4505C10.3281 0.976906 9.78515 0.604298 9.18744 0.355213C8.58973 0.106129 7.94966 -0.0142549 7.30594 0.0013433C6.66222 -0.0142549 6.02214 0.106129 5.42443 0.355213C4.82672 0.604298 4.2838 0.976906 3.8285 1.4505C3.37319 1.92409 3.01498 2.48883 2.77551 3.11056C2.53605 3.73228 2.42032 4.39807 2.43531 5.06765C2.42032 5.73723 2.53605 6.40302 2.77551 7.02475C3.01498 7.64647 3.37319 8.21121 3.8285 8.6848C4.2838 9.1584 4.82672 9.53101 5.42443 9.78009C6.02214 10.0292 6.66222 10.1496 7.30594 10.134C7.94966 10.1496 8.58973 10.0292 9.18744 9.78009C9.78515 9.53101 10.3281 9.1584 10.7834 8.6848C11.2387 8.21121 11.5969 7.64647 11.8364 7.02475C12.0758 6.40302 12.1916 5.73723 12.1766 5.06765ZM4.87062 5.06765C4.85496 4.73068 4.90723 4.39402 5.02408 4.07931C5.14092 3.7646 5.31976 3.47879 5.5491 3.24023C5.77844 3.00168 6.05321 2.81566 6.35577 2.69412C6.65833 2.57258 6.98198 2.51821 7.30594 2.5345C7.62989 2.51821 7.95355 2.57258 8.2561 2.69412C8.55866 2.81566 8.83343 3.00168 9.06277 3.24023C9.29211 3.47879 9.47095 3.7646 9.58779 4.07931C9.70464 4.39402 9.75691 4.73068 9.74125 5.06765C9.75691 5.40462 9.70464 5.74128 9.58779 6.05599C9.47095 6.37071 9.29211 6.65652 9.06277 6.89507C8.83343 7.13363 8.55866 7.31965 8.2561 7.44119C7.95355 7.56273 7.62989 7.6171 7.30594 7.60081C6.98198 7.6171 6.65833 7.56273 6.35577 7.44119C6.05321 7.31965 5.77844 7.13363 5.5491 6.89507C5.31976 6.65652 5.14092 6.37071 5.02408 6.05599C4.90723 5.74128 4.85496 5.40462 4.87062 5.06765ZM2.43531 17.7334C2.43531 16.7257 2.82018 15.7592 3.50524 15.0466C4.19031 14.334 5.11945 13.9337 6.08828 13.9337H8.52359C9.49242 13.9337 10.4216 14.334 11.1066 15.0466C11.7917 15.7592 12.1766 16.7257 12.1766 17.7334V19H14.6119V17.7334C14.6119 16.9018 14.4544 16.0783 14.1484 15.3099C13.8425 14.5416 13.394 13.8435 12.8287 13.2554C12.2633 12.6673 11.5921 12.2009 10.8535 11.8826C10.1148 11.5643 9.32312 11.4005 8.52359 11.4005H6.08828C4.47357 11.4005 2.92499 12.0677 1.78322 13.2554C0.641442 14.443 0 16.0538 0 17.7334V19H2.43531V17.7334Z" fill="#FDAC15"/>
                                        </svg>
                                            <span>Suspended</span>
                                        </button>
                                    </div>
                                )}

                                {isFilterOpen && <div className="overlay" onclick={toggleFilter}></div>}
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
