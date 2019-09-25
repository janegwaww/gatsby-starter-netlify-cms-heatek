import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const ContainCard = ({ info = {} }) => {
  return (
    <div
      className="card is-horizontal has-background-white"
      style={{ display: "flex", boxShadow: "none", borderRadius: "5px" }}
    >
      <div className="card-image" style={{ width: "100%", height: "100%" }}>
        <figure className="image">
          <PreviewCompatibleImage
            imageInfo={{ ...info, style: { borderRadius: "none" } }}
          />
        </figure>
      </div>
      <div className="card-stacked">
        <div className="card-content" style={{ padding: "1rem 2.8rem" }}>
          <div className="media">
            <div className="media-content">
              <p className="is-size-3">{info.subHeading}</p>
            </div>
          </div>
          <div className="content is-size-6 has-text-grey">
            {info.description}
          </div>
          <a
            href="#top"
            className="button is-size-7"
            style={{ padding: "16px 26px 16px 26px", color: "#999999" }}
          >
            了解更多
          </a>
        </div>
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
