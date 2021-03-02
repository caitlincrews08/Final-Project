import React, { useState } from 'react';

import { Col, Form, Row } from 'react-bootstrap';

import { PixoImage } from '../../image';
import { Link } from 'react-router-dom';
import placeholder from '../../assets/placeholder.png'

const Edit = () => {

  const [ready, setReady] = useState([]);
function rdyEdit () {

}

  let editRdy = ready

  const [src, onChange] = useState( placeholder);

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
            {/* <LoadedImage.Provider value={loadedMeme}> */}
            <Link to='/image'>
              <PixoImage src={src} onChange={onChange} id='selected' />
            </Link>
            {/* </LoadedImage.Provider> */}
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default Edit;
