// WelcomePage.jsx

import React from 'react';
import './WelcomePage.css';

const WelcomePage = ({ onNext }) => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-heading">Discover the Power of GIS</h1>
      <p className="welcome-text">
        Dive into the world of maps and unlock the potential of GIS features.
      </p>
      <button className="continue-button" onClick={onNext}>
        Continue
      </button>
      <div className="animation-container">
        <div className="bouncing-ball"></div>
      </div>
    </div>
  );
};

export default WelcomePage;
