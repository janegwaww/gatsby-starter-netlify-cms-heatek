import React, { useState } from "react";
import PropTypes from "prop-types";
import ContainCard from "../components/ContainCard";

function SeekerTabs({ scrollItems = [] }) {
  const [items, setItems] = useState(
    scrollItems.map((o, i) => (i === 0 ? { ...o, className: "is-active" } : o))
  );
  const [contentItem, setContentItem] = useState(items[0]);
  const _tabSelect = tab => {
    setItems(
      items.map(o => {
        if (o.heading === tab) {
          return { ...o, className: "is-active" };
        } else {
          return { ...o, className: "" };
        }
      })
    );
    setContentItem(items.filter(o => o.heading === tab)[0]);
  };
  return (
    <div>
      <div className="tabs is-centered" id="tabs">
        <ul>
          {[...items].map((o, i) => (
            <li key={i} className={`has-text-centered ${o.className}`}>
              <p className="is-size-7 has-text-grey-light">{o.heading}</p>
              <a onClick={() => _tabSelect(o.heading)}>{o.subHeading}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="section">
        <ContainCard info={contentItem} />
      </div>
    </div>
  );
}

SeekerTabs.propTypes = {
  scrollItems: PropTypes.array
};

export default SeekerTabs;
