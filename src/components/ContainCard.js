import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const ContainCard = ({ info = {} }) => {
  return (
    <div className="columns is-horizontal has-background-white">
      <div className="column is-5">
        <figure className="image">
          <PreviewCompatibleImage imageInfo={info} />
        </figure>
      </div>
      <div
        className="column is-7"
        style={{
          padding: "3rem 2.8rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <div className="content">
          <div className="content">
            <p className="is-size-4">{info.subHeading}</p>
          </div>
          <p className=" is-size-6 has-text-grey">{info.description}</p>
        </div>
        <a
          href="#top"
          className="button is-white-blue is-size-6"
          style={{ width: "120px" }}
        >
          了解更多
        </a>
      </div>
    </div>
  );
};

ContainCard.propTypes = {
  info: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    alt: PropTypes.string,
    subHeading: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.string
  })
};

export default ContainCard;
