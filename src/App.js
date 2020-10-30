import './App.css';
import React, { lazy, Component, Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
const Home = lazy(() => import('./routes/Home'))
const About = lazy(() => import('./routes/About'))
const User = lazy(() => import('./routes/user/User'))
const Error = lazy(() => import('./routes/Error'))

class App extends Component {
  render() {
    return (
      // {/* 配置路由规则  exact表示精确匹配，防止匹配其他页面的时候匹配到/，也就是首页*/}
      // {/* Switch表示如果匹配到了路由，就不再往下面匹配了，如果不写Switch，则一直会匹配到404页面 */}
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <div>
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
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/user" component={User} />
            <Route component={Error}></Route>
          </Switch>
        </Suspense>
      </Router>
    )
  }
}

export default App;