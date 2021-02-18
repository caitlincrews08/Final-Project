import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const Landing = props => {
  const { state } = useContext(Store);

  console.log({ state, props });

  return (
    <Container>
      <Row>
        <Col className="center-align">
          <br />
          <Col>
            <Link to="/register" className="btn">
              Register
            </Link>
          </Col>
          <Col>
            <Link to="/login" className="btn">
              Login
            </Link>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
