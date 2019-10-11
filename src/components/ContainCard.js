import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import LinesEllipsis from "react-lines-ellipsis";

const ContainCard = ({ info = {} }) => {
  return (
    <div className="contain-card columns is-horizontal has-background-white">
      <div className="column is-5">
        <p className="is-size-4 is-hidden-tablet is-size-5-5-mobile has-text-centered">
          {info.subHeading}
        </p>
        <figure className="image is-200x150-mobile" style={{ margin: "auto" }}>
          <PreviewCompatibleImage imageInfo={info} />
        </figure>
      </div>
      <div className="column is-7 contain-card-right has-text-centered-mobile">
        <div className="content">
          <p className="is-size-4 is-hidden-mobile">{info.subHeading}</p>
          <LinesEllipsis
            className="is-size-6 has-text-grey has-text-left is-size-6-5-mobile"
            text={`${info.description}`}
            maxLine="5"
            ellipsis="..."
          />
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
