import React, { useState, useEffect, useMemo } from 'react';
import '../styles/Projects.css';

const BaseUrl = process.env.REACT_APP_API_URL;

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [newProject, setNewProject] = useState({
        title: '',
        description: '',
        tech: '',
        live: '',
        github: ''
    });

    const [admin] = useState(localStorage.getItem('authToken'));

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${BaseUrl}/projects/projects`);
            const data = await res.json();
            setProjects(data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProject((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const projectToSend = {
            ...newProject,
            tech: newProject.tech.split(',').map(t => t.trim())
        };

        try {
            const res = await fetch(`${BaseUrl}/projects/projects`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(projectToSend),
            });

            if (res.ok) {
                await fetchProjects();
                setShowForm(false);
                setNewProject({
                    title: '',
                    description: '',
                    tech: '',
                    live: '',
                    github: ''
                });
            } else {
                console.error('Failed to add project:', res.statusText);
            }
        } catch (error) {
            console.error('Error adding project:', error);
        }
    };

    const projectCards = useMemo(() =>
        projects.map((project, index) => (
            <div className="project-card" key={project._id || index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                    {project.tech.map((tech, i) => (
                        <span key={i} className="tech-badge">{tech}</span>
                    ))}
                </div>
                <div className="project-links">
                    {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                </div>
            </div>
        )), [projects]
    );

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

            {loading ? (
                <div className="loading">Loading Projects...</div>
            ) : (
                <div className="projects-grid">
                    {projectCards}
                </div>
            )}
        </div>
    );
};

export default Projects;
