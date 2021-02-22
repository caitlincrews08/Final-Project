import React from 'react';
import Tooltip from '../partials/Tips';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {

    return (


        <Container className="mid-section">
            <Row>
                <Tooltip />
            </Row>
            <br />
            <br />
            <Row className='home'>
                <Link to='/edit' className='forge col'>
                    Forge
                </Link>
                <br />
                <Link to='/saved' className='vault col'>
                    Vault
                </Link>
                <br />
                <Link to='/search' className='archives col'>
                    Archives
                </Link>
            </Row>
        </Container>




    );

};
// window.location.reload();

export default Home;

