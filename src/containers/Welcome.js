import { connect } from 'react-redux';
import Welcome from '../components/Welcome';

function mapReduxStateToReactProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => {
      dispatch({ type: 'IS_LOGINED' });
    },
    changeNickname: (nickname) => {
      dispatch({ type: 'NICKNAME', nickname });
    },
    changeToken: (accessToken, refreshToken) => {
      dispatch({ type: 'CHANGE_TOKEN', token: { accessToken, refreshToken } });
    },
  };
}

export default connect(mapReduxStateToReactProps, mapDispatchToProps)(Welcome);
