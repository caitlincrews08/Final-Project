import React, { useEffect, useState } from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row, } from 'react-bootstrap';
import { Link, Redirect, withRouter, useHistory } from 'react-router-dom';
import API from '../../utils/apiHelper';




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
    const refresh = () => {
        // LoadScroller(props);
    }

    return (
        <div className='searchfooter'>
            <div className='footborder'></div>
            <Container fluid className='vertical-center'>
                {/* <Row>
                    <InputGroup className='mb-3'>
                        <FormControl className='searchbox'
                            placeholder='Search'
                            aria-label='Search Input'
                            aria-describedby='basic-addon2'
                        />
                        <InputGroup.Append>
                            <Button variant='light' type='submit'>GO</Button>
                        </InputGroup.Append>
                    </InputGroup>

                </Row> */}
                <Row >
                    <Col>
                        <Link to='/home' ><h5 className=''> ◄ Back </h5></Link>
                    </Col>
                    <Col>
                        <Link to='/Search'>
                            <Button variant='secondary' className='refresh' onClick={refresh}>Refresh</Button>
                        </Link>
                    </Col>
                    <Col >
                        <Button variant='success' className=' save' onClick={saveMeme}>Save</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SearchFooter;
