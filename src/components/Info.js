import React from 'react';

function Info(props) {
  return (
    <div>
      this is Info component
      <input
        type="button"
        value="+"
        onClick={() => {
          props.logOut();
        }}
      />
      <input
        type="button"
        value="changeNickname"
        onClick={(e) => {
          e.preventDefault();
          // 변경하고자 하는 닉네임을 아래 함수에 인자로 넣어주세요
          props.changeNickname('username');
        }}
      />
    </div>
  );
}

export default Info;
