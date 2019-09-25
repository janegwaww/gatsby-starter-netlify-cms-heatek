import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Loadable from "react-loadable";

import Layout from "../components/Layout";
import SeekerTabs from "../components/SeekerTabs";
import BusinessIcon from "../components/BusinessIcon";

const RatePanel = ({ rateItems = [] }) => {
  const Item = ({ info = {} }) => (
    <div>
      <p className="is-size-3 has-text-white">{info.description}</p>
      <div
        style={{
          width: "30px",
          borderTop: "solid .3rem white",
          padding: "0 0 .6em 0",
          margin: "auto"
        }}
      />
      <p className="heading has-text-white is-size-6">{info.heading}</p>
    </div>
  );
  return (
    <div className="level is-mobile">
      <div className="level-left has-text-centered">
        <Item info={rateItems[0]} />
      </div>
      <div className="level-item has-text-centered">
        <Item info={rateItems[1]} />
      </div>
      <div className="level-right has-text-centered">
        <Item info={rateItems[2]} />
      </div>
    </div>
  );
};

const LoadableCarousel = Loadable({
  loader: () => import("../components/BannerCarousel"),
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
      <LoadableCarousel />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <SeekerTabs scrollItems={features} />
            </div>
          </div>
        </div>
      </section>
      <section className="section section--gradient has-background-white-ter">
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
          backgroundImage: `url('./img/coop-background.png')`
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
        className="section has-background-link"
        style={{
          backgroundImage: `url(${"./img/persent.png"})`,
          backgroundSize: "cover"
        }}
      >
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
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
            image {
              childImageSharp {
                fluid(maxWidth: 1024, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
