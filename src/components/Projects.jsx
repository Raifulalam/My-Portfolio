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
        title: 'Real-Time Location Tracker',
        description: 'Full-stack app to track user locations in real-time using JavaScript and SQL for backend data handling.',
        tech: ['JavaScript', 'Node.js', 'SQL'],
        live: 'https://yourlocationtracker.com',
        github: 'https://github.com/yourusername/real-time-location-tracker'
    },
    {
        title: 'AI Text Summarizer',
        description: 'Developed an AI-powered text summarizer using APIs to generate concise content from lengthy input.',
        tech: ['JavaScript', 'Node.js', 'APIs'],
        live: 'https://youraisummarizer.com',
        github: 'https://github.com/yourusername/ai-text-summarizer'
    },
    {
        title: 'Knowledge Sharing Forum',
        description: 'A platform for users to share knowledge and interact through posts and comments.',
        tech: ['React', 'Node.js', 'MongoDB'],
        live: 'https://yourforum.com',
        github: 'https://github.com/yourusername/knowledge-sharing-forum'
    },
    {
        title: 'E-commerce Website',
        description: 'Designed and built a complete e-commerce platform with product listings, shopping cart, and checkout functionality.',
        tech: ['React', 'Node.js', 'MongoDB', 'CSS'],
        live: 'https://yourecommerce.com',
        github: 'https://github.com/yourusername/e-commerce-website'
    },
    {
        title: 'Restaurant Reservation System',
        description: 'A web-based tool that allows users to book restaurant tables and manage schedules.',
        tech: ['React', 'Node.js', 'MongoDB'],
        live: 'https://yourreservation.com',
        github: 'https://github.com/yourusername/restaurant-reservation-system'
    },
    {
        title: 'Personal Portfolio',
        description: 'A simple personal website to showcase my skills and projects, built using React.',
        tech: ['React', 'CSS', 'Vite'],
        live: 'https://yourportfolio.com',
        github: 'https://github.com/yourusername/personal-portfolio'
    },
    {
        title: 'Music Test Explorer',
        description: 'Created a platform to explore and interact with music-related content and tests.',
        tech: ['React', 'JavaScript', 'APIs'],
        live: 'https://yourmusicexplorer.com',
        github: 'https://github.com/yourusername/music-test-explorer'
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
