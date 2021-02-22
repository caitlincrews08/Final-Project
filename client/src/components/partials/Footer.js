import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Register from './../pages/Register';
import Login from './../pages/Login';
import Landing from './../pages/Landing';

const Footer = props => {
  const year = new Date().getFullYear();

  return (

    
      <Col>
        <Row>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Landing} />
        </Row>
        <Row>
          <Col>
            <p className='snow'>&copy; {year} Memeheim</p>
          </Col>
        </Row>

      </Col>
  
  );
};

export default Footer;
