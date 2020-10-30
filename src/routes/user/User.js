import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Reg from './Reg';
import Login from './Login';

class User extends Component {
  render() {
    return (
      <>
        <h1>用户中心</h1>
        <ul>
          <li>
            <Link to="/user/reg">注册</Link>
          </li>
          <li>
            <Link to="/user/login">登录</Link>
          </li>
        </ul>
        <Route path="/user/reg" component={Reg}></Route>
        <Route path="/user/login" component={Login}></Route>
      </>
    )
  }
}

export default User;