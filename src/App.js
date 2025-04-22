import React, { useState } from 'react';
import './App.css';
import ProfileImage from './Assets/ProfileImage.jpg';
import { FaGithub, FaLinkedin, FaSun, FaMoon, FaXTwitter } from 'react-icons/fa6';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Toggle Button in Top-Right */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    <div className="intro-container">
      <div className="intro-image">
        <img src={ProfileImage} alt="Abdulwahab Alsager" className="profile-pic" />
      </div>
      <div className="intro-text">
        <h1>Software Engineer, Data Enthusiast</h1>
        <p>
          Hi, I'm Abdulwahab! I'm a Software Engineer with a passion for problem-solving, creating user-centric applications, and utilizing data to obtain actionable insights. This site is part of my path to continue learning, expanding my skills, and showcasing some of my interests and projects. I hope you find value in it. Thank you for visiting!
        </p>
        Feel free to visit my GitHub or check out one of my socials!
        <p></p>
        <div className="social-icons">
          <a href="https://github.com/aalsager" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/al-alsager-5678b4279/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://x.com/Abdulwahab6132" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
        </div>
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            I'm a Computer Science graduate from CU Denver with a passion for software development, data analysis, and building user-friendly applications. I have experience with Python, JavaScript, SQL, and tools like Tableau, Power BI, and Git. I've also worked as an analyst in finance and quality assurance roles, and I’m now focused on web development and the Software Development Lifecycle (SDLC).
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
