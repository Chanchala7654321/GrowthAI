import React from "react";
import { NavLink } from "react-router-dom";
import { FaRocket } from "react-icons/fa";
import "./FinalCTA.css";

const FinalCTA = () => {
  return (
    <section className="final-cta">
      <div className="final-cta-overlay"></div>

      <div className="final-cta-container">
        <h2>
          Ready to <span>Get Started</span>?
        </h2>

        <p>
          Join 500+ businesses that have transformed their digital presence with
          GrowthAI. Your success story starts here.
        </p>

        <NavLink to="/contact" className="cta-btn">
          <FaRocket />
          <span>Start Your Project Today</span>
        </NavLink>
      </div>
    </section>
  );
};

export default FinalCTA;