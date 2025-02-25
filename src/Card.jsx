import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ route, title, description, image, backgroundStyle, buttonStyle }) {
  const navigate = useNavigate();

  return (
    <div className="card1" style={backgroundStyle}>
      <img className="card-image1" src={image} alt={title} />
      <h3 className='card1name'>{title}</h3>
      <p className='card1info'>{description}</p>
      <button style={buttonStyle} onClick={() => navigate(route)}>Learn More</button>
    </div>
  );
}

export default Card;