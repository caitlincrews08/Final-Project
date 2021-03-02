
import React from 'react';
import { Button, Col, Container, Row, } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import API from '../../utils/apiHelper';


function SavedFooter(props) {

    const history = useHistory()




    const deleteMeme = (e) => {
        e.preventDefault()
        //console.log(props.memes);
        //console.log(props.test);

        let allMemes = props.memes;

        let memes = allMemes.map(meme => {
            return meme["id"];
        })

        console.log(memes);
        // for(let i = 0; i < allMemes.length; i++) {
        //     console.log(allMemes[i].id);

        // }
        API.deleteMeme(memes)
            .then(
                props.loadMemes())
            .catch(err => console.log(err))

    };


    return (
        <div className='savedfooter'>
            <div className='footborder'></div>
            <Container fluid className='vertical-center'>
                <Row>
                    <Col>
                        <Link to='/home' >
                            <Button variant='warning' className='Home'><i className='fa fa-home' aria-hidden='true'></i></Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to='/Search'>
                            <Button variant='warning' className='download'><i className='fa fa-download' aria-hidden='true'></i></Button>
                        </Link>
                    </Col>
                    <Col >
                        <Button variant='warning' className='delete' onClick={deleteMeme}><i className='fa fa-trash' aria-hidden='true'></i></Button>
                    </Col>
                    {/* <div className="fb-share-button" data-href="https://memeheim.herokuapp.com/" data-layout="button_count" data-size="small">
                    <Link target="_blank" to="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmemeheim.herokuapp.com%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</Link>
                </div> */}
                </Row>

            </Container>
        </div>
    );
};



export default SavedFooter;