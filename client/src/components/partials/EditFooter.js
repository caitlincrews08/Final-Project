import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function EditFooter() {

    return (
        <div className='editfooter'>
            <div className='footborder'></div>
            <Container fluid className='vertical-center'>
                <Row>
                    <Col>
                        <Link to='/home' >
                            <Button variant='warning' className='Home'><i className='fa fa-home' aria-hidden='true'></i></Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default EditFooter;