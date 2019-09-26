import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import JobCard from "../components/JobCard";
import JobCategory from "../components/JobCategory";

const JoinTemplate = ({ image, filterJobs, newJobs }) => {
  const jobList = newJobs.blurbs;
  return (
    <div>
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
                    className="input is-medium has-background-grey-lighter"
                    type="email"
                    placeholder="搜索工作岗位"
                  />
                  <span className="icon is-medium is-left">
                    <i className="fas fa-envelope"></i>
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
                <div className="columns">
                  <div className="column is-4">
                    <p className="has-text-grey-dark">{filterJobs.heading}</p>
                    <JobCategory jobCate={filterJobs.blurbs} />
                  </div>
                  <div className="column is-8">
                    <p className="has-text-grey-dark">{newJobs.heading}</p>
                    {jobList.length === 0
                      ? null
                      : jobList.map((o, i) => <JobCard info={o} key={i} />)}
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

JoinTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  filterJobs: PropTypes.shape({
    heading: PropTypes.string,
    blurbs: PropTypes.array
  }),
  newJobs: PropTypes.shape({
    heading: PropTypes.string,
    blurbs: PropTypes.array
  })
};

const Join = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <JoinTemplate
        image={frontmatter.image}
        filterJobs={frontmatter.filterJobs}
        newJobs={frontmatter.newJobs}
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
