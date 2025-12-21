// src/components/Activities.js
import React, { useState } from 'react';
import '../styles/Activities.css';
import internshipCertificate from '../assets/certificate intern.jpg'
import internshipCertificateZidio from '../assets/zidio.jpg'

const activities = [
    { title: 'Mentorship', icon: '🎓', description: 'I enjoy mentoring junior developers, helping them grow through code reviews, portfolio guidance, and career tips.' },
    { title: 'Technical Blogging', icon: '📝', description: 'I write technical blogs on JavaScript, React, and backend concepts to simplify learning for others.' },
    { title: 'Open Source', icon: '🌍', description: 'I contribute to open-source projects, fix bugs, write documentation, and collaborate with global devs.' },
    { title: 'Public Speaking', icon: '🎤', description: 'I’ve spoken at local tech meetups about web development, accessibility, and career tips in tech.' },
    { title: 'Content Creation', icon: '📹', description: 'I create video tutorials and share tips on web development through YouTube and Instagram.' }
];

const Activities = () => {
    const certificates = [
        {
            name: 'DSA Certification',
            date: '2023-08-01',
            certificate: 'C:\Users\DELL\OneDrive\Desktop\MIne\mineportfolio\src\assets\postman fundaments student experts.pdf',
            description: 'I vae',
            company: "Di"
        },
        {
            name: 'Full Stack Developer',
            date: '2023-09-15',
            certificate: internshipCertificate,
            description: 'I vae',
            company: "Coding Block"
        },
        {
            name: 'Full Stack Developer',
            date: '2023-10-10',
            certificate: internshipCertificateZidio,
            description: 'I vae',
            company: "Zidio Developments"
        },
        {
            name: 'Cloud & DevOps',
            date: '2023-11-20',
            certificate: 'https://via.placeholder.com/600x400',
            description: 'I vae',
            company: "Di"
        }
    ];

    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <div className="activities-container">
            {/* Certifications Section */}
            <div className="certifications-container">
                <h2 className="certifications-title">My Certifications</h2>
                <div className="certifications-grid">
                    {certificates.map((cert, index) => (
                        <div className="certificate-card" key={index}>
                            <img
                                src={cert.certificate}
                                alt={cert.name}
                                className="certificate-image"
                            />
                            <h3>{cert.name}</h3>
                            <p>Date: {cert.date}</p>
                            <button
                                className="certificate-link"
                                onClick={() => setSelectedCert(cert)}
                            >
                                View Certificate
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <h1 className="activities-title">Other Activities</h1>
            <p className="activities-subtitle">
                Here are some of the other things I’m involved with outside of coding!
            </p>


            {/* Activities Section */}
            <div className="activities-grid">
                {activities.map((activity, index) => (
                    <div className="activity-card" key={index}>
                        <div className="activity-icon">{activity.icon}</div>
                        <h3>{activity.title}</h3>
                        <p>{activity.description}</p>
                    </div>
                ))}
            </div>



            {/* Modal Popup */}
            {selectedCert && (
                <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className="modal-close" onClick={() => setSelectedCert(null)}>
                            &times;
                        </span>
                        <h2>{selectedCert.name}</h2>
                        <img
                            src={selectedCert.certificate}
                            alt={selectedCert.name}
                            className="modal-image"
                        />
                        <p>Date: {selectedCert.date}</p>
                        <p>{selectedCert.description}</p>
                        <p>Provided By:{selectedCert.company}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Activities;
