import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import Display from '../containers/Display';
// import Info from '../containers/Info';
// import Menu from '../containers/Menu';
import './Main.css';

function Main() {
  return (
    // <div>
    //   this is Main component
    //   <Info />
    //   <Menu />
    //   <Display />
    <section id="BG">
      <nav className="navbar navbar-light navbar-expand-md" id="nav">
        <div className="container-fluid">
          <a className="navbar-brand" id="TeamName" href="!#">
            Black Tardis
          </a>
          <button
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="#navcol-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-md-flex d-lg-flex d-xl-flex justify-content-md-end justify-content-lg-end justify-content-xl-end"
            id="navcol-1"
          >
            <ul className="nav navbar-nav">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" id="welcomePrint" href="!#">
                  guest or nickname 님, 반갑습니다.
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <Link
                  className="btn btn-primary"
                  id="logoutButton"
                  type="button"
                  onClick={() => {
                    // props.login();
                    // props.history.push('welcome');
                  }}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="wrapper">
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <li className="d-xl-flex sidebar-brand" id="BTImg">
              {' '}
            </li>
            <li>
              {' '}
              <a id="menuGame" href="!#">
                Game
              </a>
            </li>
            <li>
              {' '}
              <a id="menuScore" href="!#">
                Score board
              </a>
            </li>
            <li>
              {' '}
              <a id="menuNotice" href="!#">
                Notice board
              </a>
            </li>
          </ul>
        </div>
        <div className="page-content-wrapper">
          <div className="container-fluid">
            <a
              className="btn btn-link"
              role="button"
              id="menu-toggle"
              href="#menu-toggle"
            >
              <i className="fa fa-bars"></i>
              <a id="menu-toggle" className="btn btn-link" href="#menu-toggle">
                menu
              </a>
            </a>
            <div className="row">
              <div className="col-md-12">
                <section id="display"></section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // </div>
  );
}

export default withRouter(Main);
