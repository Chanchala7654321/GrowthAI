import "./ReferralHero.css";
import { Link } from "react-router-dom";
import {
  FaUserPlus,
  FaQuestionCircle,
} from "react-icons/fa";

const ReferralHero = () => {
  return (
    <section className="referral-hero">
      <div className="container">
        <div className="hero-content">

          <span className="hero-tag">
            Referral Partner Program
          </span>

          <h1 className="hero-title">
            Earn <span>₹1,000</span> for Every Business You Refer
          </h1>

          <p className="hero-description">
            Join our referral partner program and earn passive income by
            connecting businesses with professional digital growth services.
            No investment, no targets — just refer and earn.
          </p>

          <div className="hero-buttons">
            <a href="#referral-form" className="primary-btn">
              <FaUserPlus />
              Become a Partner
            </a>

            <Link to="/contact" className="outline-btn">
              <FaQuestionCircle />
              Have Questions?
            </Link>
          </div>

          <div className="hero-stats">

            <div className="stat-item">
              <h2>200+</h2>
              <p>Active Partners</p>
            </div>

            <div className="stat-item">
              <h2>₹15L+</h2>
              <p>Rewards Paid</p>
            </div>

            <div className="stat-item">
              <h2>98%</h2>
              <p>Satisfaction Rate</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralHero;