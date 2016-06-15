import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './views/Layout';
import Home from './views/Home/Home';
import About from './views/About/About';

export default function Root() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Layout} >
          <IndexRoute component={Home} />
          <Route path="/apropo" component={About} />
      </Route>
    </Router>
  );
}
