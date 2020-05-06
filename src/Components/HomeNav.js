import React from 'react';
import styled from 'styled-components'

const NavStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;

    .Current {
        writing-mode: vertical-lr;
        text-orientation: sideways;
        width: 20px;
        padding: 0px;
        border-right: 2px solid #333333;
    }

    .All {
        a:hover {
            text-decoration: none;
        }
        display: flex;
        flex-direction: column;
    }

`

export default class HomeNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currSect: 0};
    };

    componentDidMount() {
        const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        document.addEventListener('scroll', () => {
            const newSect = Math.floor(window.scrollY / vh);
            if (newSect !== this.state.currSect) {
                this.setState({currSect: newSect});
            };
        });
    };

    render() {
        if (this.state.currSect === 0) {
            return (
                <NavStyle>
                    <div className="Current"/>
                </NavStyle>
            )
        };
        const htmlSections = [];
        for (const section of this.props.sections) {
            if (this.props.sections[this.state.currSect] === section) {
                htmlSections.push(<a href={'#'.concat(section)} font-weight='bold'>{section}</a>)
            } else {
                htmlSections.push(<a href={'#'.concat(section)}>{section}</a>)
            }
        }
        return (
            <NavStyle>
                <div className="Current">
                    {this.props.sections[this.state.currSect]}
                </div>
                <div className="All">
                    {htmlSections}
                </div>
            </NavStyle>
        );
    };
};
