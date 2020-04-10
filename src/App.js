import React from 'react';
// 임시로 가져와보자
import { Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      Hello World
      {/* <Signup /> */}
      <Route exact path="/welcome" render={() => <Welcome />} />
      <Route exact path="/signup" render={() => <Signup />} />
      {/* <Welcome /> */}
    </div>
  );
}

export default App;
