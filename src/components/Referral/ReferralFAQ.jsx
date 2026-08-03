import React, { useState } from "react";
import "./ReferralFAQ.css";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";

const faqData = [
  {
    question: "How does the ₹1,000 referral reward work?",
    answer:
      "When someone you refer signs up for any GrowthAI service (website development, SEO, digital marketing, etc.), you earn ₹1,000. The reward is paid within 7 business days after the referred business makes their payment. There's no limit on how many referrals you can make.",
  },
  {
    question: "Is there any cost to join the referral program?",
    answer:
      "No, the referral partner program is completely free to join. There are no registration fees, no hidden charges, and no minimum referral requirements. You simply sign up, share your link, and earn when someone signs up.",
  },
  {
    question: "How do I track my referrals and earnings?",
    answer:
      "Once registered, you'll receive a unique referral link and access to a partner dashboard where you can track all your referrals, their status, and your total earnings in real-time. You'll also receive email notifications when a referral signs up.",
  },
  {
    question: "When and how do I get paid?",
    answer:
      "Payments are processed within 7 business days after the referred client's payment is confirmed. We transfer directly to your bank account or UPI ID. You can update your payment details anytime through the partner dashboard.",
  },
  {
    question: "Can I refer businesses from any city in India?",
    answer:
      "Yes! We serve businesses across India. You can refer businesses from any city or region. All our services are delivered remotely, so location is never a barrier.",
  },
  {
    question: "What if the business I refer doesn't sign up immediately?",
    answer:
      "Your referral link tracks indefinitely. Even if a business clicks your link now and signs up months later, you'll still get credit for the referral. We use persistent tracking to ensure you never miss out on a reward.",
  },
];

const ReferralFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="referral-faq">
      <div className="container">
        <div className="faq-header">
          <span className="faq-tag">FAQ</span>

          <h2 className="faq-title">
            Got <span>Questions</span>?
          </h2>

          <p className="faq-subtitle">
            Everything you need to know about the referral partner program.
          </p>
        </div>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>

                {activeIndex === index ? (
                  <RiSubtractLine />
                ) : (
                  <RiAddLine />
                )}
              </button>

              <div
                className={`faq-answer ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferralFAQ;

