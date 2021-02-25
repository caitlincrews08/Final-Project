import React from 'react';
import { Button, Col, Container, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function SearchFooter() {

    return (
        <div>
            <div className="footborder"></div>
            <Container fluid className='searchfooter'>
                <Col xs={2}>
                    <Link to='/home' ><h5 className="vertical-center"> ◄ Back </h5></Link>
                </Col>
                <Col xs={7}>
                    <InputGroup className="mb-3 vertical-center">
                        <FormControl className='searchbox'
                            placeholder="Search Memes"
                            aria-label="Search Input"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="light" type="submit">GO</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
                <Col xs={2}>
                    <Button variant='success' className="save vertical-center">Save</Button>
                </Col>
            </Container>
        </div>
    );
};

export default SearchFooter;
