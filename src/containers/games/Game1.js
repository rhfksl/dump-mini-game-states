import { connect } from 'react-redux';
import Game1 from '../../components/games/Game1';

function mapReduxStateToReactProps(state) {
  return {
    gametype: state.gametype,
    nickname: state.nickname,
  };
}
export default connect(mapReduxStateToReactProps)(Game1);
