import React from 'react';
import {Row} from 'react-bootstrap/';

function Tooltip() {

    return (
      
            <Row className='tooltip'>
                <p>Hints and descriptions will populate(fade animation) here onhover of all clickable elements <em>(and possibly an easter egg that displays inspirational and/or funny quotes and sayings)</em> </p>
                <p> {/*{</p><div onMouseOver={ () => this.props.onMouseOver }>}*/}</p>
            </Row>
      
    );
};

export default Tooltip;