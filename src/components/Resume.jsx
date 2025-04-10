// src/components/Resume.js
import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
    return (
        <div className="resume-container">
            <h1 className="resume-title">My Resume</h1>
            <p className="resume-subtitle">Explore my journey through tech and development.</p>

            <section className="resume-section">
                <h2>👨‍💻 Professional Summary</h2>
                <p>
                    I'm a passionate full-stack developer experienced in crafting modern web applications using React,
                    Node.js, and JavaScript. I thrive in collaborative environments and bring a strong eye for clean code,
                    scalable architecture, and user-focused solutions.
                </p>
            </section>

            <section className="resume-section">
                <h2>💼 Experience</h2>

                <div className="resume-item">
                    <h3>Frontend Developer @ TechWave Solutions</h3>
                    <span className="date">2022 – Present</span>
                    <ul>
                        <li>Built responsive UIs with React, TailwindCSS, and Chakra UI</li>
                        <li>Integrated RESTful APIs and enhanced client-side performance</li>
                        <li>Led UI refactor resulting in 30% faster load times</li>
                    </ul>
                </div>

                <div className="resume-item">
                    <h3>Web Developer Intern @ DevSpark</h3>
                    <span className="date">2021 – 2022</span>
                    <ul>
                        <li>Created responsive landing pages and dashboards using HTML/CSS/JS</li>
                        <li>Contributed to open-source team projects via GitHub and agile sprints</li>
                    </ul>
                </div>
            </section>

            <section className="resume-section">
                <h2>🎓 Education</h2>
                <div className="resume-item">
                    <h3>BSc in Computer Science</h3>
                    <span className="date">XYZ University, 2018 – 2022</span>
                </div>
            </section>

            <section className="resume-section">
                <h2>🛠️ Skills</h2>
                <ul className="skills-list">
                    <li>JavaScript / TypeScript</li>
                    <li>React / Redux</li>
                    <li>Node.js / Express</li>
                    <li>MongoDB / Firebase</li>
                    <li>HTML5 / CSS3 / SCSS</li>
                    <li>Git / GitHub / GitLab</li>
                    <li>REST APIs / Axios / Fetch</li>
                    <li>Figma / Adobe XD / UI Design</li>
                </ul>
            </section>

            <div className="resume-download">
                <a
                    href={`${process.env.PUBLIC_URL}/files/My_Resume.pdf`}  // Updated file path
                    download
                    className="download-btn"
                >
                    📄 Download Resume (PDF)
                </a>
            </div>
        </div>
    );
};

export default Resume;
