import { remove } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row, } from 'react-bootstrap';
import { Link, Redirect, withRouter, useHistory } from 'react-router-dom';
import API from '../../utils/apiHelper';


function SavedFooter(props) {

    const history = useHistory()

  
    

    const deleteMeme = (e) => {
        e.preventDefault();
        // const removeMemes = (e) => {
        //     let selectedMemes = document.getElementById(e.target.id).parentElement.parentElement.nodeName;
        //     console.log(selectedMemes);
        //     remove(selectedMemes);
        // }
        console.log(props.memes);
        console.log(props.test);
        API.deleteMeme(props.memes)
            .then(res =>
                history.push('/Saved')
            )
            .catch(err => console.log(err));
        // removeMemes();
    }


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
                    <Col>
                        <Link to='/Search'>
                            <Button variant='warning' className='download'><i className='fa fa-download' aria-hidden='true'></i></Button>
                        </Link>
                    </Col>
                    <Col >
                        <Button variant='warning' className='delete' onClick={deleteMeme}><i className='fa fa-trash' aria-hidden='true'></i></Button>
                    </Col>
                    {/* <div className="fb-share-button" data-href="https://memeheim.herokuapp.com/" data-layout="button_count" data-size="small">
                    <Link target="_blank" to="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmemeheim.herokuapp.com%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</Link>
                </div> */}
                </Row>

            </Container>
        </div>
    );
};

export default SavedFooter;