import React from 'react';
import styled from 'styled-components';
import Fade from 'react-bootstrap/Fade';
import Collapse from 'react-bootstrap/Collapse';

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
        display: flex;
        flex-direction: column;
        justify-content: center;
        vertical-align: middle;
        height: 85%;
        padding-left: 20px;
        border-left: thin solid #AAAAAA;
    }

    a {
        color: PowderBlue;
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
        this.state = {currSect: [0, 0],
                      show: false};
    };

    getSections(index) {
        const sections = this.props.sections;
        const numSections = this.props.sections.length;
        var curr = 0;
        for (var i = 0; i < numSections; i++) {
            curr += sections[i][1].length;
            if (curr > index) {
                curr -= sections[i][1].length;
                curr = index - curr;
                return [i, curr];
            }
        }
    }

    componentDidMount() {
        const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        document.getElementById('sectContainer').addEventListener('scroll', () => {
            var newSect = Math.floor(document.getElementById('sectContainer').scrollTop / vh);
            newSect = this.getSections(newSect);
            if (!(newSect[0] === this.state.currSect[0] && newSect[1] === this.state.currSect[1])) {
                this.setState({currSect: newSect});
            };
            this.setState({show: newSect[0] !== 0});
        });
    };

    componentWillUnmount() {
        document.getElementById('sectContainer').removeEventListener('scroll', this.getSections);
    }


    render() {
        var allSections = this.props.sections;
        const majorSections = [];
        var subSections;
        var majorSect;
        var minorSects;
        var majorHref;
        var isCurrentMajor;
        for (const section of allSections) {
            subSections = [];
            majorSect = section[0];
            minorSects = section[1];
            majorHref = minorSects[0] || majorSect;
            isCurrentMajor = allSections[this.state.currSect[0]][0] === majorSect;
            if (isCurrentMajor) {
                majorSections.push(<a href={'#'.concat(majorHref)} style={{color: '#84a8ac'}}>{majorSect}</a>);
            } else {
                majorSections.push(<a href={'#'.concat(majorHref)}>{majorSect}</a>);
            }
            if (minorSects[0] !== null) {
                let length = minorSects.length;
                let subSection;
                for (var i = 0; i < length; i++) {
                    subSection = minorSects[i];
                    if (isCurrentMajor && i === this.state.currSect[1]) {
                        subSections.push(<a href={'#'.concat(subSection)} style={{color: '#84a8ac'}}> - {subSection}</a>);
                    } else {
                        subSections.push(<a href={'#'.concat(subSection)}> - {subSection}</a>);
                    }
                    subSections.push(<br/>);
                }
                majorSections.push(
                    <Collapse in={isCurrentMajor}>
                        <div>
                            {subSections}
                        </div>
                    </Collapse>
                )
            }
        }
        return (
            <Fade in={this.state.show}>
                <NavStyle>
                    <div className="Current">
                        {allSections[this.state.currSect[0]][0]}
                    </div>
                    <div className="All">
                        {majorSections}
                    </div>
                </NavStyle>
            </Fade>
        );
    };
};
