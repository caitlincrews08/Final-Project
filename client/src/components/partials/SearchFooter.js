import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function SearchFooter() {

    return (
        <Container fluid className='searchfooter'>
            {/* <Row> */}
                <Col xs={2}>
                    <Link to='/home' ><h5 className="vertical-center"> ◄ Back </h5></Link>
                </Col>
                <Col xs={10} className='searchbox'>
                <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search Memes"
                            aria-label="Search Input"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="light" type="submit">GO</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            {/* </Row> */}
        </Container>
    );
};

export default SearchFooter;
