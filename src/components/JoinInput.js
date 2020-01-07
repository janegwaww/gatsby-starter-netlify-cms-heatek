import React, {useState} from "react";
import PropTypes from "prop-types";
import Dropdown from "../components/Dropdown";
import searchImg from "../img/search.png";

const JoinInput = ({filter, selectOptions}) => {
  const [search, setSearch] = useState({});
  const handleChange = e => {
    setSearch({...search, [e.target.name]: e.value});
    filter({...search, [e.target.name]: e.value});
  };
  const handleSubmit = e => {
    e.preventDefault();
    filter(search);
  };

  return (
    <form name="search" onSubmit={handleSubmit}>
      <div className="columns is-mobile">
        <div className="column is-4">
          <div className="control is-expanded has-icons-right">
            <Dropdown onChange={handleChange} options={selectOptions.address} />
          </div>
        </div>
        <div className="column is-4">
          <div className="control is-expanded has-icons-right">
            <Dropdown
              onChange={handleChange}
              options={selectOptions.position}
            />
          </div>
        </div>
        <div className="search-input column is-4">
          <div className="control is-expanded has-icons-right">
            <input
              name="job"
              className="input h-input is-size-7-mobile"
              type="text"
              placeholder="搜索职位"
              onChange={handleChange}
            />
            <span className="icon is-small is-right" onClick={handleSubmit}>
              <i className="image is-20x20 is-13x13-mobile">
                <img alt="search-icon" src={searchImg} width="20" height="20" />
              </i>
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};

JoinInput.propTypes = {
  filter: PropTypes.func,
  selectOptions: PropTypes.object,
};

export default JoinInput;
