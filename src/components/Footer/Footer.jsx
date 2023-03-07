import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import whiteLogo from '../../images/white-logo.png';


const Footer = () => {
  return (
    <footer>
      <div className='footer-top'>
        <div className='container'>
          <div className='row footer-content g-4'>
            <div className='col-md-4'>
              <div className='footer-logo'>
                <div className='footer-logo-img'>
                  <img src={whiteLogo} alt='' />
                </div>
                <div className='social-icon d-flex mt-4'>
                  <div className='facebook-icon footer-icon'>
                    <a
                      href='https://www.facebook.com/msmeemtraders/'
                      target='”_blank”'>
                      <i className='bx bxl-facebook'></i>
                    </a>
                  </div>
                  <div className='twitter-icon footer-icon'>
                    <Link href='#' target='”_blank”'>
                      <i className='bx bxl-twitter'></i>
                    </Link>
                  </div>
                  <div className='instagram-icon footer-icon'>
                    <Link href='#' target='”_blank”'>
                      <i className='bx bxl-instagram'></i>
                    </Link>
                  </div>
                  <div className='linkedin-icon footer-icon'>
                    <a
                      href='https://www.linkedin.com/in/khokon-iqbal-b72335188'
                      target='”_blank”'>
                      <i className='bx bxl-linkedin'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 quick-links'>
              <h5 className='text-white'>Quick Links</h5>
              <ul className='list-unstyled'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <HashLink to='/#services'>Services</HashLink>
                </li>
                <li>
                  <Link to='/about-us'>About us</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
                <li>
                  <Link to='/image-gallery'>Image Gallery</Link>
                </li>
              </ul>
            </div>
            <div className='col-md-4 address'>
              <h5 className='text-white'>Address</h5>
              <ul className='list-unstyled'>
                <li>Office: Ka-147/5, Aburtek, Khilkhet, Dhaka-1229</li>
                <li>Mobile: +88 01675 550814, +88 01748 529368</li>
                <li>E-mail: meemtraders2002@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <div className='row d-flex justify-content-between'>
            <div className='col-md-6'>
              <p className='mb-0 py-2'>Copyright © 2012 MSMeemTraders</p>
            </div>
            <div className='col-auto'>
              <p className='mb-0 py-2'>
                Developed by{' '}
                <a
                  href='https://www.facebook.com/shaonlimit/'
                  target='_blank'
                  rel='noreferrer'>
                  Saiful Islam Shaon
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
