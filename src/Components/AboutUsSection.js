import React from 'react';
import "./AboutUs.css";

export default function AboutUsSection() {
  return (
    <div className="content">
      <div className="about">
        <h1 className='ahead'>About Us</h1>
        <h3 className='hhead'>Who We Are</h3>
        <p className='details'>BrandSpark is a team of passionate digital experts dedicated to helping businesses grow online. With years of experience in web development, content creation, and digital marketing, we know what it takes to succeed in the digital world.</p>
            
        <h3 className='hhead'>Our Mission</h3>
        <p className='details'>To empower businesses with digital solutions that are not only innovative but also effective in achieving real results.</p>
        
        <h3 className='hhead'>Our Vision</h3>
        <p className='details'>To be the go-to partner for businesses looking to enhance their online presence, offering comprehensive digital services that drive growth and success.</p>
        
        <h3 className='hhead'>Our Values</h3>
        <ul className='values-list'>
            <li><strong>Innovation:</strong> We stay ahead of the curve, constantly exploring new technologies and methods.</li>
            <li><strong>Quality:</strong> We deliver nothing but the best, ensuring high standards in every project.</li>
            <li><strong>Customer Focus:</strong> Your success is our success. We’re here to support your goals.</li>
            <li><strong>Transparency:</strong> Open communication and honesty guide all our client interactions.</li>
        </ul>
      </div>
    </div>
  );
}
