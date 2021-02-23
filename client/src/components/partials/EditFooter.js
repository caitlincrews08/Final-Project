import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function EditFooter() {

    return (
        <Container fluid className='editfooter'>
            <Row>
                    <Link to='/home' ><h3 className="vertical-center"> ◄ Back </h3></Link>   
            </Row>
        </Container>
    );
};

export default EditFooter;