import React, { useEffect, useState } from 'react';
import Tooltip from '../partials/Tips';
import { Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import Refresh from '../../assets/Refresh.png'
import SearchFooter from '../partials/SearchFooter'
import API from '../../utils/apiHelper'


function Search(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        API.queueMemes()
            .then(res => res.json())
            .then(
                (res) => {
                    setIsLoaded(true);
                    setItems(res.memes);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    function removeSelection(meme) {
        let filteredMemes = [...selected.filter(target => target.id !== meme.title)];
        setSelected(filteredMemes);
        // console.log(selected);
    };

    function addSelection(meme) {
        if (!selected.some(target => target.id === meme.title)) {
            setSelected([...selected, { id: meme.title, tag: meme.title, image: meme.url }]);
            // console.log(selected);
            console.log(meme.title + ' added to selected')
        };
    };

    function selectionToggle(e, meme) {
        var element = document.getElementById(e.target.id);
        e.preventDefault();
        if (element.classList.contains('deselected')) {
            addSelection(meme);
            element.classList.toggle('selected');
            element.classList.toggle('deselected');
            console.log(meme.title + ' selected')
        } else {
            removeSelection(meme);
            console.log(meme.title + ' deselected')
            element.classList.toggle('deselected');
            element.classList.toggle('selected');
        }
    }

    const history = useHistory()
    const saveMeme = (e) => {
        e.preventDefault()
        console.log(selected);

        API.saveMeme(selected)
            .then(
                history.push('/Saved')
            )
            .catch(err => console.log(err));
    }

    function getNew() {
        setItems([]);
        API.queueMemes()
            .then(res => res.json())
            .then(
                (res) => {
                    setIsLoaded(true);
                    setItems(res.memes);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }
    // function DLHandler(props) {
    //     const urls = selected.map((selection => selection.image));
    //     console.log('click')


    //     urls.forEach(function (value, idx) {
    //         const response = {
    //             file: value,
    //         };
    //         setTimeout(() => {
    //             window.location.href = response.file;
    //         }, idx * 100)

    //     })
    // };
    // downlaod all from array

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
                                <div key={index}>
                                    <div className='frame' >
                                        <img className='memeDisplay deselected' loading="lazy" alt={item.name} id={item.title} src={item.url} onClick={(e) => selectionToggle(e, item)} value={item.title} />
                                        <p className='memeTitle'>{item.title}</p>
                                    </div>
                                </div>
                            ))}
                            <Link to='/Search' key='last'>
                                <div className='frame'>
                                    <img className='memeDisplay' alt='Refresh Button' src={Refresh} onClick={getNew} />
                                    <p className='memeTitle'><b>Press to Refresh Images</b></p>
                                </div>
                            </Link>
                        </div>
                    </Col>
                </div>
                <SearchFooter selected={selected} test="test" saveMeme={saveMeme} />
            </>
        );
    };
}


export default Search;

