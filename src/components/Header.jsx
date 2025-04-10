// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'
import HeroImage from '../assets/Mohammed_Raiful.png'; // Assuming your HeroImage is in the assets folder

const Header = () => {
    return (
        <header className="header">
            <div className="hero-container">
                <div className="image-container">
                    <img
                        src={HeroImage}
                        alt="Profile"
                        className="hero-image"
                    />
                </div>

                <div className="hero-details">
                    <h1>Hi, I'm Mohammed Raiful Alam</h1>
                    <p>Software Engineer</p>
                    <p className="hero-description">
                        Passionate about building scalable web applications and solving complex problems.
                        I specialize in frontend and backend development, constantly learning new technologies to create innovative solutions.
                    </p>
                    <Link to="/explore" className="explore-button">
                        Explore My Work
                    </Link>
                </div>

            </div>



        </header>
    );
};

export default Header;

