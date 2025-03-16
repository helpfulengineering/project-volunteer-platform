import React from 'react';
import './Header.css';
import helpfulIcon from '../assets/helpful_icon.png';

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <nav className="header-nav">
        <div className="nav-links">
          <img src={helpfulIcon} alt="Helpful Icon" className="helpful-icon" />
          <a href="#about">About</a>
          <a href="#partners">Partners</a>
          <a href="#research">Research</a>
          <a href="#events">Events</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;