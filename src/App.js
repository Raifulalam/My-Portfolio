// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Vlogs from './components/Vlogs';
import Resume from './components/Resume';
import About from './components/About';
import Projects from './components/Projects';
import Activities from './components/Activities';
import './styles/GlobalStyles.css';
import 'boxicons/css/boxicons.min.css';
import profileImage from './assets/hero-bg.jpg';
import HeroImage from './assets/Mohammed_Raiful.png'
import Header from './components/Header';
function App() {
  return (
    <Router>
      <div className="App">
        {/* Sidebar is always visible */}
        <Sidebar />
        <Header />
        <div className="content">
          {/* Profile Image Section */}





          {/* Routing content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vlogs" element={<Vlogs />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/activities" element={<Activities />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
