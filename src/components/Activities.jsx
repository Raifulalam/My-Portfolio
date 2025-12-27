import React, { useState, useEffect, useRef } from "react";
import "../styles/Activities.css";

/* ===== Assets ===== */
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

/* ===== Data ===== */
const certificates = [
    {
        name: "Full Stack Developer Internship",
        date: "Sep 2023",
        company: "Coding Blocks",
        certificate: internshipCertificate,
        description: "MERN stack based full stack development internship."
    },
    {
        name: "Full Stack Developer Internship",
        date: "Oct 2023",
        company: "Zidio Developments",
        certificate: internshipCertificateZidio,
        description: "Worked on real-world full stack applications."
    },
    {
        name: "Git & GitHub",
        date: "Nov 2023",
        company: "GitHub",
        certificate: Git,
        description: "Version control & collaboration using Git."
    },
    {
        name: "Postman API Fundamentals",
        date: "Dec 2023",
        company: "Postman",
        certificate: Postman,
        description: "API testing, collections & environments."
    },
    {
        name: "NPTEL Star Certification",
        date: "Jan 2024",
        company: "NPTEL",
        certificate: NPTEL,
        description: "Top performer in NPTEL courses."
    }
];

const AUTO_PLAY_INTERVAL = 4000;

/* ===== Component ===== */
export default function Activities() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);
    const intervalRef = useRef(null);

    /* ===== Auto Play ===== */
    useEffect(() => {
        if (!paused) {
            intervalRef.current = setInterval(() => {
                setIndex((prev) => (prev + 1) % certificates.length);
            }, AUTO_PLAY_INTERVAL);
        }
        return () => clearInterval(intervalRef.current);
    }, [paused]);

    /* ===== Keyboard Support ===== */
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "ArrowRight")
                setIndex((i) => (i + 1) % certificates.length);
            if (e.key === "ArrowLeft")
                setIndex((i) =>
                    i === 0 ? certificates.length - 1 : i - 1
                );
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    return (
        <div className="activities-container">
            <h2 className="certifications-title">Certifications</h2>

            {/* ===== Slider ===== */}
            <div
                className="carousel"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <button
                    className="nav prev"
                    onClick={() =>
                        setIndex(index === 0 ? certificates.length - 1 : index - 1)
                    }
                >
                    ❮
                </button>

                <div
                    className="carousel"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <button
                        className="nav prev"
                        onClick={() =>
                            setIndex(index === 0 ? certificates.length - 1 : index - 1)
                        }
                    >
                        ❮
                    </button>

                    <div
                        className="carousel-track"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {certificates.map((cert, i) => (
                            <div className="slide" key={i}>
                                <img src={cert.certificate} alt={cert.name} />
                                <h3>{cert.name}</h3>
                                <p>{cert.company}</p>
                                <span>{cert.date}</span>
                                <button onClick={() => setSelectedCert(cert)}>
                                    View Certificate
                                </button>
                            </div>
                        ))}
                    </div>

                    <button
                        className="nav next"
                        onClick={() =>
                            setIndex((index + 1) % certificates.length)
                        }
                    >
                        ❯
                    </button>
                </div>


                <button
                    className="nav next"
                    onClick={() =>
                        setIndex((index + 1) % certificates.length)
                    }
                >
                    ❯
                </button>
            </div>

            {/* ===== Dots ===== */}
            <div className="dots">
                {certificates.map((_, i) => (
                    <span
                        key={i}
                        className={i === index ? "dot active" : "dot"}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>

            {/* ===== Modal ===== */}
            {selectedCert && (
                <div
                    className="modal-overlay"
                    onClick={() => setSelectedCert(null)}
                >
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span
                            className="modal-close"
                            onClick={() => setSelectedCert(null)}
                        >
                            &times;
                        </span>
                        <h2>{selectedCert.name}</h2>
                        <img src={selectedCert.certificate} alt="" />
                        <p>{selectedCert.description}</p>
                        <p>
                            <strong>{selectedCert.company}</strong> ·{" "}
                            {selectedCert.date}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
