import React from "react";
import PropTypes from "prop-types";

function JobCard({ info = {} }) {
  return (
    <div className="box" style={{ borderRadius: "4px", boxShadow: "unset" }}>
      <div className="" style={{ marginBottom: "6px" }}>
        <p className="is-size-5">{info.heading}</p>
      </div>
      <p>{info.date}</p>
      <br />
      <p>{info.description}</p>
    </div>
  );
}

JobCard.propTypes = {
  info: PropTypes.object
};

export default JobCard;
