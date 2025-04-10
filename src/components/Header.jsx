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

                <section className="hero-section">
                    <div className="hero-text">
                        <h1>Hello, I'm <span className="highlight">Mohammed Raiful Alam</span></h1>
                        <p>Software Developer | Frontend & Backend Enthusiast | Tech Explorer</p>
                        <a href="#projects" className="cta-button">View My Work</a>
                    </div>


                </section>



            </div>



        </header>
    );
};

export default Header;

