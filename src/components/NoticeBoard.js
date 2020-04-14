import React from 'react';

function NoticeBoard(props) {
  return (
    <div>
      this is NoticeBoard component
      <input
        type="button"
        value="Click"
        onClick={() => {
          props.changeArticles([1, 2, 3]);
        }}
      />
    </div>
  );
}

export default NoticeBoard;
