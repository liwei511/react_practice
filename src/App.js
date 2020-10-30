import './App.css';
import React, {lazy, Component, Suspense} from 'react';
import {BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
const Home = lazy(() => import('./routes/Home'))
const About = lazy(() => import('./routes/About'))

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">首页</Link>
            </li><li>
            <Link to="/about">关于</Link>
          </li>
        </ul>
        <Router>
          <Switch>
            <Suspense fallback={<div>Loading...</div>}></Suspense>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;