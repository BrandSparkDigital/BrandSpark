import React from 'react';
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div className="content">
      <div className="contact">
        <h1 className="contact-head">Contact Us</h1>
        <p className="contact-description">We’d love to hear from you! Please fill out the form below or reach out to us directly.</p>

        <div className="contact-info">
          <p><strong>Email:</strong> brand.spark.digi@gmail.com</p>
          <p><strong>Phone:</strong> +91 63709 29087</p>
          <p><strong>Address:</strong> Bhubaneswar, Odisha, India</p>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <input type="text" id="message" name="message" placeholder="Your Message" required />
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}
