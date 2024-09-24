import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import '../App.css';
import logoImage from '../images/BRANDSPARK.png'; 

export default function Headersection() {
  // State and function definitions
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current path

  // Toggle the menu state and apply the change class
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the state
  };

  // Function to check if the current link is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Header for larger screens */}
      <div className="header sec_bgcolor displayflex">
        <div className="left_header w20 ml40px pt10px mid_color">
          <img 
            src={logoImage} 
            alt="BrandSpark Logo" 
            width="100%" 
            aria-label="BrandSpark Logo" 
            loading="lazy" 
          />
        </div>
        <div className="right_header w80">
          <ul className="menu">
            <li>
              <Link 
                to="/home" 
                aria-label="Navigate to Home" 
                className={isActive('/home') ? 'active-link' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                aria-label="Navigate to Blog" 
                className={isActive('/blog') ? 'active-link' : ''}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                aria-label="Navigate to Services" 
                className={isActive('/services') ? 'active-link' : ''}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/aboutus" 
                aria-label="Navigate to About Us" 
                className={isActive('/aboutus') ? 'active-link' : ''}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/contactus" 
                aria-label="Navigate to Contact Us" 
                className={isActive('/contactus') ? 'active-link' : ''}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Hamburger Menu for smaller screens */}
      <div className="hamburger sec_bgcolor">
        <div className="left_header mid_color">
          <img 
            src={logoImage} 
            alt="BrandSpark Logo" 
            width="50%" 
            aria-label="BrandSpark Logo"
            loading="lazy" 
          />
        </div>
        <div className="right_header">
          <div className={`container ${isMenuOpen ? 'change' : ''}`} onClick={toggleMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div id="mn" style={{ display: isMenuOpen ? 'grid' : 'none', transition: '0.4s' }}>
            <ul className="menu">
              <li>
                <Link to="/home" className={isActive('/home') ? 'active-link' : ''}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className={isActive('/blog') ? 'active-link' : ''}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/services" className={isActive('/services') ? 'active-link' : ''}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className={isActive('/aboutus') ? 'active-link' : ''}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contactus" className={isActive('/contactus') ? 'active-link' : ''}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
