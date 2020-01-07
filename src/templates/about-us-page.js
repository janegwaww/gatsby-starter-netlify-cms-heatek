import React from "react";
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import AboutFeatures from "../components/AboutFeatures";
import BackgroundImageSwitch from "../components/BackgroundImageSwitch";

const AboutUsTemplate = ({image, intro}) => {
  return (
    <div className="about-us">
      <BackgroundImageSwitch
        images={[{image: image}, {image: image}]}
        switchHeight={["500px", "160px"]}
      />
      <div className="about-us-content section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div>
                <h3 className="about-us-content-head has-text-black is-size-3 has-text-centered is-size-5-5-mobile">
                  <span className="is-hidden-mobile"></span>
                  {intro.heading}
                  <span className="is-hidden-mobile"></span>
                </h3>
              </div>
              <br className="is-hidden-mobile" />
              {intro.description.split(/\s{2}|\\/).map((o, i) => (
                <p
                  className="company-para has-text-dark is-size-7-mobile"
                  key={i}
                  dangerouslySetInnerHTML={{__html: o}}
                ></p>
              ))}
            </div>
          </div>
          <AboutFeatures features={intro.blurbs} />
        </div>
      </div>
    </div>
  );
};

AboutUsTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  intro: PropTypes.object,
};

const AboutUs = ({data}) => {
  const {frontmatter} = data.markdownRemark;

  return (
    <Layout>
      <AboutUsTemplate image={frontmatter.image} intro={frontmatter.main} />
    </Layout>
  );
};

AboutUs.propTypes = {
  data: PropTypes.shape({
    frontmatter: PropTypes.object,
  }),
};

export default AboutUs;

export const aboutUsQuery = graphql`
  query AboutUs($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        main {
          heading
          description
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
            heading
            text
          }
        }
      }
    }
  }
`;
