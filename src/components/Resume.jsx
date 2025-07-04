// src/components/Resume.js
import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
    return (
        <div className="resume-container">
            <h1 className="resume-title">Resume</h1>
            <p className="resume-subtitle">A quick overview of my skills, experience, and achievements.</p>

            {/* Objective */}
            <section className="resume-section">
                <h2>Objective</h2>
                <p>
                    Motivated software developer with a passion for building web applications, solving real-world problems, and exploring new technologies. I aim to contribute to impactful projects, grow as a full-stack developer, and be part of innovative teams.
                </p>
            </section>

            {/* Education */}
            <section className="resume-section">
                <h2>Education</h2>
                <div className="resume-item">
                    <h3>B.Tech in Computer Science & Engineering</h3>
                    <span className="date">GLA University, Mathura | 2022 – 2026</span>
                </div>
            </section>

            {/* Skills */}
            <section className="resume-section">
                <h2>Skills</h2>
                <ul className="skills-list">
                    <li>Languages: HTML, CSS, JavaScript, SQL, C, Python, Java</li>
                    <li>Frameworks: React, Node.js, Express</li>
                    <li>Concepts: Data Structures & Algorithms (DSA)</li>
                    <li>Tools: Git, GitHub, VS Code, IntelliJ IDEA</li>
                    <li>Design: Photoshop, Image Editing</li>
                </ul>
            </section>

            {/* Experience */}
            <section className="resume-section">
                <h2>Internship</h2>

                <div className="resume-item">
                    <h3>Web Developer Intern – Zidio Development</h3>
                    <span className="date">March 2024 – April 2024</span>
                    <ul>
                        <li>Built responsive web interfaces using HTML, CSS, and JavaScript</li>
                        <li>Optimized database operations using SQL</li>
                        <li>Applied core DSA concepts in practical coding tasks</li>
                        <li>Worked on branding visuals with image editing tools</li>
                    </ul>
                </div>

                <div className="resume-item">
                    <h3>Full Stack Developer – Coding Blocks</h3>
                    <span className="date">July 2024 – August 2024</span>
                    <ul>
                        <li>Developed full-stack web apps using MongoDB, Express, and React</li>
                        <li>Integrated third-party APIs and created RESTful endpoints</li>
                        <li>Designed a music app that adapts content based on user mood</li>
                    </ul>
                </div>
            </section>

            {/* Projects */}
            <section className="resume-section">
                <h2>Projects</h2>



                <div className="resume-item">
                    <h3>Knowledge Sharing Forum</h3>
                    <p>
                        Built a responsive forum platform where users can post, reply, and interact on various tech topics. Here i use Python, Flask and django with MongoDb
                    </p>
                </div>

                <div className="resume-item">
                    <h3>E-commerce Website</h3>
                    <p>
                        Designed and developed a fully functional e-commerce site with product listings, shopping cart, and payment flow simulation.
                    </p>
                </div>

                <div className="resume-item">
                    <h3>Restaurant Reservation System</h3>
                    <p>
                        Web app for restaurant table booking and time slot management, using a structured database and responsive UI.
                    </p>
                </div>

                <div className="resume-item">
                    <h3>Personal Portfolio</h3>
                    <p>
                        A clean and modern portfolio website showcasing my projects, skills, and resume — built with React and deployed online.
                    </p>
                </div>

                <div className="resume-item">
                    <h3>Music Taste Explorer</h3>
                    <p>
                        Created an interactive app that recommends music based on user-selected mood or genre using external music APIs.
                    </p>
                </div>
                <div className="resume-item">
                    <h3>Real-Time Location Tracker</h3>
                    <p>
                        Developed a real-time tracking app using Node.js, JavaScript, and SQL. Integrated location APIs and displayed dynamic user positions on a map.
                    </p>
                </div>

                <div className="resume-item">
                    <h3>AI Text Summarizer</h3>
                    <p>
                        Created a tool that summarizes large text using NLP APIs. Implemented frontend logic with JavaScript and styled with CSS.
                    </p>
                </div>
            </section>

            {/* Certifications */}
            <section className="resume-section">
                <h2>Certifications</h2>
                <ul className="skills-list">
                    <li>Java DSA Certification</li>
                    <li>Postman API Fundamentals – Student Expert</li>
                    <li>Postman AI Text Summarizer Certificate</li>
                    <li>Python Bootcamp (2 months) – Udemy</li>
                </ul>
            </section>

            {/* Interests */}
            <section className="resume-section">
                <h2>Interests & Goals</h2>
                <ul className="skills-list">
                    <li>Web Development, Cybersecurity, Machine Learning, AI</li>
                    <li>Explore Microservices & Serverless Architectures</li>
                    <li>Learn new languages: C++, Ruby, Swift</li>
                    <li>Build real-world software that benefits society</li>
                </ul>
            </section>

            {/* Download Button */}
            <div className="resume-download">
                <a
                    href={`${process.env.PUBLIC_URL}/files/Mohammed_Raiful_Resume.pdf`}
                    download
                    className="download-btn"
                >
                    Download Resume (PDF)
                </a>
            </div>
        </div>
    );
};

export default Resume;
