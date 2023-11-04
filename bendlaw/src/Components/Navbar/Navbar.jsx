import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Logo.png'
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="nav-logo">
        <NavLink to='/'><img src={logo} alt='logo' className='logo-size'/></NavLink>
            <div className='logo-phone'>(415) 633-6841</div>
        </div>

        <ul className='nav-menu'>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/Client'>Client</NavLink></li>
          <li><NavLink to='/Service'>Service</NavLink></li>
          <li><NavLink to='/blog'>Blog</NavLink></li>
        </ul>
        
        
    </div>
    
     
  );
}