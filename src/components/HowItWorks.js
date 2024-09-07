import React from 'react';
import '../App.css';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <h3><span>1</span> Idea Development</h3>
          <p>Think about what you want to write about. It could be your journey as a coder or a guide to learning something specific in coding.</p>
        </div>
        <div className="step">
          <h3><span>2</span> Write Your Book</h3>
          <p>Start writing your content. Keep it engaging and easy to understand.</p>
        </div>
        <div className="step">
          <h3><span>3</span> Design Your Book</h3>
          <p>Add images, code examples, and anything else that makes your book more interesting.</p>
        </div>
        <div className="step">
          <h3><span>4</span> Clone the Repository</h3>
          <p>Clone the repository and include the repository link.</p>
        </div>
        <div className="step">
          <h3><span>5</span> Submit Your Book</h3>
          <p>Add your book (PDF) and include the cover, your author name, and your Slack username on Hack Club Slack.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
