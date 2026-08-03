import React from "react";
import "./Benefits.css";
import {
  RiMoneyRupeeCircleLine,
  RiInfinityLine,
  RiBankLine,
  RiLinkM,
  RiMedalLine,
  RiCustomerService2Line,
} from "react-icons/ri";

const benefits = [
  {
    icon: <RiMoneyRupeeCircleLine />,
    title: "₹1,000 Per Referral",
    description:
      "Earn ₹1,000 instantly for every business that signs up for any of our services through your referral link.",
  },
  {
    icon: <RiInfinityLine />,
    title: "Unlimited Earnings",
    description:
      "There is no cap on how many referrals you can make. The more you refer, the more you earn — it's that simple.",
  },
  {
    icon: <RiBankLine />,
    title: "Fast Payouts",
    description:
      "Payments are processed within 7 business days directly to your bank account or UPI ID after confirmation.",
  },
  {
    icon: <RiLinkM />,
    title: "Personal Referral Link",
    description:
      "Get your unique tracking link to share with your network. Track your referrals and earnings in real-time.",
  },
  {
    icon: <RiMedalLine />,
    title: "Partner Recognition",
    description:
      "Top-performing partners get featured on our website, exclusive bonuses, and priority access to new services.",
  },
  {
    icon: <RiCustomerService2Line />,
    title: "Dedicated Support",
    description:
      "Access to a dedicated partner manager who helps you close referrals and answers your questions.",
  },
];

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits-header">
          <span className="benefits-tag">Partner Benefits</span>

          <h2 className="benefits-title">
            Why Become a <span>Referral Partner</span>?
          </h2>

          <p className="benefits-subtitle">
            Join a growing community of partners who earn passive income by
            connecting businesses with digital growth solutions.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;