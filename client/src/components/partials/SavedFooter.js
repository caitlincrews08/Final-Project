
import React from 'react';
import { Button, Col, Container, Row, } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import API from '../../utils/apiHelper';


function SavedFooter(props) {



    return (
        <div className='savedfooter'>
            <div className='footborder'></div>
            <Container fluid className='vertical-center'>
                <Row>
                    <Col>
                        <Link to='/home' >
                            <Button variant='warning' className='Home'><i className='fa fa-home' aria-hidden='true'></i></Button>
                        </Link>
                    </Col>
                    {/* <Col>
                        <Link>
                            <Button variant='warning' className='download'><i className='fa fa-download' aria-hidden='true'></i></Button>
                        </Link>
                    </Col> */}
                    <Col >
                        <Button variant='warning' className='delete' onClick={props.removeMeme}><i className='fa fa-trash' aria-hidden='true'></i></Button>
                    </Col>
                  
                </Row>

            </Container>
        </div>
    );
};

export default SavedFooter;