import React from 'react';
import Tooltip from '../partials/Tooltip';
import { Col, Container, Row, } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Home() {

    return (
        <Container >
            <Row>
                <Tooltip />
            </Row>
            <Row className="home">
                <Link to="/edit" >
                    <Col sm> The Forge</Col >
                </Link>
                <Link to="/saved">
                    <Col sm>The Vault</Col >
                </Link>
                <Link to="/search">
                    <Col sm>The Archives</Col >
                </Link>
            </Row>
        </Container>
    );
};

export default Home;

