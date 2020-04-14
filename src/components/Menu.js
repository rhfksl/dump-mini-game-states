import React from 'react';
import './Main.css';

function Menu(props) {
  return (
    <div id="sidebar-wrapper">
      <ul className="sidebar-nav">
        <li className="d-xl-flex sidebar-brand" id="BTImg"></li>
        <li>
          <div id="menuGame" type="button" /*onclick={() => props}*/>
            Game
          </div>
        </li>
        <li>
          <div id="menuScore" type="button">
            Score board
          </div>
        </li>
        <li>
          <div id="menuNotice" type="button">
            Notice board
          </div>
        </li>
      </ul>
    </div>
    // <div id="top">
    //   This is Menu component
    //   <div>
    //     This is GameTap
    //     <input
    //       type="button"
    //       value="Click"
    //       onClick={() => {
    //         props.changeDisplayMode('Game');
    //       }}
    //     />
    //   </div>
    //   <div>
    //     This is NoticeBoard
    //     <input
    //       type="button"
    //       value="Click"
    //       onClick={() => {
    //         props.changeDisplayMode('NoticeBoard');
    //       }}
    //     />
    //   </div>
    //   <div>
    //     This is LeaderBoard
    //     <input
    //       type="button"
    //       value="Click"
    //       onClick={() => {
    //         props.changeDisplayMode('LeaderBoard');
    //       }}
    //     />
    //   </div>
    // </div>
  );
}

export default Menu;
