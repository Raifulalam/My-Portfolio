// src/components/Activities.js
import React from 'react';
import '../styles/Activities.css';

const activities = [
    {
        title: 'Mentorship',
        icon: '🎓',
        description: 'I enjoy mentoring junior developers, helping them grow through code reviews, portfolio guidance, and career tips.'
    },
    {
        title: 'Technical Blogging',
        icon: '📝',
        description: 'I write technical blogs on JavaScript, React, and backend concepts to simplify learning for others.'
    },
    {
        title: 'Open Source',
        icon: '🌍',
        description: 'I contribute to open-source projects, fix bugs, write documentation, and collaborate with global devs.'
    },
    {
        title: 'Public Speaking',
        icon: '🎤',
        description: 'I’ve spoken at local tech meetups about web development, accessibility, and career tips in tech.'
    },
    {
        title: 'Content Creation',
        icon: '📹',
        description: 'I create video tutorials and share tips on web development through YouTube and Instagram.'
    }
];

const Activities = () => {
    return (
        <div className="activities-container">
            <h1 className="activities-title">Other Activities</h1>
            <p className="activities-subtitle">
                Here are some of the other things I’m involved with outside of coding!
            </p>

            <div className="activities-grid">
                {activities.map((activity, index) => (
                    <div className="activity-card" key={index}>
                        <div className="activity-icon">{activity.icon}</div>
                        <h3>{activity.title}</h3>
                        <p>{activity.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Activities;
