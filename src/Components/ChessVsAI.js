import React, { Component } from "react";
import PropTypes from "prop-types";
import io from 'socket.io-client';

export default class ChessVsAI extends React.Component {
    static propTypes = { children: PropTypes.func };
    constructor(props) {
        super()
        this.onDrop = this.onDrop.bind(this);
        this.state = {fen: "start",
                        waiting: false};
    }

    componentDidMount() {
        this.endpoint = 'https://atomic-chess-bot.herokuapp.com';
        this.socket = io(this.endpoint, {transports: ['websocket'], upgrade: false});
        console.log(this.socket)
        this.socket.on('botMove', (fen) => {
          console.log(fen)
          this.botMove(fen);
        });
        this.socket.on('moveValidation', (valid) => {
            console.log(valid)
            this.moveValidation(valid)
        })
      }


    onDrop({ sourceSquare, targetSquare }) {
        if (this.state.waiting) {
            return
        }
        this.socket.emit('playerMove', {from_square: sourceSquare, to_square: targetSquare});
        this.setState({fen: this.state.fen, waiting: true})
    };

    moveValidation(valid) {
        if (!valid) {
            this.setState({fen: this.state.fen, waiting: false})
        }
    }

    botMove(fen) {
        this.setState( { fen , waiting: false})
    };

    render() {
        const { fen } = this.state;
        return this.props.children({ position: fen, onDrop: this.onDrop });
    };
}