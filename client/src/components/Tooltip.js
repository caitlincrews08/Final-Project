import React from 'react';
import { Container, Row } from 'react-bootstrap/';

function Tooltip() {

    return (
        <Container>
            <Row className='tooltip'>
                <p>Hints and descriptions will populate(fade animation) here onhover of all clickable elements <em>(and possibly an easter egg that displays inspirational and/or funny quotes and sayings)</em> </p>
                <p> {/*{</p><div onMouseOver={ () => this.props.onMouseOver }>}*/}</p>
            </Row>
        </Container>
    );
};

export default Tooltip;