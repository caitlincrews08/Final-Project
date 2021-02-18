import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Store } from '../../store';
import { logoutUser } from '../../store/actions/authActions';
import API from '../../utils/apiHelper';

const MyNavbar = props => {
  const { state, dispatch } = useContext(Store);
  const user = state.auth.user;

  useEffect(() => {
    if (!state.auth.isAuthenticated)
      props.history.push('/login');

    API.getUser()
    .then(res => console.log({ res }))
    .catch(err => console.log({ err }));
  }, [ state, props ]);

  const onLogoutClick = e => {
    e.preventDefault();

    logoutUser(props.history)(dispatch);
  };

  return (
    <div className="navbar-fixed">
      <Navbar collapseOnSelect expand="lg" className='banner'>
        <Navbar.Brand href="#home"><h1>MEMEHEIM</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <p>{user.name.split(' ')[0]} is Logged in.</p>
          </Nav>
          <Nav>
            <Button onClick={onLogoutClick}>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div>
  );
};

export default MyNavbar;
