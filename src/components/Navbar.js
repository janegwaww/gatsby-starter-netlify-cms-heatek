import React from "react";
import {globalHistory} from "@reach/router";
import {Link} from "gatsby";
import logo from "../img/logo.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
      activeNav: {},
      logoWidth: "143",
    };
  }

  componentDidMount() {
    this._activeNavHandle(
      globalHistory.location.pathname
        .replace(/\/$/, "")
        .split("/")
        .pop()
        .replace(/\-/, ""),
    );
    if (window.innerWidth <= 768) {
      this.setState({logoWidth: "100"});
    }
  }

  toggleHamburger = () => {
    //   toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      //   after state has been updated,
      () => {
        //   set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      },
    );
  };

  _activeNavHandle = nav => {
    this.setState({
      activeNav: {
        [nav ? nav : "home"]: "is-active",
      },
    });
  };

  render() {
    const {activeNav, logoWidth} = this.state;
    return (
      <nav
        className="navbar is-fixed-top has-shadow is-transparent"
        role="navigation"
        aria-label="main navigation"
        style={{boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.1)"}}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item logo" title="Logo">
              <img src={logo} alt="Haetek" width={`${logoWidth}`} height="40" />
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
                &ensp;首页&ensp;
              </Link>
              <Link
                className="navbar-item is-tab"
                to="/product-center"
                activeClassName={activeNav.productcenter}
              >
                产品中心
              </Link>
              <Link
                className="navbar-item is-tab"
                to="/case"
                activeClassName={activeNav.case}
              >
                客户案例
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
                      margin: "0 6px 0 6px",
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
