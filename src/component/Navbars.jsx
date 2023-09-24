import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbars.css'; // Import your CSS file

const Navbars = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">EduShala</Link>
        </div>
        <div className={`navbar-items ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/login">Login</Link>
          {/* Add more links as needed */}
        </div>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbars;
