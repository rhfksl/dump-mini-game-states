import React, { Component } from 'react';
import axios from 'axios';
import NoticeBoardLists from './NoticeBoardLists';
import Article from './Article';
import { Route, withRouter } from 'react-router-dom';
const shortid = require('shortid');

axios.defaults.withCredentials = true;
class NoticeBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      mode: 'lists',
      curArticle: [],
    };
  }

  // componentDidMount() {
  //   axios
  //     .get('http://13.209.41.64:4100/articles')
  //     .then((res) => {
  //       this.changeArticles(res);
  //     })
  //     .catch((err) => console.log(err));
  // }

  changeArticles(articles) {
    this.setState({ articles });
  }

  goback = () => {
    this.setState({ mode: 'lists' });
  };

  moveToArticle = (article) => {
    this.setState({ mode: 'article', curArticle: article });
  };

  render() {
    const { articles, mode, curArticle } = this.state;
    if (mode === 'lists') {
      return (
        <div>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th width="10%" scope="col">
                  번호
                </th>
                <th width="60%" scope="col">
                  Title
                </th>
                <th width="10%" scope="col">
                  Author
                </th>
                <th width="20%" scope="col">
                  Created_at
                </th>
              </tr>
            </thead>
            <tbody>
              {articles.map((val, idx) => (
                <NoticeBoardLists
                  key={shortid.generate()}
                  article={val}
                  idx={idx}
                  moveToArticle={this.moveToArticle}
                />
              ))}
            </tbody>
          </table>
          <input
            type="button"
            value="state를 바꾸는 용도입니다"
            onClick={() => {
              this.changeArticles([
                {
                  title: 'Hello world',
                  contents: 'This is contents example',
                  user_id: 2,
                  likes: 5,
                  dislikes: 1,
                  created_at: '2020-04-05 22:04:40',
                },
                {
                  title: 'Hello pi',
                  contents: 'This is contents pi',
                  user_id: 3,
                  likes: 2,
                  dislikes: 0,
                  created_at: '2020-04-06 12:24:40',
                },
                {
                  title: 'World of Wonders',
                  contents: 'Penguin who travels a lot',
                  user_id: 1,
                  likes: 1,
                  dislikes: 3,
                  created_at: '2020-04-06 14:04:40',
                },
              ]);
            }}
          />
        </div>
      );
    }
    return (
      <Route
        exact
        path="/article"
        render={() => <Article article={curArticle} goback={this.goback} />}
      />
    );
  }
}

export default withRouter(NoticeBoard);
