import React from 'react';
import { Jumbotron, Container, Nav, NavItem } from 'react-bootstrap';
import "aos/dist/aos.css";
import styled from 'styled-components';
import splitSky from './Assets/splitSky.jpg'
import me from './Assets/me.jpg'

const Styles = styled.div`
    .homeJumbo {
        background: url(${splitSky}) no-repeat fixed center;
        background-size: cover;
        background-position: center;
        min-height: 100vh;
        position: relative;
        overflow: hidden;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #ededed;
    }

    section {
        height: 100vh;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }
`;

export const Home = () => (
    <Styles>
        <Jumbotron fluid className='homeJumbo'>
            <h1>Joshua Fajardo</h1>
            <h2>UC Berkeley EECS | Photography</h2>
            <Nav activeKey="/">
                <NavItem> <Nav.Link href="/projects">Projects</Nav.Link></NavItem>
                <NavItem> <Nav.Link href="/photography">Photography</Nav.Link></NavItem>
                <NavItem> <Nav.Link href="/blog">Blog</Nav.Link></NavItem>
            </Nav>
        </Jumbotron>
        <section data-aos="fade-up">
            <img src={me} alt="me!" height='200px' />
            <div>
                <h1>Hi, I'm Josh.</h1>
                <p>stuff stuff stuff about me. Scroll down to see some of the work that I'm passionate about.</p>
            </div>
        </section>
        <section>
            <img src="" alt="Project 1" height='200px' />
            <div>
                <h1>My Project</h1>
                <p>How can we...?</p>
                <a href="">View Project&#8594;</a>
            </div>
        </section>
    </Styles>
)