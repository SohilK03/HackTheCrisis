import React, { useEffect } from "react";
import Slider from "react-slick";
import { withRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.styles.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { societies } from "../../data/societies.data";
import placeholder from "../../assets/societies/placeholder.svg";
const AutoPlay = ({ history }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: window.innerWidth < 500 ? 1 : 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  const onClickHandler = (society) => {
    history.push(`/society/${society.name.toLowerCase()}`);
  };
  console.log(window.innerWidth);
  return (
    <div>
      <div className="slider-container">
        <img data-aos='fade-right' src={placeholder} alt="p2" className="placeholder22" />
        <img data-aos='fade-left' src={placeholder} alt="p2" className="placeholder23" />
        <h2 data-aos='fade-up' className="section-heading2">Collaborating Societies</h2>
        <Slider {...settings}>
          {societies.map((society) => (
            <div
              key={society.key}
              className="society2"
              onClick={() => {
                onClickHandler(society);
              }}
            >
              <div className="image-cont">
                {" "}
                <img src={society.logo} alt="society" />
              </div>
              <div className="title-cont">
                <span className="underline">{society.name}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default withRouter(AutoPlay);
