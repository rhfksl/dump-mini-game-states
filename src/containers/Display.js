import { connect } from 'react-redux';
import Display from '../components/Display';

function mapReduxStateToReactProps(state) {
  return {
    displayMode: state.displayMode,
  };
}
export default connect(mapReduxStateToReactProps)(Display);
