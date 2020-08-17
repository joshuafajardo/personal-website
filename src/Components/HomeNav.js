import React from 'react';
import styled from 'styled-components'
import Fade from 'react-bootstrap/Fade'

const NavStyle = styled.div`
    .Current {
        writing-mode: vertical-lr;
        text-orientation: sideways;
        text-align: center;
        width: 50px;
        line-height: 50px; //keep this value the same as width
        padding: 0px;
    }

    .All {
        a:hover {
            text-decoration: none;
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        vertical-align: middle;
        height: 85%;
        padding-left: 20px;
        border-left: thin solid #AAAAAA;
    }

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    height: 100%;
    z-index: 1;
`

export default class HomeNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currSect: 0,
                      show: false};
    };

    componentDidMount() {
        const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        document.getElementById('sectContainer').addEventListener('scroll', () => {
            const newSect = Math.floor(document.getElementById('sectContainer').scrollTop / vh);
            if (newSect !== this.state.currSect) {
                this.setState({currSect: newSect});
            };
            if (newSect === 0) {
                this.setState({show: false});
            } else {
                this.setState({show: true});
            };
        });
    };

    render() {
        const htmlSections = [];
        for (const section of this.props.sections) {
            if (this.props.sections[this.state.currSect] === section) {
                htmlSections.push(<a href={'#'.concat(section)} font-weight='bold'>{section}</a>)
            } else {
                htmlSections.push(<a href={'#'.concat(section)}>{section}</a>)
            }
        }
        return (
            <Fade in={this.state.show}>
                <NavStyle>
                    <div className="Current">
                        {this.props.sections[this.state.currSect]}
                    </div>
                    <div className="All">
                        {htmlSections}
                    </div>
                </NavStyle>
            </Fade>
        );
    };
};
