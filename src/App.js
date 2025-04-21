import React from 'react';
import './App.css'; // This imports the CSS to style your page

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Replace this with your name and intro */}
        <h1>Welcome to Abdulwahab Alsager's Portfolio</h1>
        <p>
          Hi, I'm Abdulwahab! I'm a Software Engineer with a passion for problem-solving and creating user-centric applications. This site is part of my path to continue learning, expanding my skills, and showcasing some of my interests and projects. I hope you find value in it. Thank you for visiting!
        </p>
        <p>
          Explore my work, including projects in React, Python, SQL, Tableau, and more!
        </p>
        <a
          className="App-link"
          href="https://github.com/aalsager"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
