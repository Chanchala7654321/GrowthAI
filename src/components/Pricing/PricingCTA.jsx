import React from "react";
import { NavLink } from "react-router-dom";
import { FaBolt, FaComments } from "react-icons/fa";
import "./PricingCTA.css";

const PricingCTA = () => {
  return (
    <section className="pricing-cta">
      <div className="pricing-cta-container">

        <h2>
          Not Sure Which Plan to Choose?
        </h2>

        <p>
          Get a free AI-powered business analysis to discover exactly which
          services your business needs to grow.
        </p>

        <div className="pricing-cta-buttons">

          <NavLink
            to="/pain-point-analysis"
            className="cta-btn cta-primary"
          >
            <FaBolt />
            <span>Get Free AI Analysis</span>
          </NavLink>

          <NavLink
            to="/contact"
            className="cta-btn cta-outline"
          >
            <FaComments />
            <span>Talk to Our Team</span>
          </NavLink>

        </div>

      </div>
    </section>
  );
};

export default PricingCTA;