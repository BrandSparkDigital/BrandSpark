// Components/ContentSection.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Added for prop type validation
import '../App.css'; 
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';

// Reusable ServiceCard Component with PropTypes validation
function ServiceCard({ title, description, cardClass }) {
  return (
    <div className="card">
      <div className={`first-content ${cardClass}`}>
        <span>{title}</span>
      </div>
      <div className="second-content">
        <span>{description}</span>
      </div>
    </div>
  );
}

// PropTypes for ServiceCard
ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cardClass: PropTypes.string.isRequired,
};

function ContentSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // State for pausing on hover
  const images = [img1, img2, img3, img4];

  // Carousel effect with pause on hover
  useEffect(() => {
    if (isPaused) return; // Pause when hovered

    const carouselInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(carouselInterval);
  }, [images.length, isPaused]);

  // Error handling for images
  const handleImageError = (event) => {
    event.target.src = 'fallback_image.png'; // Provide a path to a fallback image
  };

  return (
    <div className="content-section">
      {/* Slider Section */}
      <div className="right_content sec_color">
        <div
          className="slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="imgs"
              style={{ display: index === currentImageIndex ? 'block' : 'none' }}
              loading="lazy"
              onError={handleImageError}
              aria-label={`Slide ${index + 1} of the carousel`}
            />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="cont">
        <h1>Our Services</h1>
        <div className="cad">
          <ServiceCard
            title="Web Development"
            description="We create websites that are not only visually stunning but also optimized for performance and user experience."
            cardClass="id1"
          />
          <ServiceCard
            title="Landing Page Creation"
            description="Our landing pages are designed to convert visitors into customers. Simple, effective, and aligned with your marketing goals."
            cardClass="id2"
          />
          <ServiceCard
            title="Lead Generation"
            description="We help you turn traffic into tangible leads with customized strategies that capture essential information."
            cardClass="id3"
          />
          <ServiceCard
            title="Blog Creation"
            description="Content is king, and we’re here to help you reign with valuable, well-crafted content."
            cardClass="id4"
          />
          <ServiceCard
            title="Carousel & Infographic Creation"
            description="Stand out with our custom-designed carousels and infographics. Present complex data in an engaging format."
            cardClass="id5"
          />
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
