import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
// import { ReactComponent as Image } from '../../assets/about-section/icon-pack.svg';
import placeholder from "../../assets/about-section/placeholder.svg";
import placeholder_2 from "../../assets/about-section/placeholder_2.svg";
import "./About.styles.scss";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="about" className="section section-about">
      <img
        data-aos="fade-up"
        className="placeholder"
        alt={"ph"}
        src={placeholder}
      />
      <img
        data-aos="fade-left"
        className="placeholder_2"
        alt={"ph2"}
        src={placeholder_2}
      />

      <h1 data-aos="fade-down" className="section-heading">
        About
      </h1>

      <div className="section-content">
        <div className="info">
          <p data-aos="zoom-in">
            The key to unlock the effect of this pandemic isn't just a vaccine.
            It requires a paradigm shift in the monotony of life for students.
            With classes going online and anxiety clouding their thoughts, a
            little burst of magic is imperative to keep them motivated. We're
            here to create that magic.
          </p>
        </div>
        <div className="image-container"></div>
      </div>
    </section>
  );
};

export default AboutUs;
