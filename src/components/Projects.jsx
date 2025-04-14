// src/components/Projects.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Projects.css';

const BaseUrl = process.env.REACT_APP_API_URL;

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newProject, setNewProject] = useState({
        title: '',
        description: '',
        tech: '',
        live: '',
        github: ''
    });
    const [admin, setAdmin] = useState(localStorage.getItem('authToken'));


    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = () => {
        axios.get(`${BaseUrl}/projects/projects`)
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProject(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const projectToSend = {
            ...newProject,
            tech: newProject.tech.split(',').map(t => t.trim())
        };

        axios.post(`${BaseUrl}/projects/projects`, projectToSend)
            .then(() => {
                fetchProjects();
                setShowForm(false);
                setNewProject({
                    title: '',
                    description: '',
                    tech: '',
                    live: '',
                    github: ''
                });
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="projects-container">
            <div className="projects-header">
                <h1 className="projects-title">My Projects</h1>
                {admin && (
                    <button className="add-button" onClick={() => setShowForm(!showForm)}>+</button>
                )}

            </div>

            {showForm && (
                <form className="project-form" onSubmit={handleSubmit}>
                    <input type="text" name="title" placeholder="Title" value={newProject.title} onChange={handleInputChange} required />
                    <textarea name="description" placeholder="Description" value={newProject.description} onChange={handleInputChange} required />
                    <input type="text" name="tech" placeholder="Tech (comma separated)" value={newProject.tech} onChange={handleInputChange} required />
                    <input type="text" name="live" placeholder="Live URL" value={newProject.live} onChange={handleInputChange} />
                    <input type="text" name="github" placeholder="GitHub URL" value={newProject.github} onChange={handleInputChange} />
                    <button type="submit">Add Project</button>
                </form>
            )}

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
