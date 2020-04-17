import React from 'react';
import styled from 'styled-components'

const GalleryStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;

    img {
        height: 200px
    }
`;

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: null};
    }

    render() {
        if (this.state.selected == null) {
            return (
                <GalleryStyle>
                    {this.props.images.map(image => <img src={image} onClick={this.handleClick(image)} alt='Portfolio image'/>)}
                </GalleryStyle>
            );
        }
    }

    handleClick(image) {
        return;
    }
}