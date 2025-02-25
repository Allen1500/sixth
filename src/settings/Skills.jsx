import React, { useState } from 'react';
import skillsPage from '../assets/skillsPage.png';
import canva from '../assets/canva.png';
import figma from '../assets/figma.png';
import htmlCssJs from '../assets/htmlCssJs.png';
import reactImg from '../assets/react.png';
import Logo1 from '../assets/Logo1.png';
import homePageImage from '../assets/homePage.png';
import './Skills.css';
// The Skills function is a React functional component keep that in mind because i can do crazy shit wit it.
// useState is used to manage the state of the selected skills so i can use this for more than selecting stuff null or not.
function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
// skillExamples is an object that maps skill names to HTML strings so when I put the example code this is what made it show I sucked because I had to use html for it to show there has to be a better way.
// I will change this to use actual components instead of HTML strings so it looks a little cleaner and i can change it faster.
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
// Inside skillsContainer there is the skillItem divs each with a image and a button
// When a button is clicked setSelectedSkill is called to update the selectedSkill statewith the name set that was the only way i could get the example to show there has to be a shorter way// If selectedSkill is not null a skillExample div is shown with the example code using dangerouslySetInnerHTML thats my first time using that so i need hella more practice 
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