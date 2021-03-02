import React, { useContext, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { PixoImage } from '../../image';
import { Link } from 'react-router-dom';
import { Store } from '../../store';

const Edit = () => {

  const { state } = useContext(Store)
  const [src, onChange] = useState(state.auth.pre_edit);

  return (
    <div className='main'>
      <Col className='editStart mid-section'>
        <Form className='form'>
          <Form.File id='upload' label='Choose an Image:' />
        </Form>
        <Row><Col className='form'><p className='form'>-or-</p></Col></Row>
        <Row><Col className='form'>Click image to edit your Meme</Col></Row>
        <Row>
          <Col className='form editPreview'>
            <Link to='/image'>
              <PixoImage src={src} onChange={onChange} id='selected' />
            </Link>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default Edit;
