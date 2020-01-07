import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import BackgroundImageSwitch from "../components/BackgroundImageSwitch";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSeekerBanner = ({bannerInfo}) => {
  const {image1, image2, alt, seekerslider} = bannerInfo;
  const images = [{image: image1, alt}, {image: image2, alt}];
  const [sliderWidth, setSliderWidth] = useState(681);
  const slider = {
    dots: false,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 3000,
    autoplay: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    variableWidth: true,
    className: "seeker-carousel",
  };
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setSliderWidth(240);
    }
  }, []);
  return (
    <BackgroundImageSwitch images={images} switchHeight={["698px", "249px"]}>
      <div className="container">
        <div className="h-slider-container">
          <Slider {...slider}>
            {seekerslider.map((o, i) => (
              <figure
                className="image is-681x383 is-240x140-mobile"
                key={i}
                style={{width: sliderWidth}}
              >
                <PreviewCompatibleImage
                  imageInfo={{...o, style: {borderRadius: 0}}}
                  key={i}
                />
              </figure>
            ))}
          </Slider>
        </div>
      </div>
    </BackgroundImageSwitch>
  );
};

ProductSeekerBanner.defaultProps = {
  bannerInfo: {
    image: {},
    alt: "seeker search engine",
    seekerslider: [],
  },
};

ProductSeekerBanner.propTypes = {
  bannerInfo: PropTypes.shape({
    image: PropTypes.object,
    alt: PropTypes.string,
    seekerslider: PropTypes.array,
  }),
};

export default ProductSeekerBanner;
