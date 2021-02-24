import React from 'react';
import Tooltip from '../partials/Tips';
import { Col,  Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {

    return (


        <Col className="mid-section">
            <Row>
                <Tooltip />
            </Row>
            <br />
            <br />
            <br />
            <Row className='home'>
                <Link to='/edit' className='forge col ripple'>
                    Forge
                </Link>
                <br />
                <Link to='/saved' className='vault col ripple'>
                    Vault
                </Link>
                <br />
                <Link to='/search' className='archives col ripple'>
                    Archives
                </Link>
            </Row>
        </Col>




    );

};
// window.location.reload();

export default Home;

