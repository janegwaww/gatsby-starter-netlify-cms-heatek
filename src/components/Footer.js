import React, {useState, useEffect} from "react";
import {Link} from "gatsby";
import qr from "../img/qrcode.png";
import mobile from "../img/mobile-icon.svg";
import wechat from "../img/wechat-icon.svg";
import mail from "../img/mail-icon.svg";
import address from "../img/address-icon.svg";
import gov from "../img/gov.png";

const contantUsObj = [
  {
    index: "mobile",
    src: mobile,
    content: "155-2412-0109（市场部 刘经理）",
    to: "/",
  },
  {
    index: "wechat",
    src: wechat,
    content: "haetek_20190801",
    to: "/",
  },
  {
    index: "mail",
    src: mail,
    content: "peizhengqi@kc-group.com.cn",
    to: "/",
  },
  {
    index: "address",
    src: address,
    content: "广东省深圳市龙岗区龙翔大道7188号万科大厦3109",
    to: "/",
  },
];

const intro = [
  {
    index: "help",
    name: "帮助中心",
    to: "/",
  },
  {
    index: "zhongkeyuan",
    name: "中科院计算所",
    to: "/",
  },
  {
    index: "aliyun",
    name: "阿里云",
    to: "/",
  },
  {
    index: "tensentclound",
    name: "腾讯云",
    to: "/",
  },
];

const FooterMobile = () => (
  <div
    className="footer-mobile content is-hidden-tablet is-size-7-mobile has-text-centered"
    style={{color: "#999999", padding: "0.75rem 0 0"}}
  >
    <div className="container">
      <p>
        <span
          className="tooltip has-tooltip-top"
          data-tooltip="haetek_20190801"
        >
          黑顿科技公众号
        </span>
        &ensp;&ensp;|&ensp;&ensp;
        <span className="tooltip has-tooltip-top" data-tooltip="155-2412-0109">
          市场部联系电话
        </span>
      </p>
      <p>peizhengqi@kc-group.com.cn</p>
      <p>广东省深圳市龙岗区龙翔大道7188号万科大厦3109</p>
    </div>
  </div>
);

const FooterBottom = () => {
  const [side, setSide] = useState("is-10 is-offset-1");
  const [center, setCenter] = useState("");
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setSide("is-11");
      setCenter("is-centered");
    }
  }, []);
  return (
    <div className="footer-bottom content has-background-black is-size-6 has-text-grey">
      <div className="container">
        <div className={`columns is-mobile ${center}`}>
          <div className={`column ${side}`}>
            <div className="level">
              <div className="level-left has-text-centered is-size-7-mobile">
                <div className="gov-code">
                  <div style={{display: "flex", alignItems: "center"}}>
                    <span className="gov-icon image is-20x20 is-10x10-mobile">
                      <img src={gov} alt="gov" />
                    </span>
                    <a
                      className="bd-notification is-primary has-text-grey"
                      href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030702002640"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      粤公网安备 44030702002640号
                    </a>
                  </div>
                  <div>
                    <span className="bd-notification is-primary has-text-grey">
                      粤ICP备19120979号-1
                    </span>
                  </div>
                </div>
              </div>
              <div className="level-right has-text-centered is-size-7-mobile">
                <p className="bd-notification is-primary">
                  版权所有@黑顿科技有限公司 2019 保留一切权利
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-dark has-text-white-ter">
        <FooterMobile />
        <div className="content footer-above has-text-centered has-background-dark has-text-white-ter is-hidden-mobile">
          <div className="container has-background-dark has-text-white-ter">
            <div className="columns is-mobile">
              <div className="column is-10 is-offset-1">
                {/* hidden in mobile */}
                <div className="columns">
                  {/* 使用指南 */}
                  <div className="column is-4">
                    <section className="menu">
                      <ul className="menu-list">
                        <li>
                          <p className="menu-label-f">使用指南</p>
                        </li>
                        {intro.map(o => (
                          <li key={o.index}>
                            <Link to={o.to} className="h-navbar-item">
                              {o.name}
                            </Link>
                          </li>
                        ))}
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
                        {contantUsObj.map(o => (
                          <li key={o.index}>
                            <Link className="h-navbar-item" to={o.to}>
                              <div>
                                <span className="image is-24x24">
                                  <img src={o.src} alt={o.alt} />
                                </span>
                                &ensp;
                                <span>{o.content}</span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                  <div className="column is-3 has-text-right">
                    <div className="has-text-centered">
                      <div
                        className="image is-128x128"
                        style={{margin: "auto"}}
                      >
                        <img src={qr} alt="heatex-qrcode" />
                      </div>
                      <p style={{padding: "10px 0"}}>黑顿科技</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterBottom />
      </footer>
    );
  }
};

export default Footer;
