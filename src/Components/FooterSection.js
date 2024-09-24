// FooterSection.js
import React from 'react';
import '../App.css'; // Import the CSS file for styling
import imgs from '../images/logo.png';
import { Link } from 'react-router-dom';

function FooterSection() {
  return (
    <footer className="footer">
    
      <div className="footer-container ">
      
        {/* About Section */}
        <div className="footer-section about">
        <img src={imgs}  alt="logo" width={70} className='llogo'/>
          <h2 className="footer-heading">About Us</h2>
          <p>
            We are a dynamic company committed to providing the best services to our clients. Our goal is to innovate
            and excel in everything we do.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="footer-links">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contactus">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h2 className="footer-heading">Contact Us</h2>
          <ul className="contact-info">
            <li>Email: brand.spark.digi@gmail.com</li>
            <li>Phone: +91 63709 29087</li>
            <li>Address: Bhubaneswar, Odisha, India</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p className="footer-copyright">&copy; 2024 BrandSpark. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default FooterSection;
