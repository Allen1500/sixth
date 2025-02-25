import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import Home from './settings/Home.jsx';
import About from './settings/About.jsx';
import Contact from './settings/Contact.jsx';
import Skills from './settings/Skills.jsx';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Logo1 from './assets/Logo1.png';
import './App.css';

function App() {
  return (
    <Router>
      <div className="appContainer">
        <img className="logo" src={Logo1} alt="skyVision" />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/header" element={<Header />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;