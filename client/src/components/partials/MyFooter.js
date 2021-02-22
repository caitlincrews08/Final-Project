import React, { useEffect, useState } from 'react';
import { Col, Container } from 'react-bootstrap';


function MyFooter() {
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
            <Container fluid className='myfooter'>
                <div className="thumbnailScroller">
                    {items.map(item => (
                        <div key={item.id} >
                            <img className='thumbnailDisplay' alt='meme-thumbs' src={item.url} />
                        </div>
                    ))}
                </div>
            </Container>
        );
    };
};

export default MyFooter;