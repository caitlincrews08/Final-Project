import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function SearchFooter() {

    return (
        <div>
            <div className="footborder"></div>
            <Container fluid className='searchfooter'>
                <Row>
                    <InputGroup className="mb-3">
                        <FormControl className='searchbox'
                            placeholder="Search"
                            aria-label="Search Input"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="light" type="submit">GO</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Row>
                <Row>
                    <Col >
                        <Link to='/home' ><h5 className=""> ◄ Back </h5></Link>
                    </Col>
                    <Col >
                        <Button variant='success' className="save ">Save</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SearchFooter;
