// src/components/Home.js
import React from 'react';
import '../styles/Home.css';
import profileImage from '../assets/hero-bg.jpg'; // Import profile image
import About from './About';

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-text">
                    <h1>Hello, I'm <span className="highlight">Mohammed Raiful Alam</span></h1>
                    <p>Software Developer | Frontend & Backend Enthusiast | Tech Explorer</p>
                    <a href="#projects" className="cta-button">View My Work</a>
                </div>
                <div className="hero-image">
                    <img src={profileImage} alt="Profile" className="profile-home-image" />
                    <span className='profile-base'></span>
                </div>

            </section>

            {/* About Me Section */}
            <section className="about-section">
                <h2>About Me</h2>
                <p>
                    I’m a passionate developer with experience in building full-stack applications.
                    Skilled in JavaScript, React, Node.js, and modern web technologies. I love solving
                    problems and turning ideas into real-world applications.
                </p>
            </section>
            <About />

            {/* Contact Section */}
            <section className="contact-section">
                <h2>Contact Me</h2>
                <p>Email: raiful@example.com</p>
                <p>LinkedIn: linkedin.com/in/raiful</p>
                <p>GitHub: github.com/raiful</p>
            </section>
        </div>
    );
};

export default Home;
