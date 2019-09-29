import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const SolutionCard = ({ info = {} }) => {
  return (
    <div
      className="box has-background-white"
      style={{
        padding: 0,
        overflow: "hidden",
        boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.1)"
      }}
    >
      <div className="columns is-gapless">
        <div className="column is-half">
          <div className="container">
            <figure className="image has-background-grey-light">
              <PreviewCompatibleImage
                imageInfo={{ ...info, style: { borderRadius: "none" } }}
              />
            </figure>
          </div>
        </div>
        <div
          className="column is-half has-background-white"
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <div
            className="section"
            style={{
              padding: "4rem 2.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <p className="content is-size-4 is-size-5-mobile">
                {info.heading}
              </p>
              <p className="content is-size-6 has-text-grey">
                {info.description}
              </p>
            </div>
            <a
              className="button is-blue is-size-6 is-size-6-mobile"
              style={{ width: "132px" }}
            >
              查看详情
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

SolutionCard.propTypes = {
  info: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    alt: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string
  })
};

export default SolutionCard;
