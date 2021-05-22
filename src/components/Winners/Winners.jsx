import React from "react";
import "./Winner.styles.scss";
import scipher from "../../assets/winners/scipher.jpeg";
export default function Winners() {
  return (
    <section id="team" className="section section-team">
      <h1 className="section-heading" style={{ marginBottom: "0" }}>
        Meet The Winners
      </h1>
      <div className="section-content-winner">
        <div className="winner">
          <img src={scipher} alt="winner-img" />
          <p>Scipher Hunt</p>
        </div>
      </div>
    </section>
  );
}
