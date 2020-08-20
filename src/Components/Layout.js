import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { Navigation } from './Navigation';

const LayoutStyle = styled.div`
    padding: 0px;
    height: 100vh;
    width: 100vw;
`

// Container prevents from overflowing
export const Layout = (props) => (
    <LayoutStyle>
        <Navigation/>
        {props.children}
    </LayoutStyle>
)