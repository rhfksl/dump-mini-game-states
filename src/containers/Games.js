import { connect } from 'react-redux';
import Games from '../components/Games';

const mapReduxStateToReactProps = (state) => {
  return {
    displayMode: state.displayMode,
    gameList: state.gameList,
    currentGame: state.currentGame,
  };
};

export default connect(mapReduxStateToReactProps)(Games);
