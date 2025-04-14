// src/components/Home.js
import React from 'react';
import '../styles/Home.css';
import HeroImage from '../assets/Mohammed_Raiful.png';

const Home = () => {
    return (
        <div className="home-container">
            <section className="hero">
                <div className="hero-content">
                    <div className="text-section">
                        <h1>Hello, I'm <span className="highlight">Mohammed Raiful Alam</span></h1>
                        <p className="subheading">
                            Software Developer | Frontend & Backend Enthusiast | Tech Explorer
                        </p>
                        <a href="/projects" className="cta-button">View My Work</a>
                    </div>
                    <div className="image-section">
                        <img src={HeroImage} alt="Mohammed Raiful" className="hero-image" />
                    </div>
                </div>
            </section>

            <div className="divider"></div>

        </div>
    );
};

export default Home;
