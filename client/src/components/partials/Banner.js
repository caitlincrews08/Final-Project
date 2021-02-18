import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Banner = () => {

    return (
        <Navbar collapseOnSelect expand="lg" className='banner'>
            <Navbar.Brand href="#home"><h1>MEMEHEIM</h1></Navbar.Brand>
        </Navbar>

    );
};
export default Banner