import React, { useEffect, useState } from 'react';
import Tooltip from '../partials/Tips';
import { Col } from 'react-bootstrap';
import API from '../../utils/apiHelper'
import { Link } from 'react-router-dom';

function Saved() {
    const [memes, setMemes] = useState([])

    useEffect(() => {
        loadMemes()
    }, [])

    // loads all memes and sets them to memes
    function loadMemes() {
        API.getMemes()
            .then(res =>
                setMemes(res.data)
            )
            .catch(err => console.log(err));
    }

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/api/user/memes')
            .then(res => res.json())
            .then(
                (res) => {
                    setIsLoaded(true);
                    setItems(res.data.memes);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

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
                                    <img className='memeDisplay' alt={item.name} id={item.name} src={item.url} />
                                    <p className='memeTitle'><b>{item.name}</b></p>
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