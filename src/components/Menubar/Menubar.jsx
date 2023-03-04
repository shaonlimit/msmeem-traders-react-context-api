import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/main-logo.png';
import './Menubar.css';

function Menubar() {
  return (
    <Navbar
      bg='light'
      expand='lg'
      className='navbar navbar-expand-lg navbar-light bg-white fixed-top shadow sticky-top'
      id='navbar'>
      <Container>
        <Navbar.Brand href='/home' className='navbar-brand logo'>
          {' '}
          <img src={logo} alt='' />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link className='nav-link' href='/'>
              Home
            </Nav.Link>
            <HashLink className='nav-link' to='/#services'>
              Services
            </HashLink>
            <Nav.Link className='nav-link' href='/about-us'>
              About
            </Nav.Link>
            <Nav.Link className='nav-link' href='/contact'>
              Contact
            </Nav.Link>
            <Nav.Link className='nav-link' href='/image-gallery'>
              Image Gallery
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;
