import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>  
            <ul className="menu-items">
                <li><a href="#">GitHub</a></li>
            </ul>
            <h5 className="logo">Frontend Challenges</h5>
        </div>
        </nav>
  )
}

export default Navbar