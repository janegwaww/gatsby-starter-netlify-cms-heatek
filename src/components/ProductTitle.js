import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {Link} from "gatsby";

function ProductTitle({info = {}}) {
  const [bside, setBside] = useState("is-4");
  const [des, setDes] = useState(info.description);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setBside("is-6");
      setDes("全面闭环的自动化机器学习平台,自主研发的零门槛场景变量挖掘神器。");
    }
  }, []);
  return (
    <div className="product-title">
      <div className="columns is-mobile">
        <div className={`column is-half`}>
          <div className="has-margin-bottom-15-mobile">
            <h3
              className="is-size-5-5-mobile is-size-2-5 has-text-white is-size-4-touch is-hidden-tablet"
              style={{lineHeight: "1", padding: "0.25em 0"}}
            >
              {`Seeker变量引擎`}
            </h3>
            <h3
              className="is-size-5-5-mobile is-size-2-5 has-text-white is-size-4-touch is-hidden-mobile"
              style={{lineHeight: "1", padding: "0.25em 0"}}
            >
              {info.heading}
            </h3>
            <h6
              className="is-size-7-mobile is-size-6-5 has-text-white"
              style={{lineHeight: "1.5", padding: "0.5em 0em"}}
            >
              {des}
            </h6>
          </div>
          <br className="is-hidden-mobile" />
          <div className="product-title-buttons columns is-mobile is-multiline is-size-7-5-mobile">
            <div className={`column ${bside}`}>
              <a className="button is-blue is-size-7-5-mobile">
                &ensp;&ensp;立即使用&ensp;&ensp;
              </a>
            </div>
            <div className={`column ${bside}`}>
              <Link
                className="button is-size-7-5-mobile is-transparent"
                to="/product-center/advisory"
              >
                业务方案咨询
              </Link>
            </div>
            <div className={`column ${bside} has-text-centered`}>
              {/*   <a */}
              {/*     className="button is-text is-size-7-5-mobile" */}
              {/*     style={{ */}
              {/*       backgroundColor: "transparent", */}
              {/*       color: "white", */}
              {/*       border: "unset", */}
              {/*       textDecoration: "none", */}
              {/*     }} */}
              {/*   > */}
              {/*     帮助文档{">"} */}
              {/*   </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductTitle.propTypes = {
  titleInfo: PropTypes.object,
};

export default ProductTitle;
