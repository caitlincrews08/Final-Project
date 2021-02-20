import React from 'react';
import Tooltip from '../partials/Tips';
import { Col, Container, Row, } from 'react-bootstrap';
// import { BrowserRouter as Link, Route, Router, Switch } from 'react-router-dom';

import PrivateRoute from '../auth/PrivateRoute';
import { Link } from 'react-router-dom';





function Home(props) {

    return (
        
            <Container className='main'>
                
                {/* <Route exact path={['/home', '/edit', '/saved', '/search']}component={Tooltip} /> */}
                <Tooltip />
                <Row className='home'>
                    <Link to='/edit'>
                        <Col>the Forge</Col>
                    </Link>
                    <br />
                    <Link to='/saved'>
                        <Col>the Vault</Col>
                    </Link>
                    <br />
                    <Link to='/search'>
                        <Col>the Archives</Col>
                    </Link>
                </Row>

            </Container>


    );

};
// window.location.reload();

export default Home;

