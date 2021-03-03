import React, { useEffect, useContext } from 'react';

import { Nav, Navbar, Button } from 'react-bootstrap';
import { Store } from '../../store';
import { logoutUser } from '../../store/actions/authActions';
import API from '../../utils/apiHelper';
import brand from './../../assets/MEMEHEIM-BRAND.png'

const MyNavbar = props => {
  const { state, dispatch } = useContext(Store);

  // useEffect(() => {
  //   if (!state.auth.isAuthenticated)
  //     props.history.push('/home');

  //   API.getUser()
  //   // .then(res => console.log({ res }))
  //   .catch(err => console.log({ err }));
  // }, [ state, props ]);

  const onLogoutClick = e => {
    e.preventDefault();

    logoutUser(props.history)(dispatch);
  };

  return (
 
      <Navbar fixed='top' collapseOnSelect expand='false' className='homenavbar navbar-dark'>
        <Navbar.Brand href='/home'><img src={brand} alt='logo' className='brand'/></Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
          <h6>You are logged in. Tap below to...</h6>
          </Nav>
          <Nav>
            <Button variant='danger' onClick={onLogoutClick}>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


  );
};

export default MyNavbar;
