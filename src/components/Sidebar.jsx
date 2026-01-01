// src/components/Sidebar.js
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';
import profileImage from '../assets/hero-bg.jpg';

const Sidebar = () => {
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`sidebar ${isSticky ? 'sticky' : ''}`}>

            <nav>
                <ul className="sidebar-list">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'sidebar-link active-link' : 'sidebar-link'}>
                            <i className="bx bx-home"></i> Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/vlogs" className={({ isActive }) => isActive ? 'sidebar-link active-link' : 'sidebar-link'}>
                            <i className="bx bx-video"></i>Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/resume" className={({ isActive }) => isActive ? 'sidebar-link active-link' : 'sidebar-link'}>
                            <i className="bx bx-trophy"></i>Resume
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
