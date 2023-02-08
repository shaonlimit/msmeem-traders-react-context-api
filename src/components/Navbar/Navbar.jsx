import React from 'react';
import logo from '../../images/main-logo.png';
import '../../../src/stylesheet.css';
import { Link } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';

import { NavbarBrand } from 'react-bootstrap';


const Navbar = () => {
 


    return (
      
                <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow sticky-top" id='navbar'>
      <div className="container">
          <Link className="navbar-brand logo" to='/home'><img src={logo} alt=""></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                     
                      <a className="nav-link" aria-current="page" href="/home">Home</a>
                  </li>
                  <li className="nav-item">
                  <HashLink className="nav-link" to='/home#services'>Services</HashLink>
                
                     
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="/about-us">About</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="/contact">Contact</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="/image-gallery">Image Gallery</a>
                  </li>

              </ul>
          </div>
      </div>
  </nav>

      
      
    );
};

export default Navbar;