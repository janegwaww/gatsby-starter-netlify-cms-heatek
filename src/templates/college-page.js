import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { FormattedMessage } from "gatsby-plugin-intl";
import { useMediaQuery } from "react-responsive";
import Layout from "../components/Layout";
import StudyDirection from "../components/StudyDirection";
import BackgroundImageSwitch from "../components/BackgroundImageSwitch";

const BackgroundInfo = ({ bakPara = [] }) => {
  const isMobile = useMediaQuery({ query: "(max-width:767px)" });
  return (
    <div className="college-back-info columns is-centered">
      <div className="column is-11 has-text-centered">
        <h3 className="college-back-info-head is-size-3 is-size-5-mobile">
          <FormattedMessage id="college.academicbackground" />
        </h3>
        <br />
        <div className="is-size-6 is-size-7-mobile has-text-left-mobile">
          {isMobile ? (
            <>
              <p>{`${bakPara[0]}${bakPara[1]}`}</p>
              <p>{`${bakPara[2]}${bakPara[3]}`}</p>
            </>
          ) : (
            <>
              {bakPara.map((o, i) => (
                <p key={i}>{o}</p>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const CollegeTemplate = ({ images, background, direction }) => {
  const bakPara = background.split(/\s{2}|\\/);
  return (
    <div className="college">
      <BackgroundImageSwitch images={images} height={["600px", "180px"]}>
        <div className="has-text-centered" style={{ lineHeight: 3 }}>
          <h2 className="has-text-white is-size-3 is-size-5-tablet is-size-6-mobile is-size-3-desktop">
            黑顿研究院
          </h2>
          <div style={{ lineHeight: 1.2, fontSize: "50px" }}>
            <h1 className="has-text-white is-size-6-mobile is-size-5-tablet is-size-1-desktop">
              HAETEK Institute of Machine Intelligence,
            </h1>
            <h1 className="has-text-white is-size-6-mobile is-size-5-tablet is-size-1-desktop">
              Shenzhen, China.
            </h1>
          </div>
        </div>
      </BackgroundImageSwitch>
      <div className="college-back section section--gradient has-background-white-ter">
        <div className="container">
          <div className="section is-paddingless">
            <BackgroundInfo bakPara={bakPara} />
          </div>
        </div>
      </div>
      <div className="college-study-section section section--gradient">
        <div className="container" style={{}}>
          <StudyDirection dirInfo={direction} />
        </div>
      </div>
    </div>
  );
};

CollegeTemplate.propTypes = {
  images: PropTypes.array,
  background: PropTypes.string,
  direction: PropTypes.array
};

const College = ({
  data,
  pageContext: {
    intl: { language }
  }
}) => {
  const { frontmatter } = data.markdownRemark;
  const [zh, en] = frontmatter.version;
  return (
    <Layout>
      <CollegeTemplate
        images={frontmatter.images}
        background={{ zh, en }[language].description}
        direction={{ zh, en }[language].direction}
      />
    </Layout>
  );
};

College.propTypes = {
  data: PropTypes.shape({
    frontmatter: PropTypes.object
  })
};

export default College;

export const collegeQuery = graphql`
  query College($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
        version {
          description
          direction {
            heading
            content
          }
        }
      }
    }
  }
`;
