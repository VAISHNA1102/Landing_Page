
import React from 'react';
import './CSS/Navbar.css'; 
import Logo from '../Img/Logo.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo"/>
      </div>
      <div className="navbar-right">
        <a href='/'>Home</a>
        <a href='/services'>Service</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;



