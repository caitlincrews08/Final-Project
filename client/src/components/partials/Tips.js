import React from 'react';
import { Row } from 'react-bootstrap';
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
  scrollToSection();

    return (

            <Row id='autoScroll' className='tips'>
              <br />
              <p>Hints and descriptions will populate(fade animation) here onhover of all clickable elements (and possibly an easter egg that displays inspirational and/or funny quotes and sayings) </p>
              <p className='scrollAnchor'></p>
           </Row>
    );
    
};

export default Tips;