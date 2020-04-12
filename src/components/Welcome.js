import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Welcome.css';

function Welcome(props) {
  return (
    <section id="BG">
      <nav class="navbar navbar-light navbar-expand-md" id="nav">
        <div class="container-fluid">
          <a class="navbar-brand" id="TeamName" href="!#">
            Black Tardis
          </a>
        </div>
      </nav>
      <div>
        <div>
          <section id="leftCon">
            <div id="BTImg"></div>
            <Link
              class="btn btn-primary d-xl-flex"
              id="withoutLogin"
              type="button"
              onClick={() => {
                props.changeNickname('guest');
                props.history.push('main');
              }}
            >
              Let's Play!! (without Login)
            </Link>
          </section>
        </div>
        <div>
          <section id="rightCon">
            <input type="text" id="IDbox" placeholder="ID 를 입력하세요" />
            <input type="text" id="PWbox" placeholder="PW 를 입력하세요" />
            <Link
              class="btn btn-primary d-xl-flex"
              id="loginButton"
              type="button"
              onClick={() => {
                // store의 isLogined 상태 변경
                props.login();
                // 아래 함수를 통해 store의 닉네임 변경 후 입장.
                props.changeNickname('ㅆㅂ..');
                // main페이지로 이동
                props.history.push('main');
              }}
            >
              Let's Play!! (Login)
            </Link>
            <Link
              class="btn btn-primary d-xl-flex"
              id="signupbutton"
              type="button"
              onClick={() => {
                props.history.push('signup');
              }}
            >
              Sign Up :)
            </Link>
          </section>
        </div>
      </div>
    </section>
    // <div>
    //   this is Welcome component
    //   {/* 아래 Link Component를 이용하여 회원가입 창으로 이동하세요 */}
    //   <Link to="/signup">회원 가입을 하러 가즈아!!</Link>
    //   {/* 로그인 성공 시 history.push를 이용하여 main 창으로 이동하세요 */}
    //   <button
    //     type="button"
    //     onClick={() => {
    //       // store의 isLogined 상태 변경
    //       props.login();
    //       // 아래 함수를 통해 store의 닉네임 변경 후 입장.
    //       props.changeNickname('ㅆㅂ..');
    //       // main페이지로 이동
    //       props.history.push('main');
    //     }}
    //   >
    //     로그인 성공시 setState변경
    //   </button>
    //   {/* guest로 입장 시 아래 링크를 이용하여 main 창으로 이동하세요 */}
    //   <Link to="/main">guest 로그인 하러 가즈아!!</Link>
    // </div>
  );
}

export default withRouter(Welcome);
