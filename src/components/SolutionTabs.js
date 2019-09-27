import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import bulmaCarousel from "../../node_modules/bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js";
import SolutionCard from "../components/SolutionCard";

function SolutionTabs({ solutionItems }) {
  const [items, setItems] = useState(
    solutionItems.blurbs.map((o, i) =>
      i === 0 ? { ...o, className: "is-active" } : o
    )
  );
  const _tabSelect = key => {
    setItems(
      items.map((o, i) =>
        i === key ? { ...o, className: "is-active" } : { ...o, className: "" }
      )
    );
  };
  useEffect(() => {
    const carousels = bulmaCarousel.attach(`#carousel-solution`, {
      initialSlide: 0,
      slidesToScroll: 1,
      slidesToShow: 1,
      effect: "translate",
      pagination: false
    });
  });

  return (
    <div className="solution-tabs">
      <h3 className="is-size-3 is-size-4-mobile has-text-black has-text-centered">
        {solutionItems.heading}
      </h3>
      <br />
      <div className="columns is-centered">
        <div className="column is-8">
          <div className="tabs is-around">
            <ul>
              {[...items].map((o, i) => (
                <li key={i} className={o.className}>
                  <a onClick={() => _tabSelect(i)}>{o.heading}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div id="carousel-solution" className="carousel">
          {[...items].map((o, i) => (
            <div
              key={i}
              className={`item-${i}`}
              style={{ padding: "0 1.4rem" }}
            >
              <SolutionCard info={o} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

SolutionTabs.propTypes = {
  solutionItems: PropTypes.shape({
    blurbs: PropTypes.array,
    heading: PropTypes.string
  })
};

export default SolutionTabs;
