import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Register from './../pages/Register';
import Login from './../pages/Login';
import Landing from './../pages/Landing';

const Footer = props => {
  const year = new Date().getFullYear();

  return (

    <footer fixed='bottom' className='footer'>

      <Row>
       
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Landing} />
        
      </Row>

      <Row>
        <Col>
          <p>&copy; {year} Memeheim</p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
