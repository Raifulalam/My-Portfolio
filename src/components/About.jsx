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
            {/* Top Section with Image and Biography */}
            <section className="about-top">
                <div className="about-image-wrapper">
                    <img src={ProfileImg} alt="Mohammed Raiful Alam" className="about-image" />
                </div>
                <div className="about-intro">
                    <h1>Hi, I'm Mohammed Raiful Alam</h1>
                    <p>
                        I'm a final-year B.Tech Computer Science student at GLA University, Mathura. I completed my schooling at MES Public School, Chhapkaiya-3, Birgunj, Nepal, and pursued my higher secondary education at NI College, Birgunj, Nepal.
                    </p>
                    <p>
                        I specialize in full-stack development, with a keen interest in solving complex problems through intuitive and efficient digital solutions. My goal is to contribute to impactful projects and continuously improve my skills across the tech stack.
                    </p>
                    <p>
                        In my free time, I enjoy traveling to new places, experimenting in the kitchen, gaming, and staying updated with the latest trends in software and technology. I'm always open to new challenges and collaboration opportunities that push the boundaries of innovation.
                    </p>
                    <section className="contact-us">
                        <a href="#contact" className="cta-button">Let’s Connect</a>
                        <ul className="social-links">
                            <li><a href="https://www.linkedin.com/in/mohammed-raiful-alam-321021278/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a></li>
                            <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook"></i></a></li>
                            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram"></i></a></li>
                            <li><a href="https://github.com/Raifulalam" target="_blank" rel="noopener noreferrer"><i className="bx bxl-github"></i></a></li>
                        </ul>
                    </section>
                </div>
            </section>
            {/* Education Journey */}
            <section className="education-journey">
                <h2>Education Journey</h2>
                <ul>
                    <li><strong>Schooling:</strong> MES Public School, Chhapkaiya-3, Birgunj, Nepal</li>
                    <li><strong>Higher Secondary:</strong> NI College, Birgunj, Nepal</li>
                    <li><strong>Undergraduate:</strong> GLA University, Mathura – B.Tech in Computer Science (2022–2026)</li>
                </ul>
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

            {/* Hobbies & Interests */}
            <section className="about-hobbies">
                <h2>Hobbies & Interests</h2>
                <ul>
                    <li>Traveling to new destinations and learning about diverse cultures</li>
                    <li>Cooking a variety of dishes, from traditional to modern recipes</li>
                    <li>Engaging in competitive gaming and strategy-based challenges</li>
                    <li>Reading tech blogs and staying current with emerging innovations</li>
                    <li>Taking part in hackathons and collaborative coding events</li>
                </ul>
            </section>


        </div>
    );
};

export default About;
