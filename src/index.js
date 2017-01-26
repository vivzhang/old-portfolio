import Profile from './components/Profile.jsx';
import About from './components/About.jsx';
import Nav from './components/Nav.jsx';
import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDom.render ((
  <Router history={browserHistory}>
    <Route path='/' component={Profile}>
    </Route>
  </Router>
), document.getElementById('profile'));
