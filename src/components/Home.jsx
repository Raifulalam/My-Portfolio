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

const Home = () => {
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
                            <a
                                href={`${process.env.PUBLIC_URL}/files/My_Resume.pdf`}
                                download
                                className="btn secondary"
                            >
                                Download Resume
                            </a>
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
                        <img src={HeroImage} alt="Mohammed Raiful Alam" />
                    </div>

                </div>
            </section>

            {/* SKILLS */}
            <section className="skills-strip">
                {[
                    "JavaScript", "React", "Node.js", "Express",
                    "MongoDB", "MySQL", "Java", "Git", "REST APIs"
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
