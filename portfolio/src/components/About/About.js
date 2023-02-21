import React from 'react';
import './About.css';


function About() {
    return (
      <div className="App-about-parent" >
        <section id="about" className="App-about">
          <div className="App-about-left">
            <h2>About Me</h2>
            <p>Insert some text here about yourself, your skills, and your experience. This can be a brief overview of your background or a more detailed description of your professional journey.</p>
          </div>
          <div className="App-about-right">
            <img src="insert image source here" alt="Insert image description here" />
          </div>
        </section>
      </div>
        
      );
}

export default About;