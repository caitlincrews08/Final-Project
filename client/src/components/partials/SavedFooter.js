import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function SavedFooter() {

    return (
        <div className='savedfooter'>
            <div className='footborder'></div>
            <Container fluid className='savedfooter'>
                <Link to='/home' ><h3 className='vertical-center'> ◄ Back </h3></Link>
                <div className="fb-share-button" data-href="https://memeheim.herokuapp.com/" data-layout="button_count" data-size="small"><Link target="_blank" to="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmemeheim.herokuapp.com%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</Link></div>
            </Container>
        </div>
    );
};

export default SavedFooter;