import React, { useEffect, useState } from 'react';
import Tooltip from '../partials/Tips';
import { Col, Container, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import API from "../../utils/API"
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
        fetch(" https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(
                (res) => {
                    setIsLoaded(true);
                    setItems(res.data.memes);
                    console.log(res.data.memes);
                    console.log(items);
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
            <Col className="mid-section">
                <Tooltip />
                <div className="memeScroller">
                    {items.map(item => (
                        <div key={item.id}>
                            <Link>
                                <img className='memeDisplay' alt={item.name} src={item.url} />
                            </Link>
                            <h6 className='memeTitle'>{item.name}</h6>
                        </div>
                    ))}
                    <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
                        
                        <ToggleButton className='favorite' value={2}>♥</ToggleButton>
                        
                    </ToggleButtonGroup>
                </div>
            </Col>
        );
    };
};


export default Saved;