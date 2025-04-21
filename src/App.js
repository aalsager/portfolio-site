import React from 'react';
import './App.css';
import profileImage from './Assets/ProfileImage.jpg'; // Ensure this path matches your image location

function App() {
  return (
    <div className="intro-container">
      <div className="intro-image">
        <img src={profileImage} alt="Your Name" />
      </div>
      <div className="intro-text">
        <h1>Software Engineer, Data Enthusiast</h1>
        <p>
        Hi, I'm Abdulwahab! I'm a Software Engineer with a passion for problem-solving, creating user-centric applications, and utilizing data to obtain actionable insights. This site is part of my path to continue learning, expanding my skills, and showcasing some of my interests and projects. I hope you find value in it. Thank you for visiting!
        </p>
      </div>
    </div>
  );
}

export default App;
