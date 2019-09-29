import React from "react";
import PropTypes from "prop-types";

function JobCategory({ jobCate = [] }) {
  const SubItem = ({ str = "" }) => (
    <li>
      <label>
        <input type="checkbox" />
        &ensp;
        {str}
      </label>
    </li>
  );
  const Item = ({ obj = {} }) => {
    const { subItems } = obj;
    return (
      <li>
        <label className="checkbox">
          <input type="checkbox" />
          &ensp;
          {obj.item}
        </label>
        <ul style={{ listStyleType: "none" }}>
          {subItems.length === 0
            ? null
            : subItems.map((o, i) => <SubItem str={o} key={i} />)}
        </ul>
      </li>
    );
  };
  return (
    <div className="box" style={{ borderRadius: "4px", boxShadow: "unset" }}>
      <div className="menu">
        <ul className="menu-list">
          {jobCate.length === 0
            ? null
            : jobCate.map((o, i) => <Item obj={o} key={i} />)}
        </ul>
      </div>
    </div>
  );
}

JobCategory.propTypes = {
  JobCate: PropTypes.shape({
    item: PropTypes.string,
    subItems: PropTypes.array
  })
};

export default JobCategory;
