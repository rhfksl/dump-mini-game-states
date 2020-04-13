import React from 'react';

import { withRouter, Route, Switch } from 'react-router-dom';
import Welcome from './containers/Welcome';
import Signup from './components/Signup';
import Main from './components/Main';
import Game1 from './components/games/Game1';
import NoticeBoard from './containers/NoticeBoard';
import LeaderBoard from './containers/LeaderBoard';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Welcome />} />
        <Route exact path="/signup" render={() => <Signup />} />
        <Route exact path="/main" render={() => <Main />} />
        <Route exact path="/Game1" render={() => <Game1 />} />
        <Route exact path="/LeaderBoard" render={() => <LeaderBoard />} />
        <Route exact path="/NoticeBoard" render={() => <NoticeBoard />} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
