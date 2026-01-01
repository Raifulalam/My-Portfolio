// src/components/Bot.js
import React, { useState } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";
import "./bot.css";

const Bot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi! I’m Raiful’s assistant. Ask me anything." },
    ]);
    const [input, setInput] = useState("");

    const toggleBot = () => setIsOpen(!isOpen);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = { sender: "user", text: input };
        setMessages([...messages, userMsg]);

        // Simple bot replies
        let botReply = "Sorry, I didn't understand that.";
        const text = input.toLowerCase();

        if (text.includes("project")) botReply = "You can check out my projects section!";
        else if (text.includes("skills")) botReply = "I specialize in Full-Stack development: React, Node.js, MongoDB, etc.";
        else if (text.includes("contact")) botReply = "You can email me at raifulalam0123@gmail.com";
        else if (text.includes("hello") || text.includes("hi")) botReply = "Hello! How can I help you today?";

        setMessages([...messages, userMsg, { sender: "bot", text: botReply }]);
        setInput("");
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") handleSend();
    };

    return (
        <div className="bot-wrapper">
            {isOpen && (
                <div className="bot-window">
                    <div className="bot-header">
                        <span>Raiful Bot</span>
                        <FaTimes className="close-btn" onClick={toggleBot} />
                    </div>
                    <div className="bot-messages">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`bot-message ${msg.sender === "bot" ? "bot" : "user"}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="bot-input">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                        <button onClick={handleSend}>Send</button>
                    </div>
                </div>
            )}

            <button className="bot-toggle" onClick={toggleBot}>
                <FaRobot size={24} />
            </button>
        </div>
    );
};

export default Bot;
