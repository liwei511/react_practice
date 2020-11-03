import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import TicTacToe from './TicTacToe';
import FilterableProductTable from './FilterableProductTable';

class Base extends Component {
  render() {
    return (
      <>
        <h1>入门</h1>

        <div>
          <ul>
            <li>
              <Link to="/base/tictactoe">1、井字棋</Link>
              <Link to="/base/filterableproducttable">2、产品列表</Link>
            </li>
          </ul>
        </div>
        <Route path="/base/tictactoe" component={TicTacToe} />
        <Route path="/base/filterableproducttable" component={FilterableProductTable} />
      </>
    )
  }
}

export default Base;