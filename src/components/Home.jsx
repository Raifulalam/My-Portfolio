// src/components/Home.js
import React from "react";
import "../styles/Home.css";
import HeroImage from "../assets/Mohammed_Raiful.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Projects from "./Projects.jsx";
import Bot from "../Bot.jsx";
import About from "./About.jsx";
import Vlogs from "./Vlogs.jsx";
import Activities from "./Activities.jsx";
import { useEffect } from "react";

const Home = () => {
    const downloadResume = () => {
        const fileUrl = `${process.env.PUBLIC_URL}/files/My_Resume.pdf`;

        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "Mohammed_Raiful_Alam_Resume.pdf";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const changeBackground = () => {
        const colors = [
            '#1e3c72',
            '#2a5298',
            '#4dabf7',
            '#ff9a9e',
            '#fad0c4',
            '#fbc2eb',
            '#a6c1ee'
        ];

        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        const element = document.getElementsByClassName('heroimagetop')[0];
        if (element) {
            element.style.backgroundColor = randomColor;
        }
    };

    useEffect(() => {
        changeBackground();
    }, []);


    return (
        <div className="home-container">

            {/* HERO */}
            <section className="hero">
                <div className="hero-card">

                    {/* LEFT */}
                    <div className="hero-text">
                        <h1>
                            Mohammed <span>Raiful Alam</span>
                        </h1>

                        <h2>Full Stack Developer</h2>

                        <p>
                            I build scalable, user-focused web applications using modern
                            technologies like React, Node.js, and MongoDB.
                        </p>

                        <div className="hero-buttons">
                            <a href="#projects" className="btn primary">View Projects</a>
                            <button className="btn secondary" onClick={downloadResume}>
                                Download Resume
                            </button>

                        </div>

                        <div className="hero-socials">
                            <a href="https://github.com/Raifulalam" target="_blank" rel="noreferrer">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="mailto:raifulalam0123@gmail.com">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="hero-image-wrapper">
                        <img className="heroimagetop" src={HeroImage} alt="Mohammed Raiful Alam" />
                        <button className="changeBtn" onClick={changeBackground}>💱</button>
                    </div>

                </div>
            </section>

            {/* SKILLS */}
            <section className="skills-strip">
                {[
                    "HTML",
                    "CSS",
                    "Bootstrap",
                    "Tailwind CSS",
                    "Java",
                    "Git & GitHub",
                    "Express.js",
                    "RESTful APIs",
                    "SQL",
                    "NoSQL",
                    "PHP",
                    "JavaScript",
                    "React.js",
                    "Node.js",
                    "MongoDB",
                    "HTML & CSS",
                    "Python"
                ].map(skill => (
                    <span key={skill}>{skill}</span>
                ))}
            </section>
            <Projects />
            <Bot />
            <About />
            <Activities />
            <Vlogs />
        </div>
    );
};

export default Home;
