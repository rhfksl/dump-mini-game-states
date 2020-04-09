import React from 'react';
import Display from '../containers/Display';
import Info from '../containers/Info';
import Menu from '../containers/Menu';

function Main() {
  return (
    <div>
      this is Main component
      <Info />
      <Menu />
      <Display />
    </div>
  );
}

export default Main;
