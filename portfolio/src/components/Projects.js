import React from 'react';
import resume from '../assets/Resume - Sebastian Flinck Lindström.pdf'

function Projects() {
  return (
    <section className="Projects-section">
      <h2>My Projects</h2>
      <p>Insert your text here...</p>
      <a href={resume} download>
        Download Resume
        </a>
    </section>
  );
}

export default Projects;