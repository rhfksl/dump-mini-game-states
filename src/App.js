import React from 'react';

import { withRouter, Route, Switch } from 'react-router-dom';
import Welcome from './containers/Welcome';
import Signup from './components/Signup';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Welcome />} />
        <Route exact path="/signup" render={() => <Signup />} />
        <Route exact path="/main" render={() => <Main />} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
