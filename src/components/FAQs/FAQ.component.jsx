import React from "react";
import Fade from "react-reveal/Fade";
import placeholder from "../../assets/about-section/placeholder.svg";
import placeholder_2 from "../../assets/about-section/placeholder_2.svg";

const FAQ = ({ faq: { open, question, answer }, index, toggleFAQ }) => {
  return (
    <Fade bottom delay={150}>
      <div
        className={`faq ${open ? "open" : ""}`}
        key={index}
        onClick={() => toggleFAQ(index)}
      >
        {/* Illustration starts here*/}
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
        {/* // Illustration ends here */}

        <div className="faq-question">{question}</div>
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      </div>
    </Fade>
  );
};

export default FAQ;
