import React, { useState } from "react";
import PropTypes from "prop-types";
import { useIntl } from "gatsby-plugin-intl";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const Article = ({ article = [] }) => {
  const [para1, para2] = article;
  return (
    <div
      className="college-article content has-text-left"
      style={{ maxWidth: "840px", margin: "auto" }}
    >
      <p className="is-size-4 is-size-5-mobile">{article.heading}</p>
      <br className="is-hidden-mobile" />
      <p className="is-size-5 is-size-6-mobile">{para1.heading}</p>
      <p
        className="is-size-7-mobile"
        dangerouslySetInnerHTML={{ __html: para1.content }}
        style={{ hyphens: "auto" }}
      ></p>
      <br />
      <p className="is-size-5 is-size-6-mobile">{para2.heading}</p>
      <p
        className="is-size-7-mobile"
        dangerouslySetInnerHTML={{ __html: para2.content }}
        style={{ hyphens: "auto" }}
      ></p>
    </div>
  );
};

const StudyDirection = ({ dirInfo = [] }) => {
  const { formatMessage } = useIntl();
  const blurbs = [
    {
      image1: "/img/college/study1.png",
      image2: "/img/college/study1-chosen.png",
      alt: "direction",
      heading: formatMessage({ id: "college.nnac" })
    },
    {
      image1: "/img/college/study2.png",
      image2: "/img/college/study2-chosen.png",
      alt: "direction",
      heading: formatMessage({ id: "college.inforintel" })
    },
    {
      image1: "/img/college/study3.png",
      image2: "/img/college/study3-chosen.png",
      alt: "direction",
      heading: formatMessage({ id: "college.infeengine" })
    }
  ];
  const _getTabs = index =>
    blurbs.map((o, i) => ({
      image: i === index ? o.image2 : o.image1,
      alt: o.alt,
      heading: o.heading,
      className: i === index ? "is-active" : ""
    }));
  const [tabs, setTabs] = useState(_getTabs(0));
  const [article, setArticle] = useState(dirInfo[0]);
  const tabSelect = index => {
    setTabs(_getTabs(index));
    setArticle(dirInfo[index]);
  };
  return (
    <div className="columns study-direction">
      <div className="column is-10 is-offset-1 has-text-centered is-paddingless-mobile">
        <h3 className="is-size-3 is-size-5-mobile">
          {formatMessage({ id: "college.researchdirection" })}
        </h3>
        <br className="is-hidden-tablet" />
        <div className="section is-small is-paddingless-mobile">
          <div className="tabs is-around">
            <ul>
              {tabs.map((o, i) => (
                <li
                  onClick={() => tabSelect(i)}
                  key={i}
                  className={o.className}
                  style={{ cursor: "pointer" }}
                >
                  <div>
                    <div
                      className="image is-80x80 is-48x48-mobile"
                      style={{ margin: "auto" }}
                    >
                      <PreviewCompatibleImage imageInfo={o} />
                    </div>
                    <br className="is-hidden-mobile" />
                    <a style={{ width: "7.5em" }} className="is-size-7-mobile">
                      {o.heading}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="section is-paddingless-mobile">
            <Article article={article} />
          </div>
        </div>
      </div>
    </div>
  );
};

StudyDirection.propTypes = {
  dirInfo: PropTypes.array
};

export default StudyDirection;
