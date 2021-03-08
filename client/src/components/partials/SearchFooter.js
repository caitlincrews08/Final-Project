import React from 'react';
import { Button, Col, Container, Row, } from 'react-bootstrap';
import { Link } from 'react-router-dom';






function SearchFooter(props) {

    return (
        <div className='searchfooter'>
            <div className='footborder'></div>
            <Container fluid className='vertical-center'>
                <Row>
                    <Col>
                        <Link to='/home' >
                            <Button variant='warning' className='Home'><i className='fa fa-home' aria-hidden='true'></i></Button>
                        </Link>
                    </Col>
                    {/* <Col>
                        <Link to='/Search'>
                            <Button variant='warning' className='download' onclick={props.DLHandler}><i className='fa fa-download' aria-hidden='true'></i></Button>
                        </Link>
                    </Col> */}
                    <Col >
                        <Button variant='warning' className=' save' onClick={props.addMeme}><i className='fa fa-save' aria-hidden='true'></i></Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SearchFooter;
