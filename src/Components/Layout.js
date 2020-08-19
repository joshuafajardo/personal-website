import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navigation } from './Navigation';

// Container prevents from overflowing
export const Layout = (props) => (
    <div>
        <Navigation/>
        <Container> 
            {props.children}
        </Container>
    </div>
)