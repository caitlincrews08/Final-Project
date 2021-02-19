import React from 'react';
import Tooltip from '../partials/Tooltip';
import { Col, Container, Row, } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';





function Home() {

    return (

        <Container className='main' >
            <Row>
                <Tooltip />
            </Row>
            <Row className='home'></Row>
                
        </Container>
                
         
    );
};

export default Home;

