import './Body.css';
import React, { lazy, Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
const Home = lazy(() => import('../Home'))
const About = lazy(() => import('../About'))
const User = lazy(() => import('../user/User'))
const Error = lazy(() => import('../Error'))

class Body extends Component {
  // 配置路由规则  exact表示精确匹配，防止匹配其他页面的时候匹配到/，也就是首页
  // Switch表示如果匹配到了路由，就不再往下面匹配了，如果不写Switch，则一直会匹配到404页面
  render() {
    return (
      <div className="body" key={this.props.location.key}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/user" component={User} />
              <Route component={Error}></Route>
            </Switch>
          </Suspense>
        </Router>
      </div>
    )
  }
}

export default withRouter(Body);