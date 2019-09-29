import React from "react";
import { Link } from "gatsby";
import qr from "../img/qrcode.png";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-dark has-text-white-ter">
        <div className="content has-text-centered has-background-dark has-text-white-ter">
          <div className="container has-background-dark has-text-white-ter">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="columns">
                  {/* 使用指南 */}
                  <div className="column is-4">
                    <section className="menu">
                      <ul className="menu-list">
                        <li>
                          <p className="menu-label-f">使用指南</p>
                        </li>
                        <li>
                          <Link to="/" className="h-navbar-item">
                            帮助中心
                          </Link>
                        </li>
                      </ul>
                    </section>
                    <br />
                    <section>
                      <ul className="menu-list">
                        <li>
                          <p className="menu-label-f">友情链接</p>
                        </li>
                        <li>
                          <Link className="h-navbar-item" to="/">
                            中科院计算所
                          </Link>
                        </li>
                        <li>
                          <Link className="h-navbar-item" to="/">
                            阿里云
                          </Link>
                        </li>
                      </ul>
                    </section>
                  </div>
                  {/* 联系我们 */}
                  <div className="column is-5">
                    <section>
                      <ul className="menu-list">
                        <li>
                          <p className="menu-label-f">联系我们</p>
                        </li>
                        <li>
                          <Link className="h-navbar-item" to="/">
                            <div style={{ display: "flex" }}>
                              <span className="image is-24x24">
                                <img
                                  src={"./img/mobile-icon.png"}
                                  alt="mobile"
                                />
                              </span>
                              &ensp; 155-2412-0109（市场部 刘经理）
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link className="h-navbar-item" to="/">
                            <div style={{ display: "flex" }}>
                              <span className="image is-24x24">
                                <img
                                  src={"./img/wechat-icon.png"}
                                  alt="wechat"
                                />
                              </span>
                              &ensp; haetek_20190801
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link className="h-navbar-item" to="/">
                            <div style={{ display: "flex" }}>
                              <span className="image is-24x24">
                                <img src={"./img/mail-icon.png"} alt="mail" />
                              </span>
                              &ensp; peizhengqi@kc-group.com.cn
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link className="h-navbar-item" to="/">
                            <div style={{ display: "flex" }}>
                              <span className="image is-24x24">
                                <img
                                  src={"./img/address-icon.png"}
                                  alt="address"
                                />
                              </span>
                              &ensp;
                              广东省深圳市龙岗区龙翔大道7188号万科大厦3109
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </section>
                  </div>
                  <div className="column is-3 has-text-right">
                    <div className="has-text-centered">
                      <div
                        className="image is-128x128"
                        style={{ margin: "auto" }}
                      >
                        <img src={qr} alt="heatex-qrcode" />
                      </div>
                      <p style={{ padding: "10px 0" }}>黑顿科技</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content  has-background-black is-size-6 has-text-grey">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="level">
                  <div className="level-left">
                    <a className="bd-notification is-primary has-text-grey">
                      粤ICP备19120979号-1
                    </a>
                  </div>
                  <div className="level-right">
                    <p className="bd-notification is-primary">
                      版权所有@黑顿科技有限公司 2019 保留一切权利
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
