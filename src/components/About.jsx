// src/components/About.js
import React from 'react';
import '../styles/About.css';
import ProfileImg from '../assets/Mohammed_Raiful.png';
import { Link } from 'react-router-dom';

const About = () => {
    const birthday = "2003-04-23";
    const birthDate = new Date(birthday);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return (
        <div className="about-container">

            {/* Top Section with Image and Summary */}
            <section className="about-top">
                <div className="about-image-wrapper">
                    <img src={ProfileImg} alt="Mohammed Raiful Alam" className="about-image" />
                </div>
                <div className="about-intro">
                    <h1>Hi, I'm Mohammed Raiful Alam</h1>
                    <p>
                        A Compurt science Engineer &  full-stack web developer  enthusiast passionate about turning ideas into scalable and user-centric digital experiences. With a strong foundation in modern web technologies and a keen eye for detail, I help bring visions to life—code by code.
                    </p>

                    <section className="contact-us">
                        <a href="#contact" className="cta-button">Let’s Connect</a>
                        <ul>
                            <li>
                                <Link
                                    to="https://www.linkedin.com/in/mohammed-raiful-alam-321021278/"

                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bx bxl-linkedin" style={{ marginRight: '8px', background: 'blue', color: 'white' }}></i>

                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://www.linkedin.com/in/mohammed-raiful-alam-321021278/"

                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bx bxl-facebook" style={{ marginRight: '8px', background: 'blue', color: 'white' }}></i>

                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://www.linkedin.com/in/mohammed-raiful-alam-321021278/"

                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bx bxl-instagram" style={{ marginRight: '8px', background: 'blue', color: 'white' }}></i>

                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://github.com/Raifulalam"

                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bx bxl-github" style={{ marginRight: '8px' }}></i>

                                </Link>
                            </li>
                        </ul>
                    </section>
                </div>
            </section>

            {/* Skills */}
            <section className="about-skills">
                <h2>Tech Stack</h2>
                <ul>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>HTML5 & CSS3</li>
                    <li>Python</li>
                    <li>Git & GitHub</li>
                </ul>
            </section>

            {/* Personal Info */}
            <section className="personal-info">
                <h2>Personal Information</h2>
                <div className="info-grid">
                    <div><strong>Role:</strong> Full Stack Developer</div>
                    <div><strong>Birthday:</strong> 23 April 2003</div>
                    <div><strong>Age:</strong> {age}</div>
                    <div><strong>Phone:</strong> +91 8235787151</div>
                    <div><strong>City:</strong> Mathura, India</div>
                    <div><strong>Degree:</strong> B.Tech in Computer Science</div>
                    <div><strong>Freelance:</strong> Available</div>

                </div>
            </section>

            {/* Summary */}
            <section className="about-summary">
                <h2>Professional Summary</h2>
                <p>
                    With years of experience in both frontend and backend development, I bring a full-stack mindset to every project. My work is focused on clean design, secure code, and performance optimization.
                </p>
                <p>
                    Whether it's building responsive UIs with React, APIs with Node.js, or implementing databases with MongoDB or MySQL, I approach each task with precision and a passion for learning.
                </p>
                <p>
                    I value collaboration, continuous improvement, and staying current with industry trends. Let’s build something amazing together.
                </p>
            </section>
        </div>
    );
};

export default About;
