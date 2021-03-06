import React from 'react';
import Tooltip from '../partials/Tips';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Forge from '../../assets/Forge.png'

function Home() {

    return (

        <div className="main">
            <Col className="mid-section">
                <Row>
                    <Tooltip />
                </Row>
                <Row className='home'>
                    <Col>
                        <p className='theF'>the</p>
                        <Link to='/edit' className='forge col-sm-12 clipped'>Forge</Link>
                    </Col>
                    <br />
                    <Col>
                    <p className='theV'>the</p>
                        <Link to='/saved' className='vault col-sm-12 clipped'>Vault</Link>
                    </Col>
                    <br />
                    <Col>
                    <p className='theA'>the</p>
                        <Link to='/search' className='archives col-sm-12 clipped'>Archives</Link>
                    </Col>
                </Row>
            </Col>
        </div >



    );

};
// window.location.reload();

export default Home;

