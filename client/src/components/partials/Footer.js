import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Register from './../pages/Register';
import Login from './../pages/Login';
import Landing from './../pages/Landing';
import './Footer.css'

const Footer = props => {
  const year = new Date().getFullYear();

  return (

    
      <Col>
        <Row className='footer'>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Landing} />
        </Row>
        <Row>
          <Col>
            <p className=''>&copy; {year} Memeheim</p>
          </Col>
        </Row>

      </Col>
  
  );
};

export default Footer;
