import React from 'react';
// import PropTypes from 'prop-types';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import Home from '../pages/Home';




const Header = () =>{
    return(
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="/"className='fas fa-meteor'>Memory Climb</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href='/about'>About</Nav.Link>
      <Nav.Link href='/about'>Log in</Nav.Link>
      <Nav.Link href='/about'>Register</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
//   icon: PropTypes.string,
// }

// Header.defaultProps = {
//     title: 'Memory Climb',
//     icon: 'fas fa-meteor',
// }

export default Header 