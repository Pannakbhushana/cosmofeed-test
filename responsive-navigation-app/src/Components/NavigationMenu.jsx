import React, { useState } from 'react';
import './NavigationMenu.css';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navigation-menu ${isMenuOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/auth">Auth</Link></li>

      </ul>
    </div>
  );
};

export default NavigationMenu;