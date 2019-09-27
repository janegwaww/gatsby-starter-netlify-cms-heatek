import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const Article = ({ article = {} }) => {
  const para1 = article.article[0];
  const para2 = article.article[1];
  return (
    <div
      className="content has-text-left"
      style={{ maxWidth: "840px", margin: "auto" }}
    >
      <p className="is-size-4">{article.heading}</p>
      <br />
      <p className="is-size-5">
        {para1.heading}
        <a href={para1.link} target="_blank"></a>
      </p>
      <p>{para1.content}</p>
      <br />
      <p className="is-size-5">
        {para2.heading}
        <a href={para2.link} target="_blank"></a>
      </p>
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
        <h3 className="is-size-3">{heading}</h3>
        <div className="section is-small">
          <div className="tabs is-centered">
            <ul>
              {tabs.map((o, i) => (
                <li key={i} className={o.className}>
                  <div>
                    <div
                      className="image"
                      style={{ margin: "auto", width: "80px" }}
                    >
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: o.image,
                          alt: o.alt
                        }}
                      />
                    </div>
                    <br />
                    <a onClick={() => tabSelect(i)} style={{ width: "128px" }}>
                      {o.heading}
                    </a>
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
