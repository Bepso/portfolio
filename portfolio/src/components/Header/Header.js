import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <div className="App-header-left">
        <a>Sebastian Flinck Lindström</a>
      </div>
      <div className="App-header-middle">
        <h1>I am Sebastian</h1>
        <p>I am a passionate Software Engineer with a keen interest in building robust and scalable applications. Take a look at my portfolio below to see some of my recent work.</p>
      </div>
      <div className="App-header-right">
        <Link to="about" spy={true} smooth={true} duration={500}>About</Link>
        <Link to="projects" spy={true} smooth={true} duration={500}>Projects</Link>
        <Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
      </div>
    </header>
  );
}

export default Header;