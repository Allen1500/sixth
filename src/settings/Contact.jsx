import React from 'react';
import contImage from '../assets/cont.png';
import fiverrImage from '../assets/fiverr.png';
import gitImage from '../assets/git.png';
import linkImage from '../assets/link.png';
import googleImage from '../assets/google.png';
import './Contact.css';

function Contact() {
  return (
    <div className="contactPage">
      <img className="mainContactImage" src={contImage} alt="Contact" />
      <h2>Contact</h2>
      <main>
        <div className="contactItem">
          <div className="contactBox blueBorder">
            <img src={fiverrImage} alt="Fiverr" className="contactIcon" />
            <a href="https://www.fiverr.com/allen217602" target="_blank" rel="noopener noreferrer" className="glowingLink">Fiverr</a>
            <span className="clickToEnter">Click link to enter</span>
          </div>
        </div>
        <div className="contactItem">
          <div className="contactBox purpleBorder blueShadow">
            <img src={gitImage} alt="GitHub" className="contactIcon" />
            <a href="https://github.com/Allen1500" target="_blank" rel="noopener noreferrer" className="glowingLink">GitHub</a>
            <span className="clickToEnter">Click link to enter</span>
          </div>
        </div>
        <div className="contactItem">
          <div className="contactBox blueBorder">
            <img src={linkImage} alt="LinkedIn" className="contactIcon" />
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="glowingLink">LinkedIn</a>
            <span className="clickToEnter">Click link to enter</span>
          </div>
        </div>
        <div className="contactItem">
          <div className="contactBox purpleBorder blueShadow">
            <img src={googleImage} alt="Google" className="contactIcon" />
            <a href="mailto:allenbook96@google.com" target="_blank" rel="noopener noreferrer" className="glowingLink">Google</a>
            <span className="clickToEnter">Click link to enter</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;