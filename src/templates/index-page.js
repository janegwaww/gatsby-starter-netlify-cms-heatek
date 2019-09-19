import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Loadable from "react-loadable";

import Layout from "../components/Layout";
import SeekerTabs from "../components/SeekerTabs";
import BusinessIcon from "../components/BusinessIcon";
import ServiceBox from "../components/ServiceBox";

const RatePanel = ({ rateItems = [] }) => (
  <div className="level is-mobile">
    {rateItems.map((o, i) => (
      <div className="level-item has-text-centered" key={i}>
        <div>
          <p className="title has-text-white">{o.description}</p>
          <div
            style={{
              width: "30px",
              borderTop: "solid .3rem white",
              padding: "0 0 .6em 0",
              margin: "auto"
            }}
          />
          <p className="heading has-text-white is-size-6">{o.heading}</p>
        </div>
      </div>
    ))}
  </div>
);

const LoadableCarousel = Loadable({
  loader: () => import("../components/BannerCarousel"),
  loading() {
    return <div>Loading...</div>;
  }
});

const LoadableSolution = Loadable({
  loader: () => import("../components/SolutionTabs"),
  loading() {
    return <div>Loading...</div>;
  }
});

export function IndexPageTemplate({
  services,
  features,
  solution,
  business,
  rate
}) {
  return (
    <div>
      <LoadableCarousel />
      <div className="container" style={{ position: "relative", top: "-45px" }}>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <ServiceBox services={services} />
          </div>
        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <SeekerTabs scrollItems={features} />
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section--gradient"
        style={{ backgroundColor: "#333B59" }}
      >
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
          background:
            "linear-gradient(270deg,rgba(185,211,255,0.2) 0%,rgba(214,229,255,0.1) 100%)"
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
          backgroundImage: `url(${"./img/persent.svg"})`
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
  services: PropTypes.array,
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
        services={frontmatter.services}
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
        services {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
          description
        }
        features {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
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
