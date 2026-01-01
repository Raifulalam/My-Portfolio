// src/components/About.js
import React from 'react';
import '../styles/About.css';
import ProfileImg from '../assets/Mohammed_Raiful.png';

const About = () => {
    const birthday = "2003-04-23";
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

    const education = [
        { year: "2008–2019", degree: "Schooling", institute: "MES Public School, Birgunj, Nepal" },
        { year: "2019–2021", degree: "Higher Secondary", institute: "NI College, Birgunj, Nepal" },
        { year: "2022–2026", degree: "B.Tech Computer Science", institute: "GLA University, Mathura, India" },
    ];

    const skills = [
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "HTML & CSS", level: 95 },
        { name: "Python", level: 70 },
    ];

    const hobbies = [
        "Traveling to new places & exploring cultures",
        "Cooking & experimenting with recipes",
        "Gaming & problem-solving challenges",
        "Reading tech blogs & staying updated",
        "Participating in hackathons & coding competitions"
    ];

    return (
        <div className="about-container">
            {/* Top Section */}
            <section className="about-top">
                <div className="about-image-wrapper">
                    <img src={ProfileImg} alt="Mohammed Raiful" className="about-image" />
                </div>
                <div className="about-intro">
                    <h1>Hi, I'm Mohammed Raiful Alam</h1>
                    <p>
                        Final-year B.Tech Computer Science student with a passion for building elegant and efficient software solutions. I specialize in **Full-Stack Development**, and I love creating projects that solve real-world problems.
                    </p>
                    <p>
                        My goal is to continuously learn, innovate, and contribute to impactful projects while improving my skills in both frontend and backend technologies.
                    </p>
                </div>
            </section>

            {/* Education Timeline */}
            <section className="about-education">
                <h2>Education & Journey</h2>
                <div className="timeline">
                    {education.map((edu, i) => (
                        <div key={i} className="timeline-item">
                            <div className="timeline-year"><h3>{edu.degree}</h3>
                                <p>{edu.year}</p>
                            </div>
                            <div className="timeline-info">
                                <h3>{edu.institute}</h3>

                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills */}
            <section className="about-skills">
                <h2>Technical Skills</h2>
                <div className="skills-bars">
                    {skills.map((skill, i) => (
                        <div key={i} className="skill-bar">
                            <span>{skill.name}</span>
                            <div className="bar">
                                <div className="fill" style={{ width: `${skill.level}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Personal Info */}
            <section className="personal-info">
                <h2>Personal Information</h2>
                <div className="info-grid">
                    <div><strong>Role:</strong> Full Stack Developer</div>
                    <div><strong>Birthday:</strong> 23 April 2003</div>
                    <div><strong>Age:</strong> {age}</div>
                    <div><strong>Phone:</strong> +91 8235787151</div>
                    <div><strong>City:</strong> Birgunj, Nepal</div>
                    <div><strong>Degree:</strong> B.Tech in Computer Science</div>
                    <div><strong>Freelance:</strong> Available</div>
                </div>
            </section>

            {/* Hobbies & Interests */}
            <section className="about-hobbies">
                <h2>Hobbies & Interests</h2>
                <ul>
                    {hobbies.map((hobby, i) => (
                        <li key={i}>{hobby}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default About;
