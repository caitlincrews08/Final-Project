// import React, { useEffect, useState } from 'react';
// import Tooltip from '../partials/Tips';
// import { Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import X from '../../assets/X.png'
// import SearchFooter from '../partials/SearchFooter'
// import LoadScroller from '../partials/LoadScroller';




// function LoadScroller(props) {
//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [items, setItems] = useState([]);

//     useEffect(() => {
//         fetch('https://reddit-meme-api.herokuapp.com/20')
//             .then(res => res.json())
//             .then(
//                 (res) => {
//                     setIsLoaded(true);
//                     setItems(res.memes);
//                     console.log(res.memes);
//                 },
//                 (error) => {
//                     setIsLoaded(true);
//                     setError(error);
//                 }
//             )
//     }, [])
//     if (error) {
//         return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//         return <div>Loading...</div>;
//     } else {

//         return (
//             <>
//                 <div className='main'>
//                     <Col className='mid-section'>

//                         <Tooltip />

//                         <div className='memeScroller'>
//                             {items.map((item, index) => (
//                                 <Link to="" key={index}>
//                                     <div className='frame' >
//                                         <img className='memeDisplay deselected' loading="lazy" alt={item.name} id={item.title} src={item.url} onClick={(e) => selectionToggle(e, item)} value={item.title} />
//                                         <p className='memeTitle'><b>{item.title}</b></p>
//                                     </div>
//                                 </Link>
//                             ))}
//                             <div key='last' className='frame'>
//                                 <img className='memeDisplay' alt='red X' src={X} />
//                                 <p className='memeTitle'><b>No more images to load</b></p>
//                             </div>
//                         </div>
//                     </Col>
//                 </div>
//                 <SearchFooter selected={selected} test="test" />
//             </>
//         );
//     };
// }


// export default LoadScroller;