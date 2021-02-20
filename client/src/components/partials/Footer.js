import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Footer = props => {
  const year = new Date().getFullYear();

  return (
  
      <Container fluid className='footer vh-100 d-flex flex-column'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>&copy; {year} Memeheim</p>
      </Container>
  );
};

export default Footer;
