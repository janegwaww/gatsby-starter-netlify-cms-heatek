import React from "react";
import withSize from "react-sizes";
import LinesEllipsis from "react-lines-ellipsis";

function Banner({ isMobile }) {
  const Title = () => (
    <div className="banner-title">
      <div className="content">
        <p className="is-size-5-5-mobile is-size-2-tablet is-size-2-widescreen has-text-white">
          {`数据场景化搭建`}
        </p>
      </div>
      <div className="content">
        <LinesEllipsis
          className="is-size-7-mobile is-size-5-tablet is-size-5-widescreen has-text-white"
          text={`实现数据的按需汇聚，让应用像阳光，照亮业务场景的每个角落`}
          maxLine="3"
        />
      </div>
      <div className="content">
        <a
          href="http://seeker.haetek.com/#/"
          className="button is-opacity is-size-7-5-mobile"
          target="_blank"
          rel="noopener noreferrer"
        >
          了解Seeker
        </a>
      </div>
    </div>
  );
  return (
    <div className="index-banner">
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            isMobile
              ? "./img/index-banner-mobile.png"
              : "./img/index-banner.png"
          })`,
          height: isMobile ? "190px" : "570px",
          backgroundColor: `white`,
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-10 is-offset-1">
              <div className="columns is-mobile">
                <div
                  className={`column ${isMobile ? "is-7" : "is-two-fifths"}`}
                >
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

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768
});

export default withSize(mapSizesToProps)(Banner);
