// src/components/Projects.js
import React from 'react';
import Badge from './Badge';

const Projects = () => {
    return (
        <div className="projects">
            <h1>My Projects</h1>
            <Badge title="Project 1" description="A web app built with React." />
            <Badge title="Project 2" description="A RESTful API built with Node.js." />
        </div>
    );
};

export default Projects;
