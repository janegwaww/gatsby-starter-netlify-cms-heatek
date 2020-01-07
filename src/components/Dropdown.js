import React, {Component} from "react";
import PropTypes from "prop-types";
import angleDown from "../img/arrow-down.svg";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: "",
      selected: "",
      options: [],
    };
  }

  componentDidMount() {
    const {options} = this.props;
    this.setState({
      selected: options[0].value,
      options: options.map((o, i) =>
        i === 0 ? {...o, className: "is-active"} : o,
      ),
    });
  }

  handleToggle = () => {
    this.setState({
      toggle: this.state.toggle === "is-active" ? "" : "is-active",
    });
  };

  handleSelect = (e, value) => {
    e.preventDefault();

    this.props.onChange({...e, value});
    this.handleToggle();
    this.setState({
      selected: value,
      options: this.state.options.map(i => {
        if (i.value === value) {
          return {...i, className: "is-active"};
        } else {
          return {...i, className: ""};
        }
      }),
    });
  };

  render() {
    const {selected, toggle, options} = this.state;
    return (
      <div className={`dropdown h-dropdown ${toggle}`}>
        <div className="dropdown-trigger">
          <button
            className="button is-fullwidth is-size-7-mobile"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={this.handleToggle}
          >
            <span>{selected}</span>
            <span className="icon is-small is-right">
              <figure className="image is-20x20 is-13x13-mobile">
                <img src={angleDown} width="20" height="20" alt="angle-down" />
              </figure>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {options.map(o => (
              <a
                key={o.value}
                className={`dropdown-item is-size-7-mobile ${o.className}`}
                onClick={e => this.handleSelect(e, o.value)}
                name={o.index}
              >
                {o.value}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Dropdown.defaultProps = {
  options: [],
};

Dropdown.propTypes = {
  options: PropTypes.array,
};

export default Dropdown;
