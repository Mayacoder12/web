import React, { useState } from 'react';
import './footer.css';
import { Link } from 'react-router';

const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleFooterSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 onClick={() => toggleFooterSection(0)}>Company</h3>
          {activeSection === 0 && (
            <ul>
              <li><Link to='aboutus'><a href>About Us</a></Link></li>
              <li><a href="#">Our Values</a></li>
              <li><Link to='careers'><a href>Careers</a></Link></li>
            </ul>
          )}
        </div>
        <div className="footer-column">
          
          <h3 onClick={() => toggleFooterSection(1)}><Link to='/'>Business</Link></h3>
{/*           
          {activeSection === 1 && (
            <ul>
              <li><a href="#">Solutions</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          )} */}
        </div>
        <div className="footer-column">
          <h3 onClick={() => toggleFooterSection(2)}>Global Footprints</h3>
          {activeSection === 2 && (
            <ul>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Offices</a></li>
              <li><a href="#">Factories</a></li>
            </ul>
          )}
        </div>
        <div className="footer-column">
          <h3 onClick={() => toggleFooterSection(3)}>Facilities</h3>
          {activeSection === 3 && (
            <ul>
              <li><a href="#">Manufacturing</a></li>
              <li><a href="#">R&D</a></li>
              <li><a href="#">Production</a></li>
            </ul>
          )}
        </div>
        <div className="footer-column">
          <h3 onClick={() => toggleFooterSection(4)}>Address</h3>
          {activeSection === 4 && (
            <ul>
              <li><a href="#">Headquarters</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          )}
        </div>
        <div className="footer-column">
          <h3 onClick={() => toggleFooterSection(5)}>Investors</h3>
          {activeSection === 5 && (
            <ul>
              <li><a href="#">Reports</a></li>
              <li><a href="#">Stock Info</a></li>
              <li><a href="#">Shareholders</a></li>
            </ul>
          )}
        </div>
        <div className="footer-column">
          <h3 onClick={() => toggleFooterSection(6)}>CSR & Sustainability</h3>
          {activeSection === 6 && (
            <ul>
              <li><a href="#">Initiatives</a></li>
              <li><a href="#">Reports</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          )}
        </div>
        <div className="footer-column">
          <h3 onClick={() => toggleFooterSection(7)}>Media</h3>
          {activeSection === 7 && (
            <ul>
              <li><a href="#">Press Releases</a></li>
              <li><a href="#">Media Kit</a></li>
            </ul>
          )}
        </div>
        <div className="footer-column">
          <h3 onClick={() => toggleFooterSection(8)}>Technology & Innovation</h3>
          {activeSection === 8 && (
            <ul>
              <li><a href="#">Research</a></li>
              <li><a href="#">Patents</a></li>
              <li><a href="#">Innovations</a></li>
            </ul>
          )}
        </div>
        <div className="footer-column">
          <h3 onClick={() => toggleFooterSection(9)}>Careers</h3>
          {activeSection === 9 && (
            <ul>
              <li><a href="#">Job Openings</a></li>
              <li><a href="#">Life at Company</a></li>
            </ul>
          )}
        </div>
        <div className="footer-column">
          <h3 onClick={() => toggleFooterSection(10)}>Contact Us</h3>
          {activeSection === 10 && (
            <ul>
              <li><a href="#">Contact Information</a></li>
              <li><a href="#">Feedback</a></li>
            </ul>
          )}
        </div>
      </div>
      <div className="footer-bottom">
        <p>Company Name | <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
