import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import StudyDirection from "../components/StudyDirection";

const BackgroundInfo = ({ heading = "", bakPara = [] }) => (
  <div className="columns">
    <div className="column is-10 is-offset-1 has-text-centered">
      <h3 className=" is-size-2">{heading}</h3>
      <br />
      <div className="is-size-6">
        {bakPara.map((o, i) => (
          <p key={i}>{o}</p>
        ))}
      </div>
    </div>
  </div>
);

const CollegeTemplate = ({ image, background, direction }) => {
  const bakPara = background.description.split(/\s{2}|\\/);
  return (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          height: "580px",
          backgroundImage: `url(${
            !!image ? image.childImageSharp.fluid.src : image
          })`,
          backgroundSize: "cover"
        }}
      />
      <div className="section section--gradient has-background-white-ter">
        <div className="container">
          <div className="section">
            <BackgroundInfo heading={background.heading} bakPara={bakPara} />
          </div>
        </div>
      </div>
      <div className="section section--gradient">
        <div className="container" style={{ marginTop: "50px" }}>
          <StudyDirection dirInfo={direction} />
        </div>
      </div>
    </div>
  );
};

CollegeTemplate.propTypes = {
  image: PropTypes.object,
  background: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string
  }),
  direction: PropTypes.shape({
    heading: PropTypes.string,
    blurbs: PropTypes.array
  })
};

const College = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <CollegeTemplate
        image={frontmatter.image}
        background={frontmatter.background}
        direction={frontmatter.direction}
      />
    </Layout>
  );
};

export default College;

export const collegeQuery = graphql`
  query College($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        background {
          heading
          description
        }
        direction {
          heading
          blurbs {
            image1 {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
            heading
            article {
              heading
              label
              link
              content
            }
          }
        }
      }
    }
  }
`;
