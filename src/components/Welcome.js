import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Welcome.css';
import axios from 'axios';

function Welcome(props) {
  return (
    <section id="BG">
      {/* 아래 changeToken함수를 이용해 state를 변경하세요
      첫 번째 인자는 accessToken, 두 번째 인자는 refreshToken을 넣으면 
      store의 state가 변경됩니다.
      함수 사용후 아래 div는 지워주세용~
      */}
      {/* <div
        onClick={(e) => {
          e.preventDefault();
          props.changeToken('asdf', 'qwer');
        }}
      >
        연습용 버튼
      </div> */}
      <div>
        <div>
          <section id="leftCon">
            <div id="BT"></div>
            <Link
              to="main"
              id="withoutLogin"
              type="button"
              onClick={() => {
                props.changeNickname('guest');
              }}
            >
              Let's Play!!
              <br />
              (without Login)
            </Link>
          </section>
        </div>
        <div>
          <section id="rightCon">
            <div id="welTeamName">Black Tardis</div>
            <input type="text" id="IDbox" placeholder="ID 를 입력하세요" />
            <input type="password" id="PWbox" placeholder="PW 를 입력하세요" />
            <div
              id="loginButton"
              type="button"
              onClick={() => {
                // store의 isLogined 상태 변경
                props.login();
                // 아래 함수를 통해 store의 닉네임 변경 후 입장.
                let obj = { user: {} };
                obj.user.username = document.querySelector('#IDbox').value;
                obj.user.password = document.querySelector('#PWbox').value;

                axios.defaults.withCredentials = true;
                axios
                  .post('http://13.209.41.64:4100/users/signin', obj)
                  .then((res) => {
                    console.log(res);

                    props.changeNickname(res.data.user.nickname);
                    props.changeToken(
                      res.data.accessToken,
                      res.data.refreshToken,
                    );
                    // main페이지로 이동
                    console.log(props.changeNickname);
                    props.history.push('main');
                  })
                  .catch((error) => {
                    if (error.response.status === 401) {
                      alert('Password를 확인해주세요');
                    }
                    if (error.response.status === 404) {
                      alert('회원가입 해주세요');
                    }
                    console.log('여기다 여기', error.response);
                  });
              }}
            >
              Let's Play!!
              <br />
              (Login)
            </div>
            <Link to="signup" id="signupbutton" type="button">
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
