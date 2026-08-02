import React from "react";
import "./HowItWorks.css";
import {
  FaUserPlus,
  FaShareAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

const steps = [
  {
    id: "01",
    icon: <FaUserPlus />,
    title: "Sign Up as a Partner",
    description:
      "Fill out the registration form below and become an official GrowthAI referral partner. It's completely free to join.",
  },
  {
    id: "02",
    icon: <FaShareAlt />,
    title: "Share & Refer",
    description:
      "Share your unique referral link with business owners, friends, and your network who need digital services.",
  },
  {
    id: "03",
    icon: <FaMoneyBillWave />,
    title: "Earn ₹1,000",
    description:
      "When your referral signs up for any of our services, you earn ₹1,000 instantly. No limit on referrals!",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">How It Works</span>

          <h2 className="section-title">
            Earn in <span>3 Simple Steps</span>
          </h2>

          <p className="section-subtitle">
            Getting started as a referral partner is easy. No investment, no
            targets — just refer and earn.
          </p>
        </div>

        <div className="steps-container">
          <div className="line"></div>

          {steps.map((step) => (
            <div className="step-card" key={step.id}>
              <div className="step-icon">{step.icon}</div>

              <span className="step-number">{step.id}</span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;