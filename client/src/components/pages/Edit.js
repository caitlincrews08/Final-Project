import React, { useState } from 'react';
import Tooltip from '../partials/Tips';
import { Col, Container, Row } from 'react-bootstrap';
import testImg from '../../assets/PH.jpg'


import { PixoImage } from '../../image';
import { Link } from 'react-router-dom';

const Edit = (props) => {
  const [src, onChange] = useState('https://via.placeholder.com/300');

  return (

    <Container className='main'>

      {/* <Tooltip /> */}
      <Col className="editStart">
        <Row><Col>Click image below to start</Col></Row>
        <Row>
          <Col>
            <Link to='/image'>
            <PixoImage src={src} onChange={onChange}  id='selected'/>
            </Link>
          </Col>
        </Row>
      </Col>


    </Container>
  );
};

export default Edit;
