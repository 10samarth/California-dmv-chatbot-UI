import React from 'react';
import logo from './logo.png';


function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li><a href="#">ChatGPT - California Driver's Handbook & Aid</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
