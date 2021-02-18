import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Landing from '../../components/pages/Landing';
import Register from '../../components/pages/Register';
import Login from '../../components/pages/Login';


const Footer = props => {
  const year = new Date().getFullYear();

  return (
    <Container fluid className='footer vh-100 d-flex flex-column'>
      <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      </Router>
      <br />
      <br />
      <br />
      <p>&copy; {year} Memeheim</p>
    </Container>
  );
};

export default Footer;
