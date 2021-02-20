
import React from 'react'
// import React, { useContext } from 'react';
import { Col, Navbar } from 'react-bootstrap';
// import { Store } from '../../store';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import PrivateRoute from '../../components/auth/PrivateRoute';
// import MyNavbar from './MyNavbar';

// import { logoutUser } from '../../store/actions/authActions';

const Banner = props => {
    //     const { dispatch } = useContext(Store);
    //     const onLogoutClick = e => {
    //         e.preventDefault();

    //     logoutUser(props.history)(dispatch);
    // };

    // onClick={onLogoutClick}

    return (
        <Navbar fixed="top" className='banner text-center'>
            <Col href="/home"><h1 >MEMEHEIM</h1></Col>
        </Navbar>
    );
};
export default Banner