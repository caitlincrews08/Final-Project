import React, { useState } from 'react';

import { Col, Form, Row } from 'react-bootstrap';



import { PixoImage } from '../../image';
import { Link } from 'react-router-dom';

const Edit = () => {

  // document.querySelector("input").onchange = function(e) {

  //   var file = e.target.files[0],                  // reference first file BLOB
  //       url = URL.createObjectURL(file),           // create an Object URL
  //       img = new Image(); // create a temp. image object
  //       console.log(img)  ;                      

  //     img.onload = function() {                    // handle async image loading
  //       URL.revokeObjectURL(this.src);             // free memory held by Object URL
  //       // selected.getContext("2d").drawImage(this, 0, 0);  // draw image onto canvas (lazy method™)
  //     };

  //     img.src = url;                               // start convertion file to image
  // };

  const [src, onChange] = useState('https://via.placeholder.com/300');

  return (

      <Col className="editStart mid-section">
        <Form.Row>
          <Form className="form">
            <Form.Group className="form">
              <Form.File id="upload" label="Choose an Image" className="ripple" />
            </Form.Group>
          </Form>
        </Form.Row>
        <Row><Col className="form"><p className="form">-or-</p></Col></Row>
        <Row><Col className="form">Click image to edit your Meme</Col></Row>
        <Row>
          <Col className="form">
            <Link to='/image' className="ripple">
              <PixoImage src={src} onChange={onChange} id='selected' />
            </Link>
          </Col>
        </Row>
      </Col>
  );
};

export default Edit;
