// src/components/About.js
import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-container">
            <section className="about">
                <div className="about-header">
                    <h1>About Me</h1>
                    <p className="about-description">
                        Hello and welcome to my profile! I'm Mohammed Raiful Alam, a dedicated web developer and programmer with a deep passion for crafting innovative digital solutions, user-friendly websites, and applications. My journey in the world of web development began with a curiosity for technology and a desire to create impactful experiences on the internet.
                    </p>
                </div>

                <div className="about-content">
                    <section className="about-section">
                        <h2>What I Do</h2>
                        <p>
                            I’m a passionate developer with experience in building full-stack applications. Skilled in JavaScript, React, Node.js, and modern web technologies. I love solving problems and turning ideas into real-world applications.
                        </p>
                    </section>

                    <section className="about-skills">
                        <h2>Skills</h2>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>HTML & CSS</li>
                            <li>Git & GitHub</li>
                        </ul>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default About;
