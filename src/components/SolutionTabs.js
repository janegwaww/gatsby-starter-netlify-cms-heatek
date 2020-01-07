import React, { Component, useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import SolutionCard from "../components/SolutionCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/solution-tabs.sass";

const SampleNextArrow = props => {
  const { className, currentSlide, slideCount, onClick } = props;
  const [arrow, setArrow] = useState("./img/solutions/right.png");
  const mouseAct = e => {
    if (e.type === "mouseover") {
      setArrow("./img/solutions/right-chosen.png");
    } else {
      setArrow("./img/solutions/right.png");
    }
  };
  return (
    <div
      className={className}
      style={{
        display: currentSlide + 1 === slideCount ? "none" : "block",
        maxHeight: "60px",
        maxWidth: "60px",
        backgroundColor: "white",
        padding: "1rem",
        borderRadius: 50,
        width: "unset",
        height: "unset"
      }}
      onClick={onClick}
      onMouseOver={mouseAct}
      onMouseOut={mouseAct}
    >
      <figure className="image is-20x20">
        <img src={arrow} alt="right" />
      </figure>
    </div>
  );
};

const SamplePrevArrow = props => {
  const { className, currentSlide, onClick } = props;
  const [arrow, setArrow] = useState("./img/solutions/left.png");
  const mouseAct = e => {
    if (e.type === "mouseover") {
      setArrow("./img/solutions/left-chosen.png");
    } else {
      setArrow("./img/solutions/left.png");
    }
  };

  return (
    <div
      className={className}
      style={{
        display: currentSlide === 0 ? "none" : "block",
        zIndex: 1,
        maxHeight: "60px",
        maxWidth: "60px",
        backgroundColor: "white",
        padding: "1rem",
        borderRadius: 50,
        width: "unset",
        height: "unset"
      }}
      onClick={onClick}
      onMouseOver={mouseAct}
      onMouseOut={mouseAct}
    >
      <figure className="image is-20x20">
        <img src={arrow} alt="left" />
      </figure>
    </div>
  );
};

class SolutionTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      mobile: false,
      heading: ""
    };
  }

  _tabSelect = key => {
    this.setState({
      items: this.state.items.map((o, i) =>
        i === key ? { ...o, className: "is-active" } : { ...o, className: "" }
      )
    });
    this.sliderRef.slickGoTo(key);
  };

  componentDidMount() {
    const { solutionItems } = this.props;
    this.setState({
      items: solutionItems.blurbs.map((o, i) =>
        i === 0 ? { ...o, className: "is-active" } : o
      ),
      heading: solutionItems.heading
    });
    if (window.innerWidth <= 768) {
      this.setState({ mobile: true });
    }
  }

  render() {
    const { mobile, heading, items } = this.state;
    const slider = {
      dots: mobile,
      dotsClass: "slick-dots slick-thumb",
      infinite: false,
      speed: 500,
      arrows: !mobile,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: mobile,
      variableWidth: mobile,
      className: "carousel slider variable-width",
      beforeChange: (current, next) => this._tabSelect(next),
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <div className="solution-tabs">
        <br className="is-hidden-tablet" />
        <h3 className="is-size-3 is-size-5-5-mobile has-text-black has-text-centered">
          {heading}
        </h3>
        <br className="is-hidden-mobile" />
        <div className="columns is-centered is-hidden-mobile">
          <div className="column is-8">
            <div className="tabs is-around">
              <ul>
                {[...items].map((o, i) => (
                  <li key={i} className={o.className}>
                    <a onClick={() => this._tabSelect(i)}>{o.heading}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <br />
        <div
          className="container"
          style={mobile ? { margin: "0 0 0 -3em" } : {}}
        >
          <Slider ref={e => (this.sliderRef = e)} {...slider}>
            {[...items].map((o, i) => (
              <div key={`item-${i}`} style={{ width: 300 }}>
                <SolutionCard info={o} />
              </div>
            ))}
          </Slider>
        </div>
        <br />
      </div>
    );
  }
}

SolutionTabs.propTypes = {
  solutionItems: PropTypes.shape({
    blurbs: PropTypes.array,
    heading: PropTypes.string
  })
};

export default SolutionTabs;
