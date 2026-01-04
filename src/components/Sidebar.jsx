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


                    <a href="https://github.com/Raifulalam" target="_blank" rel="noopener noreferrer">
                        <img src="/github.svg" alt="GitHub" />
                    </a>


                    <a href="https://www.linkedin.com/in/mohammed-raiful-alam-321021278/" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin.png" alt="LinkedIn" />
                    </a>

                    <a href="https://twitter.com/md_raiful7" target="_blank" rel="noopener noreferrer">
                        <img src="/twitter.png" alt="Twitter" />
                    </a>

                    <a href="https://www.instagram.com/md_raiful7/?hl=en" target="_blank" rel="noopener noreferrer">
                        <img src="/insta.svg" alt="Instagram" />
                    </a>


                    <a href="https://www.facebook.com/raiful.alam.31149/" target="_blank" rel="noopener noreferrer">
                        <img src="/facebook.svg" alt="Facebook" />
                    </a>


                    <a href="https://www.youtube.com/@Life_Codes7" target="_blank" rel="noopener noreferrer">
                        <img src="/youtube.png" alt="YouTube" />
                    </a>

                    <a href="mailto:raifulalam0123@gmail.com">
                        <img src="/email.png" alt="Email" />
                    </a>



                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
