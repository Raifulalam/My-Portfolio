// src/components/Badge.js
import React from 'react';
import '../styles/Badge.css';

const Badge = ({ title, description }) => (
    <div className="badge-container">
        <h3 className="badge-title">{title}</h3>
        <p className="badge-description">{description}</p>
    </div>
);

export default Badge;
