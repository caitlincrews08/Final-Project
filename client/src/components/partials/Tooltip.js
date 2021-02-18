import React from 'react';
import { Row } from 'react-bootstrap';
// import { Col, Container, Row } from 'react-bootstrap/';

function Tooltip() {

    return (
        // <Col>
            <Row className='tooltip sticky'>
        <div >
                <p>Hints and descriptions will populate(fade animation) here onhover of all clickable elements (and possibly an easter egg that displays inspirational and/or funny quotes and sayings) </p>
                {/*{</p><div onMouseOver={ () => this.props.onMouseOver }>}*/}
        </div>        
           </Row>
        // </Col>
    );
};

export default Tooltip;