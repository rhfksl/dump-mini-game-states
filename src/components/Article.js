import React, { Component } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import Info from '../containers/Info';
import Menu from '../containers/Menu';
import './Article.css';

class Article extends Component {
  constructor(props) {
    super(props);
  }

  goback = () => {
    this.props.goback();
    this.props.history.push('/article');
  };

  render() {
    console.log('this is props', this.props);
    const { title, contents, created_at, likes, dislikes } = this.props.article;
    return (
      <section id="BG">
        <Info />
        <div id="wrapper">
          <Menu />
          <div className="page-content-wrapper">
            <div className="container-fluid">
              <div
                className="btn btn-link"
                role="button"
                id="menu-toggle"
                href="#menu-toggle"
              >
                <i className="fa fa-bars"></i>
                <div id="menu-toggle" className="btn btn-link">
                  menu
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <section id="display">
                    <div id="row">
                      <div className="col-11">
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
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
