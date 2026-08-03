import React from "react";
import "./EarningsSection.css";
import { FaIndianRupeeSign } from "react-icons/fa6";

const EarningsSection = () => {
  return (
    <section className="earn-section">
      <div className="container">
        <div className="earn-card">
          <div className="earn-icon">
            <FaIndianRupeeSign />
          </div>

          <h2 className="earn-title">
            Earn <span>₹1,000</span> Per Referral
          </h2>

          <p className="earn-description">
            For every business you refer that signs up for any GrowthAI service
            — whether it's a basic website, SEO package, or premium solution —
            you earn <strong>₹1,000</strong> directly to your bank account or
            UPI.
          </p>

          <div className="earn-stats">
            <div className="stat-box">
              <h3>₹1,000</h3>
              <p>Per Referral</p>
            </div>

            <div className="stat-box">
              <h3>Unlimited</h3>
              <p>Earning Potential</p>
            </div>

            <div className="stat-box">
              <h3>7 Days</h3>
              <p>Payment Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningsSection;

