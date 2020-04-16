import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import styled from 'styled-components';

const NavStyle = styled.div`
    .navbar{
        background-color: #222
    }

    .navbar-brand, .navbar-nav, .navbar-link {
        color: #bbb;

        &.hover{
            color: white;
        }
    }
`;


export const Navigation = () => (
    <NavStyle>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Joshua Fajardo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav"/>
            <Nav classname="ml-auto">
                <NavItem> <Nav.Link href="/projects">Projects</Nav.Link></NavItem>
                <NavItem> <Nav.Link href="/photography">Photography</Nav.Link></NavItem>
                <NavItem> <Nav.Link href="/blog">Blog</Nav.Link></NavItem>
            </Nav>
        </Navbar>
    </NavStyle>
)