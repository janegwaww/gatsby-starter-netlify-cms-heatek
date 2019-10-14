import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Loadable from "react-loadable";

import Layout from "../components/Layout";
import SeekerTabs from "../components/SeekerTabs";
import BusinessIcon from "../components/BusinessIcon";

const RatePanel = ({ rateItems = [] }) => {
  const Item = ({ info = {} }) => (
    <div className="rate-panel">
      <p className="is-size-3 has-text-white is-size-5-5-mobile">
        {info.description}
      </p>
      <div
        style={{
          width: "2rem",
          borderTop: "solid .2rem white",
          margin: "2px 0 1rem 0"
        }}
      />
      <p className="heading has-text-white is-size-6 is-size-7-mobile">
        {info.heading}
      </p>
    </div>
  );
  return (
    <div
      className="level is-mobile is-paddingless-tablet"
      style={{ padding: "0.75rem 1rem" }}
    >
      <div className="level-left">
        <Item info={rateItems[0]} />
      </div>
      <div className="level-item">
        <Item info={rateItems[1]} />
      </div>
      <div className="level-right">
        <Item info={rateItems[2]} />
      </div>
    </div>
  );
};

const LoadableBanner = Loadable({
  loader: () => import("../components/Banner"),
  loading() {
    return (
      <div className="pageloader is-active">
        <div className="title">Loading...</div>
      </div>
    );
  }
});

const LoadableSolution = Loadable({
  loader: () => import("../components/SolutionTabs"),
  loading() {
    return (
      <div className="pageloader is-active">
        <div className="title">Loading...</div>
      </div>
    );
  }
});

export function IndexPageTemplate({ features, solution, business, rate }) {
  return (
    <div>
      <LoadableBanner />
      <section className="section section--gradient is-paddingless-mobile">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <SeekerTabs scrollItems={features} />
            </div>
          </div>
        </div>
      </section>
      <section className="section section--gradient has-background-white-ter is-paddingless-mobile">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <LoadableSolution solutionItems={solution} />
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section--gradient"
        style={{
          backgroundImage: `url('./img/coop-background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <BusinessIcon iconItems={business} />
            </div>
          </div>
        </div>
      </section>
      <section
        className="section has-background-link is-paddingless-mobile"
        style={{
          backgroundImage: `url(${"./img/persent.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1 is-paddingless">
              <RatePanel rateItems={rate} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

IndexPageTemplate.propTypes = {
  features: PropTypes.array,
  solution: PropTypes.shape({
    heading: PropTypes.string,
    blurbs: PropTypes.array
  }),
  business: PropTypes.array,
  rate: PropTypes.array
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        features={frontmatter.features.blurbs}
        solution={frontmatter.solution}
        business={frontmatter.business.blurbs}
        rate={frontmatter.rate.blurbs}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        features {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heading
            subHeading
            description
          }
        }
        solution {
          heading
          blurbs {
            heading
            image1 {
              childImageSharp {
                fluid(maxWidth: 1024, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 1024, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 1024, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
            description
          }
        }
        business {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        rate {
          blurbs {
            heading
            description
          }
        }
      }
    }
  }
`;
