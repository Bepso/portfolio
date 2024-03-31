import React from 'react';
import './Project.css';
import githubLogo from '../../../assets/project-images/GitHub.png'

function Project(props) {
  const { title, description, githubLink } = props;
  return (
    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
      <div className="project-container">
        <div className='project-description'>
          <h3>{title}</h3>
          <p className='description-text'>{description}</p>
          <img src={githubLogo} alt="GitHub" className="github-logo"/>
        </div>
      </div>
    </a>
  );
}

export default Project;
