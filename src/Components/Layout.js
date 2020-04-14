import React from 'react';
import Container from 'react-bootstrap/Container';

// Container prevents from overflowing
export const Layout = (props) => (
    <Container> 
        {props.children}
    </Container>
)