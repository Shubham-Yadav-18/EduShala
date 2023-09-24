import React from 'react';
import { Link } from 'react-router-dom';
import './Headers.css'; // Import your CSS file

const Headers = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">EduShala</Link>
      </div>
      <div className="social-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </header>
  );
};

export default Headers;
