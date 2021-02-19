import React from 'react';
import Tooltip from '../partials/Tips';
import { Col, Container, Row, } from 'react-bootstrap';
import { Link } from 'react-router-dom';





function Home() {

    return (

        <Container className='main'>

            <Tooltip />

            <Row className='home'>
                <Link to='/edit'>
                    <Col>the Forge</Col>
                </Link>
                <br />
                <Link to='/saved'>
                    <Col>the Vault</Col>
                </Link>
                <br />
                <Link to='/search'>
                    <Col>the Archives</Col>
                </Link>
            </Row>

        </Container>


    );

};
// window.location.reload();

export default Home;

