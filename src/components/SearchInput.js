import React, { useState, forwardRef, useImperativeHandle } from "react";
import searchIcon from "../img/search-white.svg";

function SearchInput({ handleSearch, searchKeywords = [] }, ref) {
  const [searchValue, setSearchValue] = useState("");
  const [activeButton, setActiveButton] = useState(-1);
  const [isLoading, setIsLoading] = useState("");
  const searchHandler = e => {
    e.preventDefault();
    handleSearch(e.currentTarget.value);
    setActiveButton(searchKeywords.indexOf(e.currentTarget.value));
  };
  useImperativeHandle(ref, () => ({
    isLoading: e => setIsLoading(e ? "is-loading" : ""),
    setActiveButton: e => setActiveButton(searchKeywords.indexOf(e))
  }));

  return (
    <div className="search-input">
      <div className="field has-addons has-margin-bottom-40">
        <div className="control" style={{ width: "100%" }}>
          <input
            className="input is-medium"
            type="text"
            placeholder="自定义输入"
            onChange={e => setSearchValue(e.target.value)}
            onFocus={event => event.target.select()}
          />
        </div>
        <div className="control">
          <button
            className={`button is-info is-medium ${
              activeButton === -1 ? "is-active " + isLoading : ""
            }`}
            value={searchValue}
            onClick={searchHandler}
          >
            <span className="icon">
              {isLoading ? null : <img src={searchIcon} alt="search" />}
            </span>
          </button>
        </div>
      </div>
      <div className="buttons">
        {searchKeywords.map((o, i) => {
          return (
            <button
              className={`button is-fullwidth has-margin-bottom-40 ${
                i === activeButton ? "is-active " + isLoading : ""
              }`}
              value={o}
              onClick={searchHandler}
              key={i}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default forwardRef(SearchInput);
