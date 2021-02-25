import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function EditFooter() {

    return (
        <div className='editfooter'>
            <div className='footborder'></div>
            <Container fluid className='editfooter'>
                <Link to='/home' ><h3 className='vertical-center'> ◄ Back </h3></Link>
            </Container>
        </div>
    );
};

export default EditFooter;