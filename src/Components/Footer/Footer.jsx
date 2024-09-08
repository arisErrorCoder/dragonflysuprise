import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  const toggleSection = (setOpen, isOpen) => {
    setOpen(!isOpen);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="section-header" onClick={() => toggleSection(setIsCompanyOpen, isCompanyOpen)}>
            <h4>THE HOTEL</h4>
            <FontAwesomeIcon icon={isCompanyOpen ? faChevronUp : faChevronRight} className="toggle-icon" />
          </div>
          <ul className={`company ${isCompanyOpen ? 'open' : ''}`}>
            <li>ABOUT US</li>
            <li>ROMANTIC STAYS</li>
            <li>ROMANTIC DINING</li>
            <li>GROUP PACKAGES</li>
            <li>RECOMMENDATIONS</li> 
          </ul>
        </div>

        <div className="footer-section">
          <div className="section-header" onClick={() => toggleSection(setIsHelpOpen, isHelpOpen)}>
            <h4>NEED HELP</h4>
            <FontAwesomeIcon icon={isHelpOpen ? faChevronUp : faChevronRight} className="toggle-icon" />
          </div>
          <ul className={`help-links ${isHelpOpen ? 'open' : ''}`}>
            <li>CONTACT US</li>
            <li>BOOK AN APPOINTMENT</li>
            <li>FAQ'S</li> 
          </ul>
        </div>

        <div className="footer-section">
          <div className="section-header" onClick={() => toggleSection(setIsLegalOpen, isLegalOpen)}>
            <h4>LEGAL</h4>
            <FontAwesomeIcon icon={isLegalOpen ? faChevronUp : faChevronRight} className="toggle-icon" />
          </div>
          <ul className={`discover-links ${isLegalOpen ? 'open' : ''}`}>
            <li>PRIVACY & COOKIES</li>
            <li>FEES & PAYMENT</li>
            <li>TERMS AND CONDITIONS</li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>LETTERBOX</h4>
          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email" className="email-input" style={{ backgroundColor: '#333333', color: '#ffffff', border: '1px solid #ffffff' }} />
            <button className="email-button" style={{ backgroundColor: '#000000', color: '#ffffff', border: '1px solid #ffffff' }}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>

        <div className="footer-location">
          <h4>LOCATION</h4>
          <div className="location-details">
            <input type="search" placeholder="Enter your location" className="search-input" style={{ backgroundColor: '#333333', color: '#ffffff', border: '1px solid #ffffff' }} />
            <button className="search-button" style={{ backgroundColor: '#000000', color: '#ffffff', border: '1px solid #ffffff' }}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} style={{ color: '#ffffff' }} /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} style={{ color: '#ffffff' }} /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} style={{ color: '#ffffff' }} /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} style={{ color: '#ffffff' }} /></a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPinterest} style={{ color: '#ffffff' }} /></a>
        </div>
        <p style={{ color: '#cccccc', fontSize: 'small' }}>DRAGONFLY All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
