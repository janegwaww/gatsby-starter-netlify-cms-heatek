import React from "react";
import PropTypes from "prop-types";

function Banner() {
  const Title = () => (
    <div>
      <div className="content">
        <p
          className="is-size-3-mobile is-size-2-tablet is-size-2-widescreen"
          style={{
            color: "white",
            lineHeight: "1"
          }}
        >
          {`数据场景化搭建`}
        </p>
      </div>
      <div className="content">
        <p
          className="is-size-5-mobile is-size-5-tablet is-size-5-widescreen"
          style={{
            color: "white",
            lineHeight: "1.5"
          }}
        >
          {`实现数据的按需汇聚，让应用像阳光，照亮业务场景的每个角落`}
        </p>
      </div>
      <div className="content">
        <a className="button is-opacity">了解Seeker</a>
      </div>
    </div>
  );
  return (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${"./img/index-banner.png"})`,
          backgroundPosition: `0 55px`,
          backgroundAttachment: `fixed`,
          backgroundColor: `gray`,
          backgroundSize: "contain"
        }}
      >
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="columns">
                <div className="column is-two-fifths">
                  <Title />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
