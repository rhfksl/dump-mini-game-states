import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import Display from '../containers/Display';
import Info from '../containers/Info';
import Menu from '../containers/Menu';
import './Main.css';

function Main(props) {
  return (
    // <div>
    //   this is Main component
    //   <Info />
    //   <Menu />
    //   <Display />
    <section id="BG">
      <Info />
      <div id="wrapper">
        <Menu />
        <Display />
      </div>
    </section>
    // </div>
  );
}

// $('#menu-toggle').click(function (e) {
//   e.preventDefault();
//   $('#wrapper').toggleClass('toggled');
// });

export default withRouter(Main);
