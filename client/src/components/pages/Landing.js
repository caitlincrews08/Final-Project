import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';
import { Col, Row, Button } from 'react-bootstrap';

const Landing = props => {
  const { state } = useContext(Store);

  console.log({ state, props });

  return (

    <Col lg={true}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <b>Home of the Meme-Lords</b>
      <br />
      <br />
      <Row className='justify-content-center'>
        <Link to="/register" className="btn loggedout">
          <Button variant="light" className="ripple">Register</Button>
        </Link>
      </Row>
      <Row className='justify-content-center'>
        <Link to="/login" className="btn loggedout">
          <Button variant="light" className="ripple">Login</Button>
        </Link>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
     

    </Col>

  );
};

export default Landing;
