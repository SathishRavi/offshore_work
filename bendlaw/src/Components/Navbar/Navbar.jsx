import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Logo.jpg'
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

export const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div className='Navbar'>
        <div className="nav-logo">
        <NavLink to='/'><img src={logo} alt='logo' className='logo-size'/></NavLink>
          <span style={{padding: '10px'}}>Eminent Technology Consulting LLC</span>
        </div>
        <ul className = {showMediaIcons ? "nav-menu mobile-nav-menu" : "nav-menu" }>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/Client'>Client</NavLink></li>
          <li><NavLink to='/Service'>Service</NavLink></li>
          <li><NavLink to='/blog'>Blog</NavLink></li>
        </ul>
        
        <div className='hamburger-menu'>
          <a href='#' onClick={()=> setShowMediaIcons(!showMediaIcons)}>
            
          {showMediaIcons ? (<GrClose className='cls-color'/>) : (<GiHamburgerMenu/>)  }
          </a>
        </div>
        
    </div>
    
     
  );
}