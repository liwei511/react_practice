import './Layout.css';
import {Component} from 'react';
import AppBar from './AppBar';
import Body from './Body';

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <AppBar></AppBar>
        <Body></Body>
      </div>
    )
  }
}

export default Layout;