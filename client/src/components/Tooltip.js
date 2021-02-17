import React from 'react';
import { Col, Container, Row } from 'react-bootstrap/';

function Tooltip() {

    return (
        // <Col>
            // <Col className='tooltip'>
        <div className='sticky'>
                <p>Hints and descriptions will populate(fade animation) here onhover of all clickable elements (and possibly an easter egg that displays inspirational and/or funny quotes and sayings) </p>
                {/*{</p><div onMouseOver={ () => this.props.onMouseOver }>}*/}
        </div>        
            // </Col>
        // </Col>
    );
};

export default Tooltip;