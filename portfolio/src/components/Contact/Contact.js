import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';

import './Contact.css';

function Contact() {
  return (
    <div className='App-contact-parent'>
      <section id="contact" className="App-contact">
        <h2>Contact Me</h2>
        <p>Feel free to contact me using the information below:</p>
        <ul>
          <li><FontAwesomeIcon icon={faEnvelope} /> sebastianflincklindstrom@gmail.com</li>
          <li><FontAwesomeIcon icon={faPhone} /> (+46) 70-753 80 12</li>
        </ul>
        <div className='App-contact-icons'>
        <a href="https://www.linkedin.com/in/sebastian-flinck-lindstr%C3%B6m-a28b80198">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/bepso">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="mailto:sebastianflincklindstrom@gmail.com">
            <i className="far fa-envelope fa-2x"></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;

