import React from 'react';
import './Service.css';

export default function Services() {
  const servicesList = [
    {
      title: "Web Development",
      description: "Creating responsive and dynamic websites tailored to your business needs.",
    },
    {
      title: "Digital Marketing",
      description: "Implementing effective strategies to boost your online presence and engagement.",
    },
    {
      title: "Content Creation",
      description: "Crafting compelling content that resonates with your audience and drives conversions.",
    },
    {
      title: "SEO Services",
      description: "Optimizing your website to rank higher in search engine results and attract organic traffic.",
    },
    {
      title: "E-commerce Solutions",
      description: "Building user-friendly online stores that enhance the shopping experience.",
    },
  ];

  return (
    <div className="services-content">
      <h1 className="services-head">Our Services</h1>
      <p className="services-description">At BrandSpark, we offer a range of services to help your business grow and thrive in the digital landscape.</p>
      <div className="services-list">
        {servicesList.map((service, index) => (
          <div key={index} className="service-card">
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
