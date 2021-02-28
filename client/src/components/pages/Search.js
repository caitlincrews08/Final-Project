import React, { useEffect, useState } from 'react';
import Tooltip from '../partials/Tips';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import X from '../../assets/X.png'
import SearchFooter from '../partials/SearchFooter'
import axios from 'axios';
import API from '../../utils/apiHelper'
import redditImageFetcher from 'reddit-image-fetcher'



function Search(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [selected, setSelected] = useState([]);

    function removeSelection(meme) {
        // function notMe() {
        //     return !selected.some(e => e.id === meme.id);
        // }

        console.log(meme.id);
        console.log('deselected');
        let filteredMemes = [...selected.filter(e => e.id !== meme.id)];
        setSelected(filteredMemes);
        console.log(selected);
    };

    function addSelection(meme) {

        if (!selected.some(e => e.id === meme.id)) {
            setSelected([...selected, { id: meme.title, tag: meme.title, image: meme.url }]);
            console.log(selected);
            console.log(meme.name + ' ' + 'added to selected')
        };
    };

    function selectionToggle(e, meme) {
        var element = document.getElementById(e.target.id);
        e.preventDefault();
        if (element.classList.contains('deselected')) {
            addSelection(meme);
            element.classList.toggle('selected');
            element.classList.toggle('deselected');
            console.log(meme.name + ' ' + 'selected')
        } else {
            removeSelection(meme);
            console.log(meme.name + ' ' + 'deselected')
            element.classList.toggle('deselected');
            element.classList.toggle('selected');
        }


    }



    useEffect(() => {
        fetch('https://reddit-meme-api.herokuapp.com/2')
            .then(res => res.json())
            .then(
                (res) => {
                    setIsLoaded(true);
                    setItems(res.memes);
                    console.log(res.memes);
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
                                <Link  key={item.author}>
                                    <div className='frame' >
                                        <img className='memeDisplay deselected' alt={item.name} id={item.title} src={item.url} onClick={(e) => selectionToggle(e, item)} value={item.title} />
                                        <p className='memeTitle'><b>{item.title}</b></p>
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
                <SearchFooter selected={selected} test="test" />
            </>
        );
    };
}

export default Search;