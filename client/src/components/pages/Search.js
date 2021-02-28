import React, { useEffect, useState } from 'react';
import Tooltip from '../partials/Tips';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import X from '../../assets/X.png'
import SearchFooter from '../partials/SearchFooter'
import API from '../../utils/apiHelper'


function Search(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [selected, setSelected] = useState([]);

    function removeSelection(meme) {
     
        console.log(meme.title);
        console.log('deselected');
        let filteredMemes = [...selected.filter(e => e.id !== meme.title)];
        // console.log(e.id)
        setSelected(filteredMemes);
        console.log(selected);
    };

    function addSelection(meme) {

        if (!selected.some(e => e.id === meme.id)) {
            setSelected([...selected, { id: meme.title, tag: meme.title, image: meme.url }]);
            console.log(selected);
            console.log(meme.title + ' ' + 'added to selected')
        };
    };

    function selectionToggle(e, meme) {
        var element = document.getElementById(e.target.id);
        console.log(e.target.id);
        e.preventDefault();
        if (element.classList.contains('deselected')) {
            addSelection(meme);
            element.classList.toggle('selected');
            element.classList.toggle('deselected');
            console.log(meme.title + ' ' + 'selected')
        } else {
            removeSelection(meme);
            console.log(meme.title + ' ' + 'deselected')
            element.classList.toggle('deselected');
            element.classList.toggle('selected');
        }
    }
    // LoadScroller(props);
    
    useEffect(() => {
        API.queueMemes()
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
                            {items.map((item, index) => (
                                <Link key={index}>
                                    <div className='frame' >
                                        <img className='memeDisplay deselected' loading="lazy" alt={item.name} id={item.title} src={item.url} onClick={(e) => selectionToggle(e, item)} value={item.title} />
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

