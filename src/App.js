import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Vlogs from './components/Vlogs';
import Resume from './components/Resume';
import About from './components/About';
import Projects from './components/Projects';
import Activities from './components/Activities';
import './styles/GlobalStyles.css';
import 'boxicons/css/boxicons.min.css';
import Home from './components/Home';
import Login from './components/LoginPage';

// Custom Hook to Update Page Title Based on Route
const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/')[1]; // Get the current path after "/"
    const pageTitles = {
      about: "About Me",
      vlogs: "Vlogs",
      resume: "Resume",
      projects: "Projects",
      activities: "Activities",
      home: "Welcome",

    };

    // Set the document title dynamically
    document.title = pageTitles[path] || "Welcome";
  }, [location]);
};

function App() {
  return (
    <Router>
      <div className="App">
        {/* Sidebar Component */}
        <Sidebar />

        {/* Home Section (Hero) */}
        <Home />

        <div className="content">
          {/* Now calling the custom hook inside Router */}
          <PageTitleHandler />

          {/* Routing content */}
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/vlogs" element={<Vlogs />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// This component calls the custom hook inside Router context
const PageTitleHandler = () => {
  usePageTitle(); // Correct placement of the custom hook
  return null;
};

export default App;
