import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row, } from 'react-bootstrap';
import { Link, Redirect, withRouter } from 'react-router-dom';
import API from '../../utils/apiHelper';



function SearchFooter(props) {

   const  saveMeme= (e) => {
       e.preventDefault()
       console.log(props.selected)
       console.log(props.test)
        API.saveMeme(props.selected)
            .then(res =>
               props.history.push('/Saved')
            )
            .catch(err => console.log(err));
    }

    return (
        <div className='searchfooter'>
            <div className='footborder'></div>
            <Container fluid >
                <Row>
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
                </Row>
                <Row>
                    <Col >
                        <Link to='/home' ><h5 className=''> ◄ Back </h5></Link>
                    </Col>
                    <Col >
                        <Button variant='success' className='save' onClick={saveMeme}>Save</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default withRouter(SearchFooter);
