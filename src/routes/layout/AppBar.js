import './AppBar.css'
import { Component } from 'react';
import { Link } from 'react-router-dom';

class AppBar extends Component {
  render() {
    return (
      <div className="bar">
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/about">关于</Link>
          </li>
          <li>
            <Link to="/user">用户中心</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default AppBar;