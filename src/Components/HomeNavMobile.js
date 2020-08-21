import React from 'react';
import styled from 'styled-components';
import Fade from 'react-bootstrap/Fade';

const NavStyle = styled.div`
    display: flex;
    flex-direction: Column;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    height: 20%;
    width: 100%;
    z-index: 1;
`

export default class HomeNavMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currSect: 0,
                      show: false};
    };

    getSections(index) {
        const sections = this.props.sections;
        const numSections = this.props.sections.length;
        var curr = 0;
        for (var i = 0; i < numSections; i++) {
            curr += sections[i][1].length;
            if (curr > index) {
                return i;
            }
        }
    }

    componentDidMount() {
        const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        document.getElementById('sectContainer').addEventListener('scroll', () => {
            var newSect = Math.floor(document.getElementById('sectContainer').scrollTop / vh);
            newSect = this.getSections(newSect);
            if (!(newSect === this.state.currSect)) {
                this.setState({currSect: newSect});
            };
            this.setState({show: newSect !== 0});
        });
    };

    render() {
        return (
            <Fade in={this.state.show}>
                <NavStyle>
                    {<h2 style={{color: 'PowderBlue'}}>{this.props.sections[this.state.currSect][0]}</h2>}
                </NavStyle>
            </Fade>
        );
    };
};
