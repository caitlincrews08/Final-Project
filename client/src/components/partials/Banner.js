
import React from 'react'
// import React, { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
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
        <Navbar collapseOnSelect expand="lg" className='banner'>
            <Navbar.Brand  href="/home"><h1 >MEMEHEIM</h1></Navbar.Brand>

        </Navbar>
    );
};
export default Banner