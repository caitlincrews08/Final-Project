import React from 'react';
import Tooltip from '../partials/Tips';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {

    return (

        <div className="main">
            <Col className="mid-section">
                <Row>
                    <Tooltip />
                </Row>
                <Row className='home'>
                    <Col>
                        <Link to='/edit' className='forge col-sm-12 ripple'>Forge</Link>
                    </Col>
                    <br />
                    <Col>
                        <Link to='/saved' className='vault col-sm-12 ripple'>Vault</Link>
                    </Col>
                    <br />
                    <Col>
                        <Link to='/search' className='archives col-sm-12 ripple'>Archives</Link>
                    </Col>
                </Row>
            </Col>
        </div >



    );

};
// window.location.reload();

export default Home;

