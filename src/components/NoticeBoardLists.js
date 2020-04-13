import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Article from './Article';

class NoticeBoardLists extends Component {
  constructor(props) {
    super(props);
  }

  moveToArticle = () => {
    this.props.moveToArticle(this.props.article);
  };

  render() {
    const { article, idx } = this.props;
    return (
      <tr>
        <th scope="row">{idx}</th>
        <td onClick={this.moveToArticle}>
          <Link to="/article">{article.title}</Link>
        </td>
        <td>{article.user_id}</td>
        <td>{article.created_at}</td>
      </tr>
    );
  }
}

export default withRouter(NoticeBoardLists);
