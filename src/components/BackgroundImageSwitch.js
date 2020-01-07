import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";

const BackgroundImageSwitch = ({images, children, switchHeight}) => {
  const [table, mobile] = switchHeight;
  const [image, setImage] = useState("");
  const [height, setHeight] = useState(table);
  useEffect(() => {
    const image1 = images[0].image;
    const image2 = images[1].image;
    if (window.innerWidth <= 768) {
      setImage(`${!!image2 ? image2.childImageSharp.fluid.src : image2}`);
      setHeight(mobile);
    } else {
      setImage(`${!!image1 ? image1.childImageSharp.fluid.src : image1}`);
    }
  }, []);
  return (
    <div
      className="full-width-image margin-top-0"
      style={{
        height: height,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
};

BackgroundImageSwitch.defaultProps = {
  switchHeight: ["600px", "200px"],
};

BackgroundImageSwitch.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object.isRequired,
      alt: PropTypes.string,
    }),
  ),
  switchHeight: PropTypes.array,
};

export default BackgroundImageSwitch;
