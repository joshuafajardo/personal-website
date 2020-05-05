import React from 'react';
import { Jumbotron, Container, Nav, NavItem } from 'react-bootstrap';
import HomeNav from './Components/HomeNav'
import "aos/dist/aos.css";
import styled from 'styled-components';
import splitSky from './Assets/splitSky.jpg'
import me from './Assets/me.jpg'

const Styles = styled.div`
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
    
    .mainNavigation {
        
    }

    .homeJumbo {
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
        <HomeNav sections={['Home', 'About Me', 'Project Name']}></HomeNav>
        <Jumbotron fluid className='homeJumbo' id='Home'>
            <h1>Joshua Fajardo</h1>
            <h2>UC Berkeley EECS | Photography</h2>
            <div className="smallNavigation">
                <a href="/projects">Projects</a>
                <a href="/photography">Photography</a>
                <a href="/blog">Blog</a>
            </div>
        </Jumbotron>
        <section data-aos="fade-up" data-aos-offset="400" data-aos-delay="50" data-aos-duration="1200" id='About Me'>
            <img src={me} alt="me!" height='200px'/>
            <div>
                <h1>Hi, I'm Josh.</h1>
                <p>stuff stuff stuff about me. Scroll down to see some of the work that I'm passionate about.</p>
            </div>
        </section>
        <section>
            <img src="" alt="Project 1" height='200px' id='Project Name'/>
            <div>
                <h1>My Project</h1>
                <p>How can we...?</p>
                <a href="">View Project&#8594;</a>
            </div>
        </section>
    </Styles>
)