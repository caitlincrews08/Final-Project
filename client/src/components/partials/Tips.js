import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
// import { Col, Container, Row } from 'react-bootstrap/';

import { scroller } from "react-scroll";

// excluded React component syntax...






function Tips() {

  const scrollToSection = () => {
    scroller.scrollTo("scrollAnchor", {
      duration: 800,
      delay: 100,
      smooth: "easeInOutQuart",
    });
  };

  useEffect(() => {
    scrollToSection();

  });

  return (

   

      <Col id='autoScroll' className='tips'>
        <br />
        <p> Scroll down</p>
        <br />
        <br />
        <p>Hints and descriptions will populate(fade animation/auto-scroll) here onhover of select clickable elements (and possibly an easter egg that displays inspirational and/or funny quotes and sayings) </p>
        <br />
        <br />
        <p className='scrollAnchor'></p>
      </Col>
    
  );

};

export default Tips;