import React from 'react';
import '../App.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1>Welcome To <span>HackPages</span></h1>
      <p>Share your coding journey or teach others by submitting your book. Let's inspire the next generation of developers.</p>
      <br/>
      <br/>
      <a href="#how-it-works" className="cta-button">Start Your Journey</a>
    </section>
  );
};

export default HeroSection;
