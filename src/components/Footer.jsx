import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagramSquare, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">

                <p>Crafting code with passion — MERN Stack Developer</p>

                <div className="footer-social">
                    <a href="https://github.com/Raifulalam" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/Raifulalam" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noopener noreferrer">
                        <FaInstagramSquare size={24} />
                    </a>
                    <a href="https://linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={24} />
                    </a>
                    <a href="mailto:raifulalam0123@gmail.com">
                        <FaEnvelope size={24} />
                    </a>

                </div>

            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Mohammed Raiful Alam. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
