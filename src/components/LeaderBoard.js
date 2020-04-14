import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Info from '../containers/Info';
import Menu from '../containers/Menu';
import './Main.css';
import './leaderboard.css';
import { gameType } from '../actions';

axios.defaults.withCredentials = true;
class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // makeTable() {}

  componentDidMount() {
    const config = {
      headers: { Authorization: this.props.token.accessToken },
    };

    axios
      .get('http://13.209.41.64:4100/scores/scores', config)
      .then((res) => {
        for (let i = 0; i < res.data.games.length; i += 1) {
          res.data.games[i].scores.sort((a, b) => b.place - a.place);
        }
        console.log(res.data.games);
        this.props.getMyScore(res.data);
      })
      .then()
      .catch((err) => console.log(err));

    const obj = {};
    obj.gameTitle = '';

    axios
      .get('http://13.209.41.64:4100/scores/leaderboard', obj)
      .then((res) => {
        res.data.leaderboard.sort((a, b) => a.place - b.place);
        this.props.changeLeaderBoard(res.data);
        console.log(res);
        // / (res) =>/
      })
      .catch((err) => console.log(err));
  }

  render() {
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
                <i className="fa fa-bars" />
                <div id="menu-toggle" className="btn btn-link">
                  menu
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <section id="display">
                    <div className="table-responsive" id="game1">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>*</th>
                            <th>nickname</th>
                            <th>score</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>멋쟁이산</td>
                            <td>100</td>
                            <td />
                          </tr>
                          <tr>
                            <td>2</td>
                            <td></td>
                            <td></td>
                            <td />
                          </tr>
                          <tr>
                            <td>3</td>
                            <td></td>
                            <td></td>
                            <td />
                          </tr>
                          <tr>
                            <td>4</td>
                            <td></td>
                            <td></td>
                            <td />
                          </tr>
                          <tr>
                            <td>5</td>
                            <td></td>
                            <td></td>
                            <td />
                          </tr>
                          <tr>
                            <td>6</td>
                            <td></td>
                            <td></td>
                            <td />
                          </tr>
                          <tr>
                            <td>7</td>
                            <td></td>
                            <td></td>
                            <td />
                          </tr>
                          <tr>
                            <td>8</td>
                            <td></td>
                            <td></td>
                            <td />
                          </tr>
                          <tr>
                            <td>9</td>
                            <td></td>
                            <td></td>
                            <td />
                          </tr>
                          <tr>
                            <td>10</td>
                            <td></td>
                            <td></td>
                            <td />
                          </tr>
                          <tr>
                            <td>My Score</td>
                            <td>{this.props.myScore.nickname}</td>
                            <td>{this.props.myScore.games[0].scores[0]}</td>
                            <td />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="table-responsive" id="table2">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>nickname</th>
                            <th>score</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>멋쟁이산</td>
                            <td>100</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>{this.props.myScore.nickname}</td>
                            <td>{this.props.myScore.games[1].scores[0]}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="table-responsive" id="table3">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>nickname</th>
                            <th>score</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>멋쟁이산</td>
                            <td>100</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>{this.props.myScore.nickname}</td>
                            <td>{this.props.myScore.games[2].scores[0]}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(LeaderBoard);
