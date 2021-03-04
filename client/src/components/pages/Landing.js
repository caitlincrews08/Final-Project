import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';
import { Col, Row, Button } from 'react-bootstrap';

const Landing = props => {
  const { state } = useContext(Store);

  console.log({ state, props });
  const year = new Date().getFullYear();
  return (

    <Col className='vertical-center'>
      <br />
      <br />
      <br />
      <br />
      <Row className='hidden justify-content-center'>ALLYOURBASEAREBELONGTOUS</Row>
      <b>Home of the Meme-Lords</b>
      <br />
      <br />
      <Row className='justify-content-center'>
        <Link to='/register' className='btn loggedout'>
          <Button variant='light' className='ripple'>Register</Button>
        </Link>
      </Row>
      <Row className='justify-content-center'>
        <Link to='/login' className='btn loggedout'>
          <Button variant='light' className='ripple'>Login</Button>
        </Link>
      </Row>
      <br />
      <br />
      <div className="fb-share-button" data-href="https://memeheim.herokuapp.com/" data-layout="button_count" data-size="small">
        <Link target="_parent" rel="noopener" to="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmemeheim.herokuapp.com%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</Link>
      </div>
      <Col>
        <p className=''>&copy; {year} Memeheim</p>
      </Col>

    </Col>

  );
};

export default Landing;
