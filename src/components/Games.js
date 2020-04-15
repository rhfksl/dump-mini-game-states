import React, { Component } from 'react';
import gameComponents from './games/gameComponents/index';
import './Games.css';

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { GameDisplay } = gameComponents;

    return (
      <div id="minigamesdisplay">
        <GameDisplay />
      </div>
    );
  }
}

export default Games;
