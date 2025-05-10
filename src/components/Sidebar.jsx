// src/components/Sidebar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';
import profileImage from '../assets/hero-bg.jpg'; // Import profile image

const Sidebar = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div>
            {/* Hamburger Icon */}
            <div className={`hamburger ${isSidebarVisible ? 'active' : ''}`} onClick={toggleSidebar}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* Sidebar */}
            <div className={`sidebar ${isSidebarVisible ? 'show' : ''}`}>
                <div className="profile-section">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                    <h2 className="sidebar-title">My Portfolio</h2>
                </div>

                <nav>
                    <ul className="sidebar-list">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? 'sidebar-link active-link' : 'sidebar-link'
                                }
                            >
                                <i className="bx bx-home"></i> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    isActive ? 'sidebar-link active-link' : 'sidebar-link'
                                }
                            >
                                <i className="bx bx-briefcase"></i> Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/resume"
                                className={({ isActive }) =>
                                    isActive ? 'sidebar-link active-link' : 'sidebar-link'
                                }
                            >
                                <i className="bx bx-file"></i> Resume
                            </NavLink>
                        </li>




                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? 'sidebar-link active-link' : 'sidebar-link'
                                }
                            >
                                <i className="bx bx-user"></i> About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/vlogs"
                                className={({ isActive }) =>
                                    isActive ? 'sidebar-link active-link' : 'sidebar-link'
                                }
                            >
                                <i className="bx bx-video"></i> Vlogs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/activities"
                                className={({ isActive }) =>
                                    isActive ? 'sidebar-link active-link' : 'sidebar-link'
                                }
                            >
                                <i className="bx bx-trophy"></i> Activities
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                {/* Close Button */}
                <div className="close-btn" onClick={toggleSidebar}>
                    <span>&times;</span>
                </div>
                {/* Contact Section */}

            </div>
        </div>
    );
};

export default Sidebar;
