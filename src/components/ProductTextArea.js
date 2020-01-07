import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import SearchInput from "../components/SearchInput";
import SearchResult from "../components/SearchResult";
import curcle from "../img/curcle.svg";

function ProductTextArea({ info = [] }) {
  const [content, setContent] = useState(info[0]);
  const [keyword, setKeyword] = useState(info[0].keywords[0]);
  const [issemantic, setIssemantic] = useState(false);
  const [related, setRelated] = useState([]);
  const [textIndex, setTextIndex] = useState(0);
  const [isUnediteble, setIsUnediteble] = useState(true);
  const searchInput = useRef(null);

  useEffect(() => {
    const handleQuery = async () => {
      if (!keyword) return alert("关键字不能为空！");
      if (!content.description) return alert("文本不能为空！");
      searchInput.current.setActiveButton(keyword);
      searchInput.current.isLoading(true);
      try {
        const result = await fetchQuery({
          querystring: keyword,
          paragraph: content.description,
          issemantic: issemantic
        });
        if (result.err === 0) {
          setRelated(result.resultdata.slice(1));
        } else {
          alert(result.errmsg);
        }
      } catch (err) {
        alert(err);
      }
      searchInput.current.isLoading(false);
    };
    handleQuery();
  }, [keyword, issemantic]);

  const handleSearch = value => {
    const zh_regexp = /^[\u4e00-\u9fa5]+$/;
    if (zh_regexp.test(value)) {
      return setKeyword(value);
    }
    alert("请输入中文字符！");
  };
  const changeContent = () => {
    setContent(info[textIndex]);
    setKeyword(info[textIndex].keywords[0]);
    setTextIndex(textIndex + 1);
    textIndex >= info.length - 1 && setTextIndex(0);
  };
  const defineContent = () => {
    setIsUnediteble(!isUnediteble);
    if (isUnediteble) {
      setContent({ description: content.description, keywords: [] });
      setRelated([]);
    }
  };

  return (
    <div className="product-textarea">
      <div className="buttons">
        <div className="refresh-button" onClick={changeContent}>
          <span className="icon">
            <img src={curcle} alt="curcle" width="20" height="20" />
          </span>
          <span className="is-size-6 has-text-666">换一个实例</span>
        </div>
        <button
          className="button is-light is-size-6-5 has-text-999 has-background-gray-2"
          onClick={defineContent}
        >
          {isUnediteble ? "自定义文本" : "取消编辑"}
        </button>
      </div>
      <div className="h-table-container">
        <div className="h-table is-bordered is-fullwidth">
          <div className="tr thead">
            <div className="td">文本样例</div>
            <div className="td">想要从文本中搜索的语义/语句</div>
            <div className="td">挖掘结果</div>
          </div>
          <div className="tr tbody">
            <div className="td">
              <textarea
                className="textarea"
                placeholder="请输入文本"
                onChange={e =>
                  setContent({ ...content, ...{ description: e.target.value } })
                }
                rows="25"
                cols="32"
                value={content.description}
                onFocus={event => event.target.select()}
                disabled={isUnediteble}
              ></textarea>
            </div>
            <div className="td">
              <SearchInput
                ref={searchInput}
                handleSearch={handleSearch}
                searchKeywords={content.keywords}
              />
            </div>
            <div className="td">
              <SearchResult
                result={related}
                checkHandler={e => setIssemantic(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductTextArea.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      keywords: PropTypes.array
    })
  )
};

export default ProductTextArea;

async function fetchQuery(
  param = {
    querystring: "",
    paragraph: "",
    issemantic: false
  }
) {
  const data = {
    dbmodelname: "blue",
    modelaction: "search",
    extradata: {
      querystring: "",
      paragraph: "",
      lang: "ch",
      issemantic: false,
      isjson: false
    },
    modeltype: "ai"
  };
  const response = await fetch("http://codes.haetek.com:6677/blue", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...data,
      ...{ extradata: Object.assign(data.extradata, param) }
    })
  });
  return await response.json();
}
