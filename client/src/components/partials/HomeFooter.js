import { forEach } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import API from '../../utils/apiHelper'

function MyFooter() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        API.queueTemps()
            .then(res => res.json())
            .then(
                (res) => {
                    setIsLoaded(true);
                    setItems(res.data.memes);

                    // setUrls(res.data.memes.url);
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

            <div className='homefooter'>
                <div className='footborder'></div>
                <Container fluid >

                    <div className='thumbnailScroller'>
                        {items.map(item => (
                            <div key={item.id} >
                                <img className='thumbnailDisplay' alt='meme-thumbs' src={item.url} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        );
    };
};

export default MyFooter;