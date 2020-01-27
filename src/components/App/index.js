import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainPage from '../MainPage';

const App = () => (
  <Router>
    <Switch>
      <Route
        exact
        path='/'
        component={MainPage}
      />
      <Redirect to='/' />
    </Switch>
  </Router>
);

export default App;
