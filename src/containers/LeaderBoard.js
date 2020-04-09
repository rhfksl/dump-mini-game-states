import { connect } from 'react-redux';
import LeaderBoard from '../components/LeaderBoard';

function mapReduxStateToReactProps(state) {
  return {
    nickname: state.nickname,
    leaderBoard: state.leaderBoard,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeLeaderBoard: (leaderBoard) => {
      dispatch({ type: 'LEADER_BOARD', leaderBoard });
    },
  };
}

export default connect(
  mapReduxStateToReactProps,
  mapDispatchToProps,
)(LeaderBoard);
