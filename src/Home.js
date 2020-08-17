import React from 'react';
import { Jumbotron, Container, Nav, NavItem } from 'react-bootstrap';
import HomeNav from './Components/HomeNav';
import ScrollSnap from 'scroll-snap';
import AOS from 'aos';
import "aos/dist/aos.css";
import styled from 'styled-components';
import splitSky from './Assets/splitSky.jpg'
import me from './Assets/me.jpg'

const Styles = styled.div`
    #sectContainer {
        overflow: scroll;
        scroll-behavior: smooth;
        // scroll-snap-type: y mandatory;
        height: 100vh;

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
        // scroll-snap-align: start;

    }

    section {
        // scroll-snap-align: start;
        height: 100vh;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        z-index: 0;
    }
`;

export default class Home extends React.Component {
    sectContainer = React.createRef()

    constructor(props) {
        super(props);
    };

    bindScrollSnap() {
        const snapElement = new ScrollSnap(this.sectContainer.current, {
          snapDestinationY: '100vh',
        })
        snapElement.bind(()=>null);
    }

    componentDidMount() {
        this.bindScrollSnap()
    }

    render() {
        return (
            <Styles>
                <HomeNav sections={['Home', 'About Me', 'Project 1']}></HomeNav>
                <div id="sectContainer" ref={this.sectContainer}>
                    <Jumbotron fluid className='homeJumbo' id='Home'>
                        <h1>Joshua Fajardo</h1>
                        <h2>UC Berkeley EECS | Photography</h2>
                        <div className="smallNavigation">
                            <a href="/projects">Projects</a>
                            <a href="/photography">Photography</a>
                            <a href="/blog">Blog</a>
                        </div>
                    </Jumbotron>
                    <section data-aos="fade-zoom-out" data-aos-offset="500" data-aos-delay="50" data-aos-duration="1200" id='About Me'>
                        <img src={me} alt="me!" height='200px'/>
                        <div>
                            <h1>Hi, I'm Josh</h1>
                            <p>stuff stuff stuff about me. Scroll down to see some of the work that I'm passionate about.</p>
                        </div>
                    </section>
                    <section id='Project 1'>
                        <img src="" alt="Project 1" height='200px'/>
                        <div>
                            <h1>My Project</h1>
                            <p>How can we...?</p>
                            <a href="">View Project&#8594;</a>
                        </div>
                    </section>
                </div>
            </Styles>
        )
    }
    
};