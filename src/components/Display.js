import React from 'react';
import LeaderBoard from '../containers/LeaderBoard';
import NoticeBoard from '../containers/NoticeBoard';

// path분기 필요 Game, NoticeBoard, LeaderBoard
function Display() {
  return (
    <div>
      this is Display component
      <LeaderBoard />
      <NoticeBoard />
    </div>
  );
}

export default Display;
