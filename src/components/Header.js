import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-coffee fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-coffee me-2"></i>
          31 by Gentry Timepieces
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/')}`} 
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-home me-1"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/about')}`} 
                to="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-info-circle me-1"></i>About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/menu')}`} 
                to="/menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-utensils me-1"></i>Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/gallery')}`} 
                to="/gallery"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-images me-1"></i>Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/contact')}`} 
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-envelope me-1"></i>Contact
              </Link>
            </li>
          </ul>
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <button 
                className="btn btn-outline-light position-relative"
                onClick={() => setIsCartOpen(true)}
              >
                <i className="fas fa-shopping-cart me-1"></i>
                Cart
                {getTotalItems() > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
