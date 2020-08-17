import React from 'react';
import { Jumbotron, Container, Nav, NavItem } from 'react-bootstrap';
import HomeNav from './Components/HomeNav'
import styled from 'styled-components';
import splitSky from './Assets/splitSky.jpg'
import me from './Assets/me.jpg'


const Styles = styled.div`
    #sectContainer {
        overflow: scroll;
        height: 100vh;
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;

        ::-webkit-scrollbar {
            display: none;
        }
    }

    .smallNavigation {
        display: flex;
        flex-direction: row;
        a {
            margin-right: 40px;
            
            :hover {
                text-decoration: none;
            }
        }
    }

    .homeJumbo {
        a {
            color: PowderBlue;
        }
        background: url(${splitSky}) no-repeat fixed center;
        background-size: cover;
        background-position: center;
        min-height: 100vh;
        position: relative;
        padding: 40px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        color: #ededed;

        z-index: 2;
        scroll-snap-align: start;

    }

    section {
        height: 100vh;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        z-index: 0;
        scroll-snap-align: start;
    }
`;

export const Home = () => (
    <Styles>
        <HomeNav sections={['Home', 'About Me', 'My Very Own Website']}></HomeNav>
        <div id="sectContainer">
            <Jumbotron fluid className='homeJumbo' id='Home'>
                <h1>Joshua Fajardo</h1>
                <h2>UC Berkeley EECS/MechE | Photography</h2>
                <div className="smallNavigation">
                    <a href="/projects">Projects</a>
                    <a href="/photography">Photography</a>
                    <a href="/blog">Blog</a>
                </div>
            </Jumbotron>
            <section id='About Me'>
                <img src={me} alt="me!" height='200px'/>
                <div>
                    <h1>Hi, I'm Josh</h1>
                    <p>stuff stuff stuff about me. Scroll down to see some of the work that I'm passionate about.</p>
                </div>
            </section>
            <section id='My Very Own Website'>
                <img src="" alt="Website Logo" height='200px'/>
                <div>
                    <h1>My Very Own Website</h1>
                    <p>What is Web Dev Like?</p>
                    <a href="">View Project&#8594;</a>
                </div>
            </section>
        </div>
    </Styles>
)