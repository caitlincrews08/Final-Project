import React, { useEffect, useState } from 'react';
import Tooltip from '../partials/Tips';
import { Col } from 'react-bootstrap';
import API from '../../utils/apiHelper'
import { Link } from 'react-router-dom';
import SavedFooter from '../partials/SavedFooter'

function Saved(props) {
    const [memes, setMemes] = useState([])
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [selected, setSelected] = useState([]);

    function removeSelection(meme) {

        console.log(meme.tag);
        console.log('deselected');
        let filteredMemes = [...memes.filter(e => e.id !== meme.id)];
        // console.log(e.id)
        setMemes(filteredMemes);
        console.log(memes);
    };

    function addSelection(meme) {

        if (!memes.some(e => e.id === meme.id)) {
            setMemes([...memes, { id: meme.id, tag: meme.tag, image: meme.image }]);
            console.log(memes);
            console.log(meme.tag + ' ' + 'added to selected')
        };
    };

    function selectionToggle(e, meme) {
        var element = document.getElementById(e.target.id);
        console.log(e.target.id)
        e.preventDefault();
        if (element.classList.contains('deselected')) {
            addSelection(meme);
            element.classList.toggle('selected');
            element.classList.toggle('deselected');
            console.log(meme.tag + ' ' + 'selected')
        } else {
            removeSelection(meme);
            console.log(meme.tag + ' ' + 'deselected')
            element.classList.toggle('deselected');
            element.classList.toggle('selected');
        }
    }

    useEffect(() => {
        loadMemes()
    }, [])

    // loads all memes and sets them to memes
    function loadMemes() {
        API.getMemes()
            .then(
                (res) => {
                    setIsLoaded(true);
                    setItems(res.data);
                    console.log(res.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

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
                                <Link key={item._id}>
                                    <div className='frame' >
                                        <img className='memeDisplay deselected' loading="lazy" alt={item.tag} id={item._id} src={item.image} onClick={(e) => selectionToggle(e, item)} value={item.tag} />
                                        <p className='memeTitle'><b>{item.tag}</b></p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Col>
                </div>
                <SavedFooter memes={memes} test="test" />
            </>
        );
    };
};


export default Saved;