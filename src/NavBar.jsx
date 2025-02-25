import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="navBar">
      <ul className="navList">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <button onClick={() => navigate(-1)}>Back</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;