import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2024 HackPages. All rights reserved.</p>
        <a href="https://github.com/yourusername" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
