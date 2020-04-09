import React from 'react';

function Menu(props) {
  return (
    <div>
      This is Menu component
      <div>
        This is GameTap
        <input
          type="button"
          value="Click"
          onClick={() => {
            props.changeDisplayMode('Game');
          }}
        />
      </div>
      <div>
        This is NoticeBoard
        <input
          type="button"
          value="Click"
          onClick={() => {
            props.changeDisplayMode('NoticeBoard');
          }}
        />
      </div>
      <div>
        This is LeaderBoard
        <input
          type="button"
          value="Click"
          onClick={() => {
            props.changeDisplayMode('LeaderBoard');
          }}
        />
      </div>
    </div>
  );
}

export default Menu;
