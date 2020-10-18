import React from 'react';
import styled from 'styled-components';
import { Layout } from '../Components/Layout';
import ChessVsAI from '../Components/ChessVsAI';
import Chessboard from 'chessboardjsx'

const Styles = styled.div`
    a {
        color: PowderBlue;
    }
    scroll-behavior: smooth;

    
`

export default class AtomicBot extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <Layout>
                <Styles>
                    <div>
                        <h1>AtomicBot!</h1>
                        <p>A bot that will play atomic chess with you</p>
                    </div>
                    <ChessVsAI>
                        {({ position, onDrop }) => (
                            <Chessboard
                            position={position}
                            onDrop={onDrop}
                            />
                        )}
                    </ChessVsAI>
                    <h2>About the Project</h2>
                    <p>
                        info!
                    </p>

                    <h2>Collaborators</h2>
                    <p>
                        Noah Adhikari, Joshua Fajardo
                    </p>
                </Styles>
            </Layout>
        )
    }
};
