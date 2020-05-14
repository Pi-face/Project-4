import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import FlashcardsContext from '../../context/category/flashcardsContext';
import {Navbar,Nav} from 'react-bootstrap';

const Header = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const flashcardsContext = useContext(FlashcardsContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();

  };

  const authLinks = (
    <Fragment>
      <Navbar.Text>Signed in as: <span>{user && user.name}</span></Navbar.Text>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm' style={{textDecoration:"none"}} >Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <div>
            <Nav.Link href='/register'>Register</Nav.Link>
      </div>
      <div>
             <Nav.Link href='/login'>Login</Nav.Link>
      </div>
      <div>
             <Nav.Link href='/about'>About</Nav.Link>
      </div>
    </Fragment>
  );

  return (
    <div>
          <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/"className={icon}>{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">{isAuthenticated ? authLinks : guestLinks}</Navbar.Collapse>
          </Navbar>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Header.defaultProps = {
  title: 'Memory Climb',
  icon: 'fas fa-mountain'
};

export default Header;