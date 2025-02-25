import React from 'react';
import logo3 from './assets/logo3.png';
import './Header.css';

function Header() {
  return (
    <div className="headerPage">
      <img className="headerImage" src={logo3} alt="Header" />
      <h1>sky vision</h1>
    </div>
  );
}

export default Header;