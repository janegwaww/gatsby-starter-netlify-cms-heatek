import React, {useState} from "react";
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import JobCard from "../components/JobCard";
import JoinInput from "../components/JoinInput";
import BackgroundImageSwitch from "../components/BackgroundImageSwitch";

const JoinTemplate = ({images, jobList, filterJobs}) => {
  const [jobfilter, setJobfilter] = useState(jobList);
  const jobFilterEvent = e => {
    setJobfilter(
      jobList.filter(i => {
        return (
          (i.date.replace(/\s/g, "").split("|")[0] === e.address ||
            e.address === "搜索地点" ||
            !e.address) &&
          (i.date.replace(/\s/g, "").split("|")[1] === e.position ||
            e.position === "搜索岗位" ||
            !e.position) &&
          (i.heading.includes(e.job) || !e.job)
        );
      }),
    );
  };
  return (
    <div className="join">
      <BackgroundImageSwitch images={images} switchHeight={["450px", "160px"]}>
        <div className="has-text-centered">
          <h2 className="has-text-white is-size-3 is-size-5-5-mobile">
            Power Humanity with AI
          </h2>
        </div>
      </BackgroundImageSwitch>
      <div className="join-input section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-10 is-paddingless-mobile">
              <JoinInput filter={jobFilterEvent} selectOptions={filterJobs} />
            </div>
          </div>
        </div>
      </div>
      <div className="join-jobs section has-background-white-ter">
        <div className="container has-text-left">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns is-multiline is-variable is-3">
                  {jobfilter.map((o, i) => (
                    <div className="column is-half" key={i}>
                      <JobCard info={o} />
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
  images: PropTypes.array,
  jobList: PropTypes.array,
  filterJobs: PropTypes.object,
};

const Join = ({data}) => {
  const {frontmatter} = data.markdownRemark;
  return (
    <Layout>
      <JoinTemplate
        images={frontmatter.images}
        jobList={frontmatter.newJobs}
        filterJobs={frontmatter.filterJobs}
      />
    </Layout>
  );
};

Join.propTypes = {
  data: PropTypes.shape({
    frontmatter: PropTypes.object,
  }),
};

export default Join;

export const joinQuery = graphql`
  query Join($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        images {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        newJobs {
          heading
          date
          description
        }
        filterJobs {
          address {
            index
            value
          }
          position {
            index
            value
          }
        }
      }
    }
  }
`;
