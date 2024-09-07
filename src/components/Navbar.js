import React from 'react';
import '../App.css';
import logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="HackPages Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/#how-it-works">How It Works</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
