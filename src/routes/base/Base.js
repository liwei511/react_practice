import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import TicTacToe from './TicTacToe'; 

class Base extends Component {
  render() {
    return (
      <>
        <h1>入门</h1>
        <ul>
          <li>
            <Link to="/base/tictactoe">1、井字棋</Link>
          </li>
        </ul>
        <Route path="/base/tictactoe" component={TicTacToe} />
      </>
    )
  }
}

export default Base;