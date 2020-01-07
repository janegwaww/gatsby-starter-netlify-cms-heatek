import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";

const SolutionTemplate = ({info}) => {
  return (
    <div>
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">{info.heading}</h1>
            <h2 class="subtitle">不好意思，此页面暂未开发完成...</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

SolutionTemplate.propTypes = {
  info: PropTypes.object,
};

const Solution = () => {
  return (
    <Layout>
      <SolutionTemplate info={{heading: "解决方案"}} />
    </Layout>
  );
};

// Solution.propTypes={
//   data: PropTypes.shape({
//     frontmatter: PropTypes.object
//   })
// }

export default Solution;
