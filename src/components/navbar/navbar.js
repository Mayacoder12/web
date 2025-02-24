import React, { useState } from 'react';
import './navbar.css';
import {Link} from 'react-router';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const menuItems = [
    { 
      title: 'Company', 
      subMenu: ['About Us', 'Leadership', 'Our History']
    },
    { 
      title: 'Business', 
      subMenu: ['Automotive', 'Industrial', 'Defence']
    },
    { 
      title: 'Our Presence', 
      subMenu: ['Global Locations', 'Manufacturing Plants']
    },
    { 
      title: 'Technology and Innovation', 
      subMenu: ['R&D', 'Patents', 'Innovations']
    },
    { 
      title: 'Investors', 
      subMenu: ['Financial Reports', 'Shareholders', 'Annual Reports']
    },
    { 
      title: 'CSR and Sustainability', 
      subMenu: ['Initiatives', 'Reports', 'Community Engagement']
    },
    { 
      title: 'Media', 
      subMenu: ['Press Releases', 'Brand Identity']
    },
    { 
      title: 'Careers', 
      subMenu: ['Job Openings', 'Life at Bharat Forge']
    }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="menu-icon" onClick={() => setMenuOpen(true)}>&#9776;</div>
        <img src="/logo.png" alt="Company Logo" className="logo" />
      </div>
      <ul className="navbar-right">
        <li 
          className="nav-item dropdown" 
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <a href="#">Media</a>
          {dropdownVisible && (
            <ul className="dropdown-menu">
              <li><a href="#">Press Releases</a></li>
              <li><a href="#">Brand Identity</a></li>
            </ul>
          )}
        </li>
        <li className='nav-item'><Link to="/"><a>Home</a></Link></li>
        <li className="nav-item"><Link to="/careers"><a>Careers</a></Link></li>
        <li className='nav-item'><Link to='/aboutus'><a>About Us</a></Link></li>
        <li className="nav-item"><Link to="/contactus"><a>Contact</a></Link></li>
      </ul>

      {menuOpen && (
        <div className="fullscreen-menu">
          <div className="close-btn" onClick={() => setMenuOpen(false)}>&times;</div>
          <ul className="menu-list">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item">
                <div 
                  className="menu-title" 
                  onClick={() => setActiveSubMenu(activeSubMenu === index ? null : index)}
                >
                  {item.title}
                </div>
                {activeSubMenu === index && (
                  <ul className="submenu">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="submenu-item">
                        <a href="#">{subItem}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
