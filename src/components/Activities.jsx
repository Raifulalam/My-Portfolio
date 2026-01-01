import React, { useState, useEffect, useRef } from "react";
import "../styles/Activities.css";

/* ===== Import All Certificates ===== */
import internshipCertificate from "../assets/certificate intern.jpg";
import internshipCertificateZidio from "../assets/zidio.jpg";
import EB from "../assets/EB.png";
import EEASS from "../assets/EEASS.png";
import Git from "../assets/Git.png";
import Leadership from "../assets/Leadership.png";
import MIS from "../assets/MIS.png";
import NPTEL from "../assets/NPTEL STAR CERTIFICATE.jpg";
import OB from "../assets/OB.png";
import Postman from "../assets/Postman.png";
import R from "../assets/R.png";
import SE from "../assets/SE.png";

/* ===== Certificates Data ===== */
const certificates = [
    { name: "Full Stack Internship", date: "Sep 2023", company: "Coding Blocks", certificate: internshipCertificate, description: "MERN stack full stack development internship." },
    { name: "Full Stack Internship", date: "Oct 2023", company: "Zidio Developments", certificate: internshipCertificateZidio, description: "Worked on real-world full stack apps." },
    { name: "Git & GitHub", date: "Nov 2023", company: "GitHub", certificate: Git, description: "Version control & collaboration using Git." },
    { name: "Postman API Fundamentals", date: "Dec 2023", company: "Postman", certificate: Postman, description: "API testing, collections & environments." },
    { name: "NPTEL Star Certification", date: "Jan 2024", company: "NPTEL", certificate: NPTEL, description: "Top performer in NPTEL courses." },
    { name: "EB Certificate", date: "Feb 2024", company: "EB", certificate: EB, description: "Extra learning certificate." },
    { name: "EEASS Certificate", date: "Mar 2024", company: "EEASS", certificate: EEASS, description: "Completed EEASS training." },
    { name: "Leadership Training", date: "Apr 2024", company: "Leadership Academy", certificate: Leadership, description: "Leadership and team management skills." },
    { name: "MIS Certificate", date: "May 2024", company: "MIS Academy", certificate: MIS, description: "Management Information Systems expertise." },
    { name: "OB Certificate", date: "Jun 2024", company: "OB Institute", certificate: OB, description: "Organizational Behavior knowledge." },
    { name: "R Programming", date: "Jul 2024", company: "R Institute", certificate: R, description: "Data analysis using R programming." },
    { name: "Software Engineering", date: "Aug 2024", company: "SE Institute", certificate: SE, description: "Software Engineering fundamentals." }
];

export default function Activities() {
    const [selectedCert, setSelectedCert] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const scrollRef = useRef(null);
    const cardWidth = 240; // width of each certificate card including margin

    /* ===== Auto Scroll ===== */
    useEffect(() => {
        if (!paused) {
            const interval = setInterval(() => {
                setCurrentIndex(prev => (prev + 1) % certificates.length);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [paused]);

    /* ===== Scroll to Current Index ===== */
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                left: currentIndex * cardWidth,
                behavior: "smooth"
            });
        }
    }, [currentIndex]);

    /* ===== Handle Manual Scroll ===== */
    const handleDotClick = (index) => setCurrentIndex(index);

    return (
        <div className="activities-container">
            <h2 className="certifications-title">Certifications & Achievements</h2>

            <div
                className="certificates-carousel"
                ref={scrollRef}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {certificates.map((cert, i) => (
                    <div
                        key={i}
                        className={`certificate-card ${i === currentIndex ? "active-card" : ""}`}
                        onClick={() => setSelectedCert(cert)}
                    >
                        <div className="card-inner">
                            <img src={cert.certificate} alt={cert.name} />
                            <div className="certificate-info">
                                <h3>{cert.name}</h3>
                                <p>{cert.company}</p>
                                <span>{cert.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ===== Dots Navigation ===== */}
            <div className="dots">
                {certificates.map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${i === currentIndex ? "active-dot" : ""}`}
                        onClick={() => handleDotClick(i)}
                    />
                ))}
            </div>

            {/* ===== Modal ===== */}
            {selectedCert && (
                <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span className="modal-close" onClick={() => setSelectedCert(null)}>&times;</span>
                        <h2>{selectedCert.name}</h2>
                        <img src={selectedCert.certificate} alt={selectedCert.name} />
                        <p>{selectedCert.description}</p>
                        <p><strong>{selectedCert.company}</strong> · {selectedCert.date}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
