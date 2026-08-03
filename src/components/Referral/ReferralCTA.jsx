import React from "react";
import "./ReferralCTA.css";
import { RiUserStarLine } from "react-icons/ri";

const ReferralCTA = () => {
  return (
    <section className="referral-cta">
      <div className="referral-cta-overlay"></div>

      <div className="container">
        <div className="referral-cta-content">
          <h2>
            Start <span>Earning Today</span>
          </h2>

          <p>
            There's no limit to what you can earn. Every business you refer
            brings you closer to your financial goals.
          </p>

          <a href="#referral-form" className="cta-btn">
            <RiUserStarLine />
            Join the Program Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReferralCTA;

