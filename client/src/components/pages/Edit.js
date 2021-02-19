import React, { useState } from 'react';
import Tooltip from '../partials/Tips';
import { Col, Container, Row } from 'react-bootstrap';

import { PixoImage } from '../../image';

const Edit = (props) => {
  const [src, onChange] = useState('https://via.placeholder.com/350x150');
  return (

    <Container className='main'>

      <Tooltip />
      <Col className="editStart">
        <Row><p>Click image below to start</p></Row>
        <Row>
          <PixoImage src={src} onChange={onChange} />
        </Row>
      </Col>


    </Container>
  );
};

export default Edit;
