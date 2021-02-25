import React from 'react';
import Tooltip from '../partials/Tips';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {

    return (


        <Col className="mid-section">
            <Row>
                <Tooltip />
            </Row>
            <Row className='home'>
                <Link to='/edit' className='forge col-sm-12 ripple'>
                    Forge
                </Link>
                <br />
                <Link to='/saved' className='vault col-sm-12 ripple'>
                    Vault
                </Link>
                <br />
                <Link to='/search' className='archives col-sm-12 ripple'>
                    Archives
                </Link>
            </Row>
        </Col>




    );

};
// window.location.reload();

export default Home;

