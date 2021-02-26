import React, { useEffect, useState } from 'react';
import Tooltip from '../partials/Tips';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import X from '../../assets/X.png'
import SearchFooter from '../partials/SearchFooter'


function Search(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [selected, setSelected] = useState([]);

    function addSelection(event) {
        // var element = document.getElementById(event.target.id);
        // element.classList.toggle('selected');
        event.preventDefault();
        // console.log('Select/De-select Toggled');
        setSelected([...selected, event.target.id])
    }

    
    useEffect(() => {
        fetch(' https://api.imgflip.com/get_memes')
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
            <>
                <div className='main'>
                    <Col className='mid-section'>

                        <Tooltip />

                        <div className='memeScroller'>
                            {items.map(item => (
                                <Link key={item.id}>
                                    <div className='frame' >
                                        <img className='memeDisplay' alt={item.name} id={item.name} src={item.url} onClick={addSelection} value={item.id} />
                                        <p className='memeTitle'><b>{item.name}</b></p>
                                    </div>
                                </Link>
                            ))}
                            <div key='last' className='frame'>
                                <img className='memeDisplay' alt='red X' src={X} />
                                <p className='memeTitle'><b>No more images to load</b></p>
                            </div>
                        </div>
                    </Col>
                </div>
                <SearchFooter selected={selected} />
            </>
        );
    };
}

export default Search;