import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const SurveyTemplate = ({ questions }) => {
  const [rate, setRate] = useState(0);
  const [answered, setAnswered] = useState([]);
  const [checked, setChecked] = useState({});
  const abc = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const handleSelect = e => {
    e.preventDefault();
    setChecked({ ...checked, [e.currentTarget.name]: e.currentTarget.value });
    if (!answered.includes(e.currentTarget.name)) {
      setAnswered([...answered, e.currentTarget.name]);
    }
  };
  useEffect(() => {
    setRate(parseFloat((answered.length / questions.length) * 100).toFixed(2));
  }, [answered]);
  return (
    <div>
      <progress
        className="progress is-fullwidth"
        value={`${rate}`}
        max="100"
        style={{ position: "fixed" }}
      >
        {`${rate}%`}
      </progress>
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <div className="notification is-warning">
                请双击选项选择答案！
              </div>
              {questions.map((o, i) => (
                <div key={i} className="content">
                  <p>{`${i + 1}. ${o.question}`}</p>
                  <div className="field" style={{ paddingLeft: "10px" }}>
                    {o.answers ? (
                      o.answers.split(" ").map((j, k) => (
                        <div key={k}>
                          <input
                            className="is-checkradio"
                            id={`${o.indexData}-item-${k}`}
                            type="radio"
                            name={o.indexData}
                            checked={abc[k] === checked[o.indexData]}
                            value={abc[k]}
                            onChange={e => handleSelect(e)}
                          />
                          <label
                            htmlFor={`${o.indexData}-item-${k}`}
                          >{`${abc[k]}) ${j}`}</label>
                        </div>
                      ))
                    ) : (
                      <input
                        className="input"
                        type="text"
                        name={o.indexData}
                        pattern="\d*"
                        maxLength="3"
                        onChange={handleSelect}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="notification">
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">您提交的答案是：</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input
                        className="input"
                        value={`${Object.entries(checked)}`}
                        readOnly
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SurveyTemplate.propTypes = {
  questions: PropTypes.array
};

const Survey = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <SurveyTemplate questions={frontmatter.questions} />
    </Layout>
  );
};

export default Survey;

export const surveyQuery = graphql`
  query Survey($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        questions {
          question
          indexData
          answers
        }
      }
    }
  }
`;
