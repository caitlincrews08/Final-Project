import React, { useEffect, useState } from 'react';
import Tooltip from '../partials/Tips';
import { Col } from 'react-bootstrap';
import API from '../../utils/apiHelper'

import SavedFooter from '../partials/SavedFooter'



function Saved(props) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [memes, setMemes] = useState([])


    useEffect(() => {
        loadMemes()
    }, [])

    function loadMemes() {
        API.getMemes()
            .then(
                (res) => {
                    setIsLoaded(true);
                    setItems(res.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    const removeMeme = (e) => {
        e.preventDefault();

        let pendingDeletion = memes.map(meme => {
            return meme["id"];
        })
        if (isLoaded) {
            setIsLoaded(false);
            console.log(pendingDeletion);
            API.deleteMeme(pendingDeletion)
                .then(() => loadMemes())
                .catch(err => console.log(err));
                pendingDeletion = [];
                console.log(pendingDeletion);
                setMemes([]);
               
        }
    };

    function removeSelection(meme) {
        let filteredMemes = [...memes.filter(target => target.id !== meme._id)];
        setMemes(filteredMemes);
        console.log(filteredMemes);
    };

    function addSelection(meme) {
        if (!memes.some(target => target.id === meme.id)) {
            setMemes([...memes, { id: meme._id, tag: meme.tag, image: meme.image }]);
            // console.log(memes);
            console.log(meme.tag + ' added to selected')
        };
    };

    function selectionToggle(e, meme) {
        var element = document.getElementById(e.target.id);
        e.preventDefault();
        if (element.classList.contains('deselected-d')) {
            addSelection(meme);
            element.classList.toggle('selected-d');
            element.classList.toggle('deselected-d');
            console.log(meme.tag + ' selected')
        } else {
            removeSelection(meme);
            console.log(meme.tag + ' deselected')
            element.classList.toggle('deselected-d');
            element.classList.toggle('selected-d');
        }
    }




    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className='lds-facebook'></div>;
    } else {

        return (
            <>
                <div className='main'>
                    <Col className='mid-section'>
                        <Tooltip />
                        <div className='memeScroller'>
                            {items.map(item => (
                                <div key={item._id}>
                                    <div className='frame' >
                                        <img className='memeDisplay deselected-d' loading='lazy' alt={item.tag} id={item._id} src={item.image} value={item.tag} onClick={(e) => selectionToggle(e, item)} />
                                        <p className='memeTitle'><b>{item.tag}</b></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </div>
                <SavedFooter memes={memes} items={items} test='test' loadMemes={loadMemes} removeMeme={removeMeme} />
            </>
        );
    };
};


export default Saved;