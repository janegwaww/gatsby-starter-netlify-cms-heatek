import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import JobCard from "../components/JobCard";

const JoinTemplate = ({ image, jobList = [] }) => {
  return (
    <div className="join">
      <div
        className="full-width-image margin-top-0"
        style={{
          height: "450px",
          backgroundImage: `url(${
            !!image ? image.childImageSharp.fluid.src : image
          })`,
          backgroundSize: "cover"
        }}
      />
      <div className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-10">
              <div className="field">
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="搜索工作岗位"
                    style={{
                      backgroundColor: "#E8E8E8",
                      height: "60px",
                      paddingLeft: "60px"
                    }}
                  />
                  <span
                    className="icon is-medium is-left"
                    style={{ height: "60px", width: "60px" }}
                  >
                    <i className="image is-20x20">
                      <img src="/img/search.png" width="20" height="20" />
                    </i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section has-background-white-ter">
        <div className="container has-text-left">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns is-multiline is-variable is-3">
                  {jobList.map((o, i) => (
                    <div className="column is-half">
                      <JobCard info={o} key={i} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

JoinTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  jobList: PropTypes.array
};

const Join = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <JoinTemplate
        image={frontmatter.image}
        jobList={frontmatter.newJobs.blurbs}
      />
    </Layout>
  );
};

export default Join;

export const joinQuery = graphql`
  query Join($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        filterJobs {
          heading
          blurbs {
            item
            subItems
          }
        }
        newJobs {
          heading
          blurbs {
            heading
            date
            description
          }
        }
      }
    }
  }
`;
