import React, { useState } from 'react';
import skillsPage from '../assets/skillsPage.png';
import canva from '../assets/canva.png';
import figma from '../assets/figma.png';
import htmlCssJs from '../assets/htmlCssJs.png';
import reactImg from '../assets/react.png';
import Logo1 from '../assets/Logo1.png';
import homePageImage from '../assets/homePage.png';
import './Skills.css';

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillExamples = {
    canva: `<div class="exampleBox"><img src="${Logo1}" alt="Logo1" class="exampleImage" /></div>`,
    figma: `<div class="exampleBox"><img src="${homePageImage}" alt="HomePage" class="exampleImage" /></div>`,
    htmlCssJs: `<div class="exampleBox"><pre>{\`
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navBar">
      <ul className="navList">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
\`}</pre></div>`,
    react: `<div class="exampleBox"><pre>{\`
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo1 from './assets/Logo1.png';

function Card({ route, title, description }) {
  const navigate = useNavigate();

  return (
    <div className="card1">
      <img className="card-image1" src={Logo1} alt="skyVision" />
      <h3 className='card1name'>{title}</h3>
      <p className='card1info'>{description}</p>
      <button onClick={() => navigate(route)}>Learn More</button>
    </div>
  );
}

export default Card;
\`}</pre></div>`,
  };

  return (
    <div className="skillsPage">
      <img className="skillsImage" src={skillsPage} alt="Skills" />
      <h2>Skills</h2>
      <main>
        <p>Skills will be right here with images.</p>
        <div className="skillsContainer">
          <div className="skillItem">
            <img src={canva} alt="Canva" />
            <button onClick={() => setSelectedSkill('canva')}>Open</button>
          </div>
          <div className="skillItem">
            <img src={figma} alt="Figma" />
            <button onClick={() => setSelectedSkill('figma')}>Open</button>
          </div>
          <div className="skillItem">
            <img src={htmlCssJs} alt="HTML, CSS, JS" />
            <button onClick={() => setSelectedSkill('htmlCssJs')}>Open</button>
          </div>
          <div className="skillItem">
            <img src={reactImg} alt="React" />
            <button onClick={() => setSelectedSkill('react')}>Open</button>
          </div>
        </div>
        {selectedSkill && (
          <div className="skillExample">
            <h3>Example Code:</h3>
            <div dangerouslySetInnerHTML={{ __html: skillExamples[selectedSkill] }}></div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Skills;