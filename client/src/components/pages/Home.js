import React from 'react';
import { Col, Row, } from 'react-bootstrap/';


function Home() {

    return (

        <Row className="home">
            <Col sm href="#Edit">the Forge</Col >
            <Col sm href="#Saved">the Vault</Col >
            <Col sm href="#Search">the Archives</Col >
        </Row>

    );
};

export default Home;

