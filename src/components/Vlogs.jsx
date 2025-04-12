import React, { useState, useEffect } from 'react';
import axios from 'axios';


import '../styles/Vlogs.css';

const Vlogs = () => {
    const [vlogs, setVlogs] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ type: 'quote', content: '' });
    const [activeType, setActiveType] = useState('quote');



    useEffect(() => {
        axios.get('http://localhost:5000/api/vlogs/vlogs')
            .then((res) => setVlogs(res.data))
            .catch((err) => console.error("Error fetching vlogs:", err));
    }, []);


    const handleAddClick = () => setShowModal(true);

    const handleCloseModal = () => {
        setFormData({ type: 'quote', content: '' });
        setShowModal(false);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, content: e.target.value });
    };

    const handleTypeChange = (e) => {
        setFormData({ ...formData, type: e.target.value, content: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.content.trim()) return;

        let content = formData.content.trim();

        if (formData.type === 'video') {
            const youtubeWatchRegex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/;
            const youtubeShortRegex = /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^\s?&]+)/;

            const watchMatch = content.match(youtubeWatchRegex);
            const shortMatch = content.match(youtubeShortRegex);

            if (watchMatch && watchMatch[1]) {
                content = `https://www.youtube.com/embed/${watchMatch[1]}`;
            } else if (shortMatch && shortMatch[1]) {
                content = `https://www.youtube.com/embed/${shortMatch[1]}`;
            }
        }

        try {
            const res = await axios.post('http://localhost:5000/api/vlogs/vlogs', { ...formData, content });
            setVlogs([res.data, ...vlogs]);
            handleCloseModal();
        } catch (err) {
            console.error('Error posting vlog:', err);
        }
    };

    const renderVlog = (vlog) => {
        switch (vlog.type) {
            case 'quote':
                return <p className="quote">“{vlog.content}”</p>;
            case 'link':
                return <a href={vlog.content} target="_blank" rel="noopener noreferrer">{vlog.content}</a>;
            case 'video':
                return <iframe title="vlog-video" width="100%" height="200" src={vlog.content} allowFullScreen />;
            default:
                return null;
        }
    };

    const filteredVlogs = vlogs.filter(vlog => vlog.type === activeType);

    return (
        <div className="vlogs-container">
            <div className="vlogs-header">
                <h1>My Vlogs</h1>
                <p>Share your thoughts, quotes, links, or videos!</p>
                <button className="add-btn" onClick={handleAddClick}>+</button>
            </div>

            <div className='buttons-container'>
                <button className={`vlog-btn ${activeType === 'quote' ? 'active' : ''}`} onClick={() => setActiveType('quote')}>Quotes</button>
                <button className={`vlog-btn ${activeType === 'link' ? 'active' : ''}`} onClick={() => setActiveType('link')}>Links</button>
                <button className={`vlog-btn ${activeType === 'video' ? 'active' : ''}`} onClick={() => setActiveType('video')}>Videos</button>
            </div>

            <div className="vlog-list">
                {filteredVlogs.length > 0 ? (
                    filteredVlogs.map((vlog) => (
                        <div className="vlog-card" key={vlog._id}>
                            <div className="vlog-type">{vlog.type.toUpperCase()}</div>
                            <div className="vlog-content">{renderVlog(vlog)}</div>
                        </div>
                    ))
                ) : (
                    <p className="no-vlogs">No {activeType}s posted yet.</p>
                )}
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Add a New Vlog</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Type:</label>
                            <select value={formData.type} onChange={handleTypeChange}>
                                <option value="quote">Quote</option>
                                <option value="link">Link</option>
                                <option value="video">YouTube Video URL</option>
                            </select>

                            <label>Content:</label>
                            <textarea
                                placeholder={
                                    formData.type === 'quote' ? 'Write your quote here...' :
                                        formData.type === 'link' ? 'Paste your link here...' :
                                            'Paste a YouTube link'
                                }
                                value={formData.content}
                                onChange={handleInputChange}
                            />

                            <div className="modal-actions">
                                <button type="submit">Post</button>
                                <button type="button" onClick={handleCloseModal}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Vlogs;
