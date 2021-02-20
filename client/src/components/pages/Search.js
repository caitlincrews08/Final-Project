import React, { useEffect, useState } from 'react';
import Tooltip from '../partials/Tips';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';

function Search() {
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
            <Container className='main'>
                <Tooltip />
                <Row className="memeScroller">
                    {items.map(item => (
                        <Col key={item.id}>
                            {/* <Row className='memeTitle verticle-center'>
                                <h3>{item.name}</h3>
                            </Row> */}
                            <Row>
                                <img className='memeDisplay' src={item.url} />
                            </Row>
                        </Col>
                    ))}
                </Row>
               
            </Container>
        );
    };
}

export default Search;