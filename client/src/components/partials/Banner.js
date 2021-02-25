
import React from 'react'
import { Col, Navbar } from 'react-bootstrap';


const Banner = () => {
   

    return (
        <Navbar fixed="top" className='banner snow text-center'>
            <Col href="/home"><h1 className='distortion'>MEMEHEIM</h1></Col>
        </Navbar>
    );
};
export default Banner