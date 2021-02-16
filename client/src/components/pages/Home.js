import React from 'react';
import Tooltip from '../Tooltip';
import { Col, Container, Row, } from 'react-bootstrap';


function Home() {

    return (
        <Container >
            <Row>
                <Tooltip />
            </Row>
            <Row className="home">
                <Col sm href="#Edit"> The Forge</Col >
                <Col sm href="#Saved">The Vault</Col >
                <Col sm href="#Search">The Archives</Col >
            </Row>
        </Container>
    );
};

export default Home;

