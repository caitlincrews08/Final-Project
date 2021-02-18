import React from 'react';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import PrivateRoute from '../../components/auth/PrivateRoute';
// import MyNavbar from './MyNavbar';


const Banner = () => {

    return (
        <Navbar collapseOnSelect expand="lg" className='banner'>
            <Navbar.Brand href="/dashboard#home"><h1>MEMEHEIM</h1></Navbar.Brand>
            {/* <Router>
                <Switch>
           
                </Switch>
            </Router> */}
        </Navbar>
    );
};
export default Banner