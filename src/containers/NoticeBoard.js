import { connect } from 'react-redux';
import NoticeBoard from '../components/NoticeBoard';

function mapReduxStateToReactProps(state) {
  return {
    articles: state.articles,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeArticles: (articles) => {
      dispatch({ type: 'ARTICLES', articles });
    },
  };
}
export default connect(
  mapReduxStateToReactProps,
  mapDispatchToProps,
)(NoticeBoard);
