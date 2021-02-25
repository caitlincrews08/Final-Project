import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Router is needed for secondary switch to function, despite not being called after import
import { Col, Row } from 'react-bootstrap';
import Register from './../pages/Register';
import Login from './../pages/Login';
import Landing from './../pages/Landing';


const Footer = props => {
  const year = new Date().getFullYear();

  return (

    <div className='main'>
      <Col >
        <Row className='footer'>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Landing} />
          <Col xl={12}>
            <p className=''>&copy; {year} Memeheim</p>
          </Col>
        </Row>
      </Col>
  </div>
  );
};

export default Footer;
