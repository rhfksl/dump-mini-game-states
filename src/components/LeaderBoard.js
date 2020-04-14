import React from 'react';

function LeaderBoard(props) {
  return (
    <div>
      this is LeaderBoard component
      <input
        type="button"
        value="Click"
        onClick={() => {
          props.changeLeaderBoard([1, 2, 3]);
        }}
      />
    </div>
  );
}

export default LeaderBoard;
