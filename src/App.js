import React from 'react';

import { withRouter, Route, Switch } from 'react-router-dom';
import Welcome from './containers/Welcome';
import Main from './components/Main';
import Signup from './components/Signup';

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
