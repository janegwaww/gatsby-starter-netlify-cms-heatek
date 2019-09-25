import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const Article = ({ article = {} }) => {
  const para1 = article.article[0];
  const para2 = article.article[1];
  return (
    <div className="content has-text-left">
      <h1>{article.heading}</h1>
      <h3>
        {para1.heading}
        <a href={para1.link} target="_blank">
          &ensp;
          {<span style={{ textDecoration: "underline" }}>{para1.label}</span>}
          &ensp;
        </a>
      </h3>
      <p>{para1.content}</p>
      <h3>
        {para2.heading}
        <a href={para2.link} target="_blank">
          &ensp;
          {<span style={{ textDecoration: "underline" }}>{para2.label}</span>}
          &ensp;
        </a>
      </h3>
      <p>{para2.content}</p>
    </div>
  );
};

const StudyDirection = ({ dirInfo = {} }) => {
  const { heading, blurbs } = dirInfo;
  const _getTabs = index =>
    blurbs.map((o, i) => ({
      image: i === index ? o.image2 : o.image1,
      alt: o.alt,
      heading: o.heading,
      className: i === index ? "is-active" : ""
    }));
  const [tabs, setTabs] = useState(_getTabs(0));
  const [article, setArticle] = useState(blurbs[0]);
  const tabSelect = index => {
    setTabs(_getTabs(index));
    setArticle(blurbs[index]);
  };
  return (
    <div className="columns">
      <div className="column is-10 is-offset-1 has-text-centered">
        <h3 className="is-size-2">{heading}</h3>
        <div className="section is-small">
          <div className="tabs is-centered">
            <ul>
              {tabs.map((o, i) => (
                <li key={i} className={o.className}>
                  <div>
                    <div className="image is-96x96" style={{ margin: "auto" }}>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: o.image,
                          alt: o.alt
                        }}
                      />
                    </div>
                    <br />
                    <a onClick={() => tabSelect(i)}>{o.heading}</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="section">
            <Article article={article} />
          </div>
        </div>
      </div>
    </div>
  );
};

StudyDirection.propTypes = {
  dirInfo: PropTypes.shape({
    heading: PropTypes.string,
    blurbs: PropTypes.array
  })
};

export default StudyDirection;
