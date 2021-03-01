import React, { useState } from 'react';

import { Col, Form, Row } from 'react-bootstrap';
import testimg from '../../assets/X.png'


import { PixoImage } from '../../image';
import { Link } from 'react-router-dom';

const Edit = () => {

  // document.querySelector('input').onchange = function(e) {

  //   var file = e.target.files[0],                  // reference first file BLOB
  //       url = URL.createObjectURL(file),           // create an Object URL
  //       img = new Image(); // create a temp. image object
  //       console.log(img)  ;                      

  //     img.onload = function() {                    // handle async image loading
  //       URL.revokeObjectURL(this.src);             // free memory held by Object URL
  //       // selected.getContext('2d').drawImage(this, 0, 0);  // draw image onto canvas (lazy method™)
  //     };

  //     img.src = url;                               // start convertion file to image
  // };

  var fileupload = document.getElementsByTagName('input');
  console.log(fileupload);



  var reader = new FileReader();
  reader.onclose = function (e) {
    // The file's text will be printed here
    var file = document.getElementsByTagName('input').files[0];
    console.log(file);
    console.log(e.target.result)

    let imagepreview = reader.readAsDataURL(file);
    console.log(imagepreview);
    return imagepreview;
  }


  const [src, onChange] = useState('https://via.placeholder.com/300');

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
