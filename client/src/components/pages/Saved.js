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
            .then(res =>
                setMemes(res)
            )
            .catch(err => console.log(err));
            console.log()
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
                        {memes.map(meme => (
                            <Link key={meme.id}>
                                <div className='frame' >
                                    <img className='memeDisplay' alt={meme.name} id={meme.name} src={meme.url} />
                                    <p className='memeTitle'><b>{meme.name}</b></p>
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