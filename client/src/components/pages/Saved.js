import React, { useEffect, useState } from 'react';
import Tooltip from '../partials/Tips';
import { Container } from 'react-bootstrap';
import API from "../../utils/API"

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

    return (
        <Container className='main'>
          
                <Tooltip />
         
        </Container>
    );
};

export default Saved;