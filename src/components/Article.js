import React, { Component } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import './Article.css';

class Article extends Component {
  constructor(props) {
    super(props);
  }

  goback = () => {
    this.props.goback();
    this.props.history.push('/');
  };

  render() {
    console.log(this.props.article);
    const { title, contents, created_at, likes, dislikes } = this.props.article;
    return (
      <div id="row">
        <div className="col-11">
          <button id="goBack">
            <img
              src="https://img.favpng.com/19/13/6/logo-organization-photography-brand-png-favpng-NdpBCztQKB1TvXknxeySryMsk.jpg"
              width="70px"
              height="80px"
              onClick={this.goback}
            />
          </button>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">
                  <h2>{title}</h2>
                  <div id="created">{created_at}</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th id="contentBox" scope="row">
                  <div id="contents">{contents}</div>

                  <div id="imgBox">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bot%C3%B3n_Me_gusta.svg/400px-Bot%C3%B3n_Me_gusta.svg.png"
                      width="50px"
                      height="50px"
                    />
                    <span>{likes}</span>
                    <img
                      src="http://img.hani.co.kr/imgdb/resize/2015/0917/144240205537_20150917.JPG"
                      width="50px"
                      height="50px"
                    />
                    <span>{dislikes}</span>
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
    // return (
    //   <div id="top">
    //     <button onClick={this.goback}>Go Back 할꺼에용</button>
    //     <div id="article"></div>
    //     <div id="titleBox">
    //       <h2>{title}</h2>
    //       <div>{created_at}</div>
    //     </div>
    //     <div id="body">
    //       <div id="content">{contents}</div>
    //       <div id="imgBox">
    //         <img
    //           src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bot%C3%B3n_Me_gusta.svg/400px-Bot%C3%B3n_Me_gusta.svg.png"
    //           alt="LIKE"
    //           width="50px"
    //           height="50px"
    //         />
    //         <span>{likes}</span>
    //         <img
    //           src="http://img.hani.co.kr/imgdb/resize/2015/0917/144240205537_20150917.JPG"
    //           width="50px"
    //           height="50px"
    //         />
    //         <span>{dislikes}</span>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default withRouter(Article);
