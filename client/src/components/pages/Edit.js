import React, { useContext, useEffect, useRef, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { pixo } from '../../image';
import { Link } from 'react-router-dom';
import { Store } from '../../store';

const Edit = () => {

  const { state } = useContext(Store)
  const [src, onChange] = useState(state.auth.pre_edit);
  const { dispatch } = useContext(Store);
  const fileInput = useRef();


  useEffect(() => {
    pixo.attachToFileInput(fileInput.current);
  }, [])


  function sendToEdit(e, props) {
    let url = e.currentTarget.files[0];
    fileInput.current.focus();
    console.log(url)
    // dispatch({ type: 'SET_LOAD_FOR_EDIT', payload: url });
  }




  return (
    <div className='main'>
      <Col className='editStart mid-section'>
        <Form className='form'>
          <Form.File id='upload' label='Choose an Image:' ref={fileInput}/>
        </Form>
        <Row><Col className='form'><p className='form'>-or-</p></Col></Row>
        <Row><Col className='form'>Click image to edit your Meme</Col></Row>
        <Row>
          <Col className='form editPreview'>
            <Link to='/image'>
              {/* <PixoImage src={src} input={fileInput.current} onChange={onChange} id='selected' /> */}
              <img src={src} alt="potentially dank meme" onClick={() => pixo.edit(src)} className='editPreview'/>
            </Link>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default Edit;
