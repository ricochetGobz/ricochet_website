import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

import Layout from './views/Layout';
import Home from './views/Home/Home';
import About from './views/About/About';


const history = useRouterHistory(createHistory)({
  basename: window.location.pathname,
});

export default function Root() {
  return (
    <Router history={history}>
      <Route path="/" component={Layout} >
          <IndexRoute component={Home} />
          <Route path="/apropo" component={About} />
      </Route>
    </Router>
  );
}
