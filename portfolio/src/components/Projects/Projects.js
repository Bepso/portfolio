import React from 'react';
import Project from './Project/Project';
import './Projects.css';

function Projects() {
  return (
    <div className='App-projects-parent'>
      <h2>My Projects</h2>
      <section id="projects"className="App-projects">
        
        <Project
          title="Spellchecker"
          description="This spellchecker project is a simple web application that allows a user to enter a piece of text into a text area, which then checks the spelling of the text and highlights any spelling mistakes, the user can then correct the mistakes. The application is built using React and a Java Springboot backend which makes use of the JLanguageTool."
          githubLink="https://github.com/Bepso/SpellChecker"
        />
        <Project
          title="OpenRTC2"
          description="OpenRTC2 is an open-source implementation of the classic simulation game RollerCoaster Tycoon 2. As a contributor to the project, I have added new features and functionality to enhance the gameplay experience. Through the use of C++, OpenRTC2 allows players to relive the nostalgia of the original game while also offering new opportunities for customization and creativity."
          githubLink="https://github.com/Bepso/OpenRCT2"
        />
        <Project
          title="Portfolio"
          description="This portfolio project was built using React, a popular JavaScript library for building user interfaces. The portfolio includes a homepage, an 'About Me' section, and a 'My Projects' section where users can learn about my coding projects and view my GitHub repositories. The website is responsive and optimized for viewing on both desktop and mobile devices. It also includes custom CSS styling for a visually appealing design. Through this project, I was able to showcase my web development skills and create a professional online presence for myself."
          githubLink="https://github.com/Bepso/portfolio"
        />
      </section>
    </div>
    
  );
}

export default Projects;