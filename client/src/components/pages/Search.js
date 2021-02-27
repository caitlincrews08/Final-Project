import React, { useEffect, useState } from 'react';
import Tooltip from '../partials/Tips';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import X from '../../assets/X.png'
import SearchFooter from '../partials/SearchFooter'
import axios from 'axios';



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
            setSelected([...selected, { id: meme.id, tag: meme.name, image: meme.url }]);
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

    const key = '1ab967b253352c7063b5669a0d4b1f'

    //     useEffect(() => {
    //         axios.get(' http://memebuild.com/api/1.0/getRecentMemes?limit=100api-key=', { 
    //             method: 'GET',
    //             credentials: "include",
    //             headers: {
    //                 'API-KEY': '1ab967b253352c7063b5669a0d4b1f',
    //                 'Content-Type': 'application/json'

    //     }
    // })
    //             .then(res => res.json())
    //             .then(
    //                 (res) => {
    //                     setIsLoaded(true);
    //                     setItems(res.data);
    //                     console.log(res.data)
    //                 },
    //                 (error) => {
    //                     setIsLoaded(true);
    //                     setError(error);
    //                 }
    //             )
    //     }, [])


        const test = [
            {
                "id": "1",
                "name": "Willy Wonka",
                "file": "willy-wonka"
            },
            {
                "id": "2",
                "name": "Obama",
                "file": "obama"
            },
            {
                "id": "3",
                "name": "Success Kid",
                "file": "success-kid"
            },
            {
                "id": "4",
                "name": "Kid Beer",
                "file": "kid-beer"
            },
            {
                "id": "5",
                "name": "Oh Man",
                "file": "oh-man"
            },
            {
                "id": "6",
                "name": "Why Would You?",
                "file": "why-would-you"
            },
            {
                "id": "7",
                "name": "Yo Dawg",
                "file": "yo-dawg"
            },
            {
                "id": "8",
                "name": "Granny",
                "file": "granny"
            },
            {
                "id": "9",
                "name": "I Don't Always",
                "file": "i-dont-always"
            },
            {
                "id": "10",
                "name": "Bad Luck Brian",
                "file": "bad-luck-brian"
            },
            {
                "id": "11",
                "name": "First World Probs",
                "file": "first-world-probs"
            },
            {
                "id": "12",
                "name": "Evil Kid",
                "file": "evil-kid"
            },
            {
                "id": "13",
                "name": "Dwight",
                "file": "dwight"
            },
            {
                "id": "14",
                "name": "Scumbag Steve",
                "file": "scumbag-steve"
            },
            {
                "id": "15",
                "name": "Over Protective GF",
                "file": "overprotective-gf"
            },
            {
                "id": "16",
                "name": "Tha'd Be Great",
                "file": "that-would-be-great"
            },
            {
                "id": "17",
                "name": "Grumpy Cat",
                "file": "grumpy-cat"
            },
            {
                "id": "18",
                "name": "James Harden",
                "file": "james-harden"
            },
            {
                "id": "19",
                "name": "Kevin Durant",
                "file": "kevin-durant"
            },
            {
                "id": "20",
                "name": "Will Ferrell",
                "file": "will-ferrell"
            },
            {
                "id": "21",
                "name": "Russell Westbrook",
                "file": "russell-westbrook"
            },
            {
                "id": "22",
                "name": "Bubbles",
                "file": "bubbles"
            },
            {
                "id": "23",
                "name": "Good Guy Greg",
                "file": "good-guy-greg"
            },
            {
                "id": "24",
                "name": "Futurama Fry",
                "file": "futurama-fry"
            },
            {
                "id": "25",
                "name": "Socially Awkward Penguin",
                "file": "socially-awkward-penguin"
            },
            {
                "id": "26",
                "name": "Conspiracy Keanu",
                "file": "conspiracy-keanu"
            },
            {
                "id": "27",
                "name": "Matrix",
                "file": "matrix"
            },
            {
                "id": "28",
                "name": "Mr. Bean",
                "file": "mr-bean"
            }
        ]
    // useEffect(() => {
    //     fetch('https://api.imgflip.com/get_memes')
    //         .then(res => res.json())
    //         .then(
    //             (res) => {
    //                 setIsLoaded(true);
    //                 setItems(res.data.memes);
    //             },
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )
    // }, [])

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
                            {test.map(test => (
                                <Link to={test.url} key={test.id}>
                                    <div className='frame' >
                                        <img className='memeDisplay deselected' alt={test.name} id={test.name} src={test.file} onClick={(e) => selectionToggle(e, test)} value={test.id} />
                                        <p className='memeTitle'><b>{test.name}</b></p>
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