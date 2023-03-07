import React from 'react';
import { Link } from 'react-router-dom';
import '../../../src/stylesheet.css';
import logo from '../../images/main-logo.png';

import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <nav
      className='navbar navbar-expand-lg navbar-light bg-white fixed-top shadow sticky-top'
      id='navbar'>
      <div className='container'>
        <Link className='navbar-brand logo' to='/home'>
          <img src={logo} alt=''></img>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link className='nav-link' aria-current='page' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <HashLink className='nav-link' to='/#services'>
                Services
              </HashLink>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about-us'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='/contact'>
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='/image-gallery'>
                Image Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
