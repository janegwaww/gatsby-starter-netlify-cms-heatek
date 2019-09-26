import React from "react";
import { globalHistory } from "@reach/router";
import { Link } from "gatsby";
import logo from "../img/logo.png";
import lang from "../img/language.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
      activeNav: {}
    };
  }

  componentDidMount() {
    this._activeNavHandle(
      globalHistory.location.pathname
        .split("/")
        .pop()
        .replace(/\-/, "")
    );
  }

  toggleHamburger = () => {
    //   toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      //   after state has been updated,
      () => {
        //   set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  _activeNavHandle = nav => {
    this.setState({
      activeNav: {
        [nav === "" ? "home" : nav]: "is-active"
      }
    });
  };

  render() {
    const { activeNav } = this.state;
    return (
      <nav
        className="navbar is-fixed-top has-shadow is-transparent"
        role="navigation"
        aria-label="main navigation"
        style={{ boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.1)" }}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item is-active " title="Logo">
              <img src={logo} alt="Haetek" width="143" height="40" />
            </Link>
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link
                className="navbar-item is-tab"
                to="/"
                activeClassName={activeNav.home}
              >
                首页
              </Link>
              <Link
                className="navbar-item is-tab"
                to="/about-us"
                activeClassName={activeNav.aboutus}
              >
                关于黑顿
              </Link>
              <Link
                className="navbar-item is-tab"
                to="/college"
                activeClassName={activeNav.college}
              >
                黑顿研究院
              </Link>
              <Link
                className="navbar-item is-tab"
                to="/join"
                activeClassName={activeNav.join}
              >
                加入我们
              </Link>
            </div>

            <div className="navbar-end has-text-centered">
              <div className="navbar-item">
                <div className="language">
                  <a href="#top" className="is-active">
                    中
                  </a>
                  <span
                    style={{
                      width: "1px",
                      borderLeft: "2px solid rgba(193,193,193,1)",
                      height: "21px",
                      margin: "0 6px 0 6px"
                    }}
                  ></span>
                  <a href="#top">EN</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
