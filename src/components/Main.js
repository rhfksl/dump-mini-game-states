import React from 'react';
import { withRouter } from 'react-router-dom';
import Display from '../containers/Display';
import Info from '../containers/Info';
import Menu from '../containers/Menu';
import './Main.css';

function Main(props) {
  return (
    <section id="BG">
      <Info />
      <div id="wrapper">
        <Menu />
        <Display />
      </div>
    </section>
  );
}

export default withRouter(Main);
