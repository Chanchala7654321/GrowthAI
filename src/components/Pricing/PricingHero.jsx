import "./PricingHero.css";

import {
  FaShieldAlt,
  FaUndoAlt,
  FaHeadset,
} from "react-icons/fa";

const PricingHero = () => {
  return (
    <section className="pricing-hero">

      <div className="pricing-container">

        <div className="pricing-content">

          <span className="pricing-badge">
            Pricing Plans
          </span>

          <h1 className="pricing-title">
            Transparent Pricing for{" "}
            <span>Every Business</span>
          </h1>

          <p className="pricing-description">
            From startups to enterprises, we have the right plan for your
            digital growth journey. All plans come with dedicated support and
            AI-powered insights.
          </p>

          <div className="pricing-features">

            <div className="feature-item">
              <FaShieldAlt className="feature-icon" />
              <span>No Hidden Fees</span>
            </div>

            <div className="feature-item">
              <FaUndoAlt className="feature-icon" />
              <span>Money-Back Guarantee</span>
            </div>

            <div className="feature-item">
              <FaHeadset className="feature-icon" />
              <span>24/7 Support</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PricingHero;

