import React from 'react';
import './About.css';
import profileImg from '../../assets/profileImg.jpeg'
import resume from '../../assets/Resume-Sebastian_Flinck_Lindstrom.pdf'

function About() {
    return (
      <div className="App-about-parent" >
        <section id="about" className="App-about">
          <div className="App-about-left">
            <h2>About Me</h2>
            <p>Hi, I'm Sebastian Flinck Lindström, a Software Engineer with a passion for developing robust and scalable system that power seamless user experiences. I'm a lifelong learner and enjoy exploring new technologies to stay up-to-date with the ever-changing industry.<br/><br/>
  When I'm not coding, you can find me climbing, gaming, and reading up on the latest tech trends. I believe in taking a holistic approach to work and life, and strive to find balance in everything I do.<br/><br/>
  If you're interested in working together or just want to chat, feel free to reach out via the contact form below. I'd love to connect and hear about you and what you do.</p>
          </div>
          <div className="App-about-right">
            <img src={profileImg} alt="" className="profile-pic"/>
            <a href={resume} download className='download-button'>
            Download Resume
            </a>
          </div>
        </section>
      </div>
        
      );
}

export default About;