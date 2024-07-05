// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaTachometerAlt, FaWallet, FaShoppingCart, FaCog, FaSignOutAlt } from 'react-icons/fa';
// import './Sidebar.css'; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/dashboard">
              <FaTachometerAlt /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/mywallet">
              <FaWallet /> My Wallet
            </Link>
          </li>
          <li>
            <Link to="/mycart">
              <FaShoppingCart /> My Cart
            </Link>
          </li>
          <div className="sidebar-bottom">
            <li>
              <Link to="/settings">
                <FaCog /> Settings
              </Link>
            </li>
            <li>
              <Link to="/logout">
                <FaSignOutAlt /> Logout
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
