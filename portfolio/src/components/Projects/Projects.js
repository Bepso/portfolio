import React from 'react';
import './Projects.css'
import Project from './Project/Project';
import project1Image from '../../assets/project-images/spellcheck.png'

function Projects() {
  return (
    <div className='App-projects-parent'>
      <section id="projects"className="App-projects">
        <h2>My Projects</h2>
        <Project
          title="Spellchecker"
          description="This spellchecker project is a simple web application that allows a user to enter a piece of text into a text area, which then checks the spelling of the text and highlights any spelling mistakes, the user can then correct the mistakes. The application is built using React and a Java Springboot backend which makes use of the JLanguageTool."
          githubLink="https://github.com/Bepso/SpellChecker"
          imageSrc={project1Image}
        />
      </section>
    </div>
    
  );
}

export default Projects;