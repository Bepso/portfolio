import React from 'react';

function Header() {
  return (
    <header className="App-header">
      <div className="App-header-left">
        <a>Sebastian Flinck Lindström</a>
      </div>
      <div className="App-header-middle">
        <h1>I am Sebastian</h1>
      </div>
      <div className="App-header-right">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  );
}

export default Header;