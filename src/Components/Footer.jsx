import React from 'react';
import '../Styles/Footer.css';
import { 
  FaInstagram, 
  FaLinkedinIn, 
  FaFacebookF, 
  FaYoutube, 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaChevronUp 
} from 'react-icons/fa';

const Footer = () => {
  const sections = [
    {
      title: "Swastik Story",
      links: ["About Us", "Dimensions", "Food Philosophy", "Dining Experiences", "Awards & Recognition", "Testimonials", "Media", "FAQ", "Swastik Blogs"]
    },
    {
      title: "Swastik Spaces",
      links: ["Anand Vihar", "Sukh Vihar", "Ayu Vihar", "Dhyan Vihar", "Utsav Vihar"]
    },
    {
      title: "Swastik Programs",
      links: ["Wellness Programs", "Healing Programs", "Wellness Holiday"]
    },
    {
      title: "Quick Links",
      links: ["Connect With Us", "Careers", "Terms & Conditions", "Privacy Policy", "Cancellation Policy"]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-brand">
          <img src="/logo.png" alt="Swastik Logo" className="footer-logo" />
          <p className="footer-tagline">LUXURY WELLBEING SANCTUARY</p>
        </div>

        {/* Links Grid */}
        <div className="footer-grid">
          {sections.map((section, idx) => (
            <div key={idx} className="footer-column">
              <h4 className="footer-heading">{section.title}</h4>
              <ul className="footer-list">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}><a href={`#${link}`}>{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="social-links">
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaYoutube /></a>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>2026 © All Rights Reserved. Nyati Foundation / Nyati Hotels and Resorts Pvt. Ltd.</p>
      </div>

      {/* Floating Buttons */}
      <div className="floating-actions">
        <button className="btn-whatsapp"><FaWhatsapp /></button>
        <button className="btn-call"><FaPhoneAlt /></button>
        <button className="btn-top" onClick={scrollToTop}><FaChevronUp /></button>
      </div>
    </footer>
  );
};

export default Footer;