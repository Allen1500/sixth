import React from 'react';
import Card from '../Card';
import reach1 from '../assets/reach1.jpg';
import nightsky2 from '../assets/nightsky2.jpg';
import reach3 from '../assets/reach3.jpg';
import homePageImage from '../assets/homePage.png';
import './Home.css';
// i need to fix all styles on this page i need more practice with in line styles its not fitting my vision yet
// i need to add a hover effect to the cards and the buttons
function Home() {
  return (
    <div className="homePage">
      <img className="homeImage" src={homePageImage} alt="Home Page" />
      <div className="cardsContainer">
        <div className="cardWrapper">
          <Card 
            route="/about" 
            title="About Sky Vision" 
            description="Growing up looking up at the sky, my vision was filled with the view of tall buildings and skyscrapers, now the view is of..." 
            image={reach1}
            backgroundStyle={{ background: 'linear-gradient(to bottom, lightgreen, yellowgreen)' }}
            buttonStyle={{ animation: 'flash 1.5s infinite alternate', backgroundColor: 'lightgreen' }}
          />
        </div>
        <div className="cardWrapper">
          <Card 
            route="/contact" 
            title="Contact Me" 
            description="When you look up into the sky if you don't see me you can contact by..." 
            image={nightsky2}
            buttonStyle={{ animation: 'flash 1.5s infinite alternate', backgroundColor: 'yellow' }}
          />
        </div>
        <div className="cardWrapper">
          <Card 
            route="/skills" 
            title="My Skills" 
            description="Unleash the unseen, the vibrant, the bold all your visions light and fire I have the skills to unfold..." 
            image={reach3}
            backgroundStyle={{ background: 'linear-gradient(to bottom, lightblue, lightpink)' }}
            buttonStyle={{ animation: 'flash 1.5s infinite alternate', backgroundColor: 'red' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;