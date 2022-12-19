import React from "react";
import dev from "../assets/dev.svg";

const DevSection = () => {
  return (
    <div className="dev-section-container">
      <h1 className="dev-section-title">
        Building Cross•Chain <span className="highlighted">Together</span>
      </h1>
      <div className="dev-section-wrapper">
        <div className="dev-section-text">
          <h2>API SDK</h2>
          <p className="dev-section-description">
            Our goal is to provide a full ecosystem that makes it easy for
            developers create and deploy cross-chain applications.
          </p>
          <div className="btn-wrapper">
            <button className="primary">
              <span>Learn More</span>
            </button>
            <button className="secondary">
              <span>Get In Touch</span>
            </button>
          </div>
        </div>
        <div className="dev-section-image">
          <img src={dev} alt="dev tools" />
        </div>
      </div>
    </div>
  );
};

export default DevSection;
