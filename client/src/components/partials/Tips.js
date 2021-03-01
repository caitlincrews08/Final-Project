import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { scroller } from 'react-scroll';



function Tips() {

  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const scrollToSection = () => {
    scroller.scrollTo('scrollAnchor', {
      duration: 800,
      delay: 100,
      smooth: 'easeInOutQuart',
    });
  };


  // var request = require('request');
  // let options = {
  //   url: 'https://geek-jokes.sameerkumar.website/api?format=json',
  //   method: 'GET'
  // }

  // request(options, (err, res, body) => {
  //   if (!err && res.statusCode == 200){
  //    var jk = body;
  //    return jk
  //   };
    
  // });

  useEffect(() => {
    fetch('https://geek-jokes.sameerkumar.website/api?format=json')
        .then(res => res.json())
        .then(
            (body) => {
                setIsLoaded(true);
                setJokes(body.joke);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
}, [])

  return (
    <Col lg={10} id='autoScroll' className='tips'>

        <p>{jokes}</p>
    
    </Col>
  );
};

export default Tips;