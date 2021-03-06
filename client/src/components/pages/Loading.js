import React from 'react';
import Tooltip from '../partials/Tips';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoadingIcon from '../../assets/Loading.png'

function Loading() {

    return (

        <div className="main">
            <Col className="mid-section">
                <Row>
                    <Tooltip />
                </Row>
                <Row className='home'>
                    <Col>
                        <img src={LoadingIcon} alt='load animation' />
                    </Col>
                </Row>
            </Col>
        </div >



    );

};
// window.location.reload();

export default Loading;

