// src/components/Projects.js
import React from 'react';
import '../styles/Projects.css';

const projects = [
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio site built using React, showcasing my skills and work.',
        tech: ['React', 'CSS', 'Vite'],
        live: 'https://yourportfolio.com',
        github: 'https://github.com/yourusername/portfolio'
    },
    {
        title: 'RESTful API for Blog',
        description: 'Node.js + Express API with JWT Auth and MongoDB for a blogging platform.',
        tech: ['Node.js', 'Express', 'MongoDB'],
        live: '',
        github: 'https://github.com/yourusername/blog-api'
    },
    {
        title: 'YouTube Clone',
        description: 'A responsive YouTube-like UI using React and YouTube Data API.',
        tech: ['React', 'YouTube API', 'Material UI'],
        live: 'https://youtubeclone.netlify.app',
        github: 'https://github.com/yourusername/youtube-clone'
    }
];

const Projects = () => {
    return (
        <div className="projects-container">
            <h1 className="projects-title">My Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-tech">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            {project.live && (
                                <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                            )}
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
