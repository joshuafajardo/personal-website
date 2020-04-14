import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

export const Home = () => (
    <div>
        <h1>JOSHUA FAJARDO</h1>
        <h2>UC Berkeley EECS | Photography</h2>
        <Nav activeKey="/">
            <NavItem> <Nav.Link href="/blog">Blog</Nav.Link></NavItem>
            <NavItem> <Nav.Link href="/photography">Photography</Nav.Link></NavItem>
            <NavItem> <Nav.Link href="/about">About</Nav.Link></NavItem>
        </Nav>
    </div>
)