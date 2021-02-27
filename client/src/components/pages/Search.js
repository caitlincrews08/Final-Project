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

    function removeSelection(meme) {
        function notMe() {
            return !selected.some(e => e.id === meme.id);
        }

        console.log(meme.id);
        console.log('deselected');
        let filteredMemes = [...selected.filter(notMe)];
        setSelected(filteredMemes);
        console.log(filteredMemes);
    };

    function addSelection(meme) {

        if (!selected.some(e => e.id === meme.id)) {
            setSelected([...selected, { id: meme.id, tag: meme.name, image: meme.url }]);
            console.log(selected);
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
        fetch(' http://memebuild.com/api/1.0/getRecentMemes?limit=100', { 
            method: 'GET',
            credentials: "include",
            headers: {
                'API-KEY': '1ab967b253352c7063b5669a0d4b1f',
                'Content-Type': 'application/json'
                
    }
})
            .then(res => res.json())
            .then(
                (res) => {
                    setIsLoaded(true);
                    setItems(res.data);
                    console.log(res.data)
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
                                        <img className='memeDisplay deselected' alt={item.name} id={item.name} src={item.url} onClick={(e) => selectionToggle(e, item)} value={item.id} />
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
                <SearchFooter selected={selected} test="test" />
            </>
        );
    };
}

export default Search;