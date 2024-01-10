import React from 'react';
import GitHubIcon from './github-mark.png';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-container nv-container">
            <input type="checkbox" name="" id="" />
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>  
            <ul className="menu-items">
                <li>
                    
                    <a href="https://github.com/adavijit/frontend-challenges" target="_blank" rel="noreferrer">
                    <img src={GitHubIcon} alt='github'/>
                        GitHub</a>
                    
                    </li>
            </ul>
            <h5 className="logo">Frontend Challenges</h5>
        </div>
        </nav>
  )
}

export default Navbar