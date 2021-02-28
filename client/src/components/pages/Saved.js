import React, { useEffect, useState } from 'react';
import Tooltip from '../partials/Tips';
import { Col } from 'react-bootstrap';
import API from '../../utils/apiHelper'
import { Link } from 'react-router-dom';

function Saved() {
    const [memes, setMemes] = useState([])
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {
        loadMemes()
    }, [])

    // loads all memes and sets them to memes
    function loadMemes() {
        API.getMemes()
            .then(
                (res) => {
                    setIsLoaded(true);
                    setItems(res.data);
                    console.log(res.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        return (
            <div className='main'>
                <Col className='mid-section'>
                    <Tooltip />
                    <div className='memeScroller'>
                        {items.map(item => (
                            <Link key={item.id}>
                                <div className='frame' >
                                    <img className='memeDisplay' alt={item.tag} id={item.id} src={item.image} />
                                    <p className='memeTitle'><b>{item.tag}</b></p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Col>
            </div>
        );
    };
};


export default Saved;