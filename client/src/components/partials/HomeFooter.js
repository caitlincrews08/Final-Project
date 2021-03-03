
import React, { useEffect, useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import API from '../../utils/apiHelper'
import { Store } from '../../store';
import { useHistory } from 'react-router-dom';

function MyFooter() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const { dispatch } = useContext(Store);

    useEffect(() => {
        API.queueTemps()
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
    const history = useHistory()
    function sendToEdit(e) {
        let url = e.target.src
        console.log(url)
        dispatch({ type: 'SET_LOAD_FOR_EDIT', payload: url });
        history.push('/Edit');
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className='homefooter'>
                <div className='footborder'></div>
                <Container fluid >
                    <div className='thumbnailScroller'>
                        {items.map(item => (
                            <div key={item.id} >
                                <img className='thumbnailDisplay' alt='meme-thumbs' src={item.url} onClick={sendToEdit} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        );
    };
};

export default MyFooter;