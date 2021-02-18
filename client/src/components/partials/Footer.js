import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { Store } from '../../store';

import Landing from '../pages/Landing';
import Register from '../pages/Register';
import Login from '../pages/Login';
import { logoutUser } from '../../store/actions/authActions';
// import PrivateRoute from '../../components/auth/PrivateRoute';
// import MyFooter from './MyFooter'

const Footer = props => {
  const year = new Date().getFullYear();
  const { state, dispatch } = useContext(Store);
  const onLogoutClick = e => {
    e.preventDefault();

    logoutUser(props.history)(dispatch);
  };

  return (

    <Container fluid className='footer vh-100 d-flex flex-column'>
      <Router>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Landing} />
        </Switch>

      </Router>
      <br />
      <br />
      <br />
      <p>&copy; {year} Memeheim</p>
      {/* <Button onClick={onLogoutClick}>
              Logout
            </Button> */}
    </Container>
  );
};

export default Footer;
