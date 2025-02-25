import React from 'react';
import contImage from '../assets/cont.png';
import './About.css';

function About() {
  return (
    <div className="aboutPage">
      <img className="aboutImage" src={contImage} alt="About" />
      <h2>About</h2>
      <main>
        <div className="aboutContent">
          <p>
            Growing up, my gaze was filled with towering buildings and majestic skyscrapers that defined the skyline. These architectural marvels symbolized human ambition and the power of design. However, the modern view has shifted to the digital realm, where coders craft their visions of what a website should look like.

            The passion for creating visually appealing and user-friendly websites goes beyond mere technical skill. It's about blending artistry and functionality to offer an exceptional digital experience. This shift from physical structures to digital creations highlights the ever-evolving landscape of human innovation.

            Designing a website involves more than just understanding code. It encompasses:

            • A deep appreciation for aesthetics and user experience

            • The ability to merge creativity with technical expertise

            • A commitment to continuous learning and adaptation

            Ultimately, a well-designed website serves as a testament to the creator's passion and dedication. Just as skyscrapers once transformed skylines, modern websites transform the digital landscape, offering users a seamless and enjoyable experience. And that is what I am all about.
          </p>
        </div>
      </main>
    </div>
  );
}

export default About;