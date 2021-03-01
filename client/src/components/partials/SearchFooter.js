import React, { useEffect, useState } from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row, } from 'react-bootstrap';
import { Link, Redirect, withRouter, useHistory } from 'react-router-dom';
import API from '../../utils/apiHelper';
import download from '../../assets/Download.png'




function SearchFooter(props) {

    const history = useHistory()
    const saveMeme = (e) => {
        e.preventDefault()
        console.log(props.selected);
        console.log(props.test);
        API.saveMeme(props.selected)
            .then(res =>
                history.push('/Saved')
            )
            .catch(err => console.log(err));
    }
    // const refresh = () => {
    // }

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
                    <Col>
                        <Link to='/Search'>
                            <Button variant='warning' className='download'><i className='fa fa-download' aria-hidden='true'></i></Button>
                        </Link>
                    </Col>
                    <Col >
                        <Button variant='warning' className=' save' onClick={saveMeme}><i className='fa fa-save' aria-hidden='true'></i></Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SearchFooter;
