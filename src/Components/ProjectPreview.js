import React from 'react';
import styled from 'styled-components'

const previewStyle = styled.div`
    .project{
        
    }

    a {
        text-decoration: none;
    }
`;

export default class ProjectPreview extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <previewStyle>
                <Container className = 'project'>
                    <h1>
                        {this.props.title}
                    </h1>
                    <p>
                        {this.props.info}
                    </p>
                    <a href={this.props.directory}>View Project &#8594;</a>
                </Container>
            </previewStyle>
        );
    }
}