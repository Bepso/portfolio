import React from 'react';
import './Project.css';
import githubLogo from '../../../assets/project-images/GitHub.png'

function Project(props) {
  const { title, description, githubLink, imageSrc } = props;
  return (
    <div className="project-container">
        <div className='project-description'>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="github-logo"/>
            </a>
        </div>
      <img src={imageSrc} alt={description} className="project-image"/>
    </div>
  );
}

export default Project;
