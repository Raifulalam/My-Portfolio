import React, { useState, useEffect, useMemo } from 'react';
import '../styles/Projects.css';
import HeroImage from '../assets/Mohammed_Raiful.png';
import EMS from '../assets/EMS.png';
import RMS from '../assets/RMS.png';
import Lucky from '../assets/Lucky.png';
import Music from '../assets/Music.png';
import Exam from '../assets/ExamPortal.png';
const BaseUrl = process.env.REACT_APP_API_URL;

const Image = [
    { id: 1, img: Music },
    { id: 2, img: Lucky },
    { id: 3, img: RMS },
    { id: 4, img: EMS },
    { id: 5, img: Exam }
]
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
            const res = await fetch(`https://port-backend-7.onrender.com/api/projects/projects`);
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
                <img src={Image[index].img} alt={`${project.title}`} />

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
  <section className="projects-container" id="projects">
    <div className="projects-header">
      <h1>Projects</h1>
      <p>Some of the real-world applications I’ve built</p>
    </div>

    {loading ? (
      <div className="loading">Loading projects...</div>
    ) : (
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={project._id || index}>

            <div className="project-image">
              <img src={Image[index]?.img} alt={project.title} />
              <div className="image-overlay">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
              </div>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    )}
  </section>
);

};

export default Projects;
