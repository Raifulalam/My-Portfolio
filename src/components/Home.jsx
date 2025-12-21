// src/components/Home.js
import React from 'react';
import '../styles/Home.css';
import HeroImage from '../assets/Mohammed_Raiful.png';
import { Link } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Vlogs from './Vlogs';
import Activities from './Activities';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagramSquare, FaTwitter, FaEnvelope } from 'react-icons/fa';
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

                        <Link to={"https://github.com/Raifulalam"}> <a className="cta-button">View My Work</a></Link>
                        <a
                            href={`${process.env.PUBLIC_URL}/files/My_Resume.pdf`}
                            download
                            className="cta-button"
                        >
                            Download Resume (PDF)
                        </a>
                    </div>
                    <div className="image-section">
                        <img src={HeroImage} alt="Mohammed Raiful" className="hero-image" />
                    </div>
                </div>
                <div className="skills-container">
                    <hr />
                    <div className="online-profile-links">
                        <a href="https://github.com/Raifulalam" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com/Raifulalam" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noopener noreferrer">
                            <FaInstagramSquare size={24} />
                        </a>
                        <a href="https://linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={24} />
                        </a>
                        <a href="mailto:raifulalam0123@gmail.com">
                            <FaEnvelope size={24} />
                        </a>

                    </div>
                    <div className="skills">

                        <ul className="skills-list">
                            <li>JavaScript (ES6+)</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                            <li>HTML5 & CSS3</li>
                            <li>Git & GitHub</li>
                            <li>RESTful APIs</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>PHP</li>
                            <li>MySQL</li>

                        </ul>
                    </div>
                </div>

            </section>
            <About />

            <Projects />
            <Activities />
            <Vlogs />




        </div>
    );
};

export default Home;
