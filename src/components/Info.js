import React from 'react';
import './Main.css';

function Info(props) {
  return (
    <nav className="navbar navbar-light navbar-expand-md" id="nav">
      <div className="container-fluid">
        <div className="navbar-brand" id="TeamName">
          Black Tardis
        </div>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navcol-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-md-flex d-lg-flex d-xl-flex justify-content-md-end justify-content-lg-end justify-content-xl-end"
          id="navcol-1"
        >
          <ul className="nav navbar-nav">
            <li className="nav-item" role="presentation">
              <div className="nav-link active" id="welcomePrint">
                {`${props.nickname}`} 님, 반갑습니다.
              </div>
            </li>
            <li className="nav-item" role="presentation">
              <div
                className="btn btn-primary"
                id="logoutButton"
                type="button"
                onClick={() => {
                  props.logOut();
                  props.changeNickname('guest');
                }}
              >
                Logout
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <div>
    //   this is Info component
    //   <input
    //     type="button"
    //     value="+"
    //     onClick={() => {
    //       props.logOut();
    //     }}
    //   />
    //   <input
    //     type="button"
    //     value="changeNickname"
    //     onClick={(e) => {
    //       e.preventDefault();
    //       // 변경하고자 하는 닉네임을 아래 함수에 인자로 넣어주세요
    //       props.changeNickname('username');
    //     }}
    //   />
    // </div>
  );
}

export default Info;
