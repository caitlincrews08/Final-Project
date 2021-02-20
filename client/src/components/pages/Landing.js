import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Button } from 'react-bootstrap';

const Landing = props => {
  const { state } = useContext(Store);

  console.log({ state, props });

  return (

    <Col>
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
      <br />
      <br />
      <br />
      <br />
      <Row className='justify-content-center'>
        <Link to="/register" className="btn">
          <Button variant="light">Register</Button>
        </Link>
      </Row>
      <Row className='justify-content-center'>
        <Link to="/login" className="btn">
          <Button variant="light">Login</Button>
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
    </Col>

  );
};

export default Landing;
