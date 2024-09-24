import React, { useState } from 'react';
import './App.css';
import Headersection from './Components/Headersection';
import ContentSection from './Components/ContentSection'; 
import FooterSection from './Components/FooterSection'; 
import AboutUsSection from './Components/AboutUsSection';
import BlogSection from './Components/BlogSection';
import Service from './Components/Service';
import ContactUs from './Components/ContactUs';
import NotFound from './Components/NotFound'; // Create a NotFound component
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <BrowserRouter>
      <div className="window">
        <Headersection toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect to /home */}
          <Route path="/home" element={<ContentSection />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/services" element={<Service />} />
          <Route path="/aboutus" element={<AboutUsSection />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
        </Routes>
        <FooterSection />
      </div>
    </BrowserRouter>
  );
}

export default App;
