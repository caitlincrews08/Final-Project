import React from 'react';
import Tooltip from '../partials/Tips';
import { Col, Container, Row, } from 'react-bootstrap';
// import { BrowserRouter as Link, Route, Router, Switch } from 'react-router-dom';

import PrivateRoute from '../auth/PrivateRoute';
import { Link } from 'react-router-dom';





function Home() {

    return (

        <Row className='main'>

            {/* <Route exact path={['/home', '/edit', '/saved', '/search']}component={Tooltip} /> */}
            <Tooltip />
            <Row className='home'>
                <Col>
                    <Link to='/edit'>
                        the Forge
                    </Link>
                </Col>
                <br />
                <Col>
                    <Link to='/saved'>
                        the Vault
                    </Link>
                </Col>
                <br />
                <Col>
                    <Link to='/search'>
                        the Archives
                    </Link>
                </Col>
            </Row>

        </Row>


    );

};
// window.location.reload();

export default Home;

