import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQ.css";

const faqData = [
  {
    question: "What is included in the website development cost?",
    answer:
      "All our website packages include design, development, mobile responsiveness, basic SEO, and the specified support period. Domain and hosting costs are separate. You get a complete, ready-to-launch website with all the features listed in your chosen plan.",
  },
  {
    question: "Do you offer EMI or installment payment options?",
    answer:
      "Yes! We offer flexible payment options including EMI through major banks and credit cards. You can split your payment into 3, 6, or 12 monthly installments. We also accept UPI, bank transfers, and all major credit/debit cards.",
  },
  {
    question: "How long does it take to complete a website?",
    answer:
      "Basic websites are typically delivered within 5–7 business days. Business websites take 10–15 days, and ecommerce or premium websites take 2–4 weeks depending on complexity.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely! You can upgrade from any plan to a higher tier at any time. You only pay the difference between your current plan and the new one.",
  },
  {
    question: "What happens after the free support period ends?",
    answer:
      "After your free support period, you can choose our maintenance plans starting from ₹1,999/month. It includes updates, security patches, support, and performance reports.",
  },
  {
    question:
      "Do the SEO and marketing packages require a long-term commitment?",
    answer:
      "No. Our SEO and marketing plans are month-to-month. However, we recommend at least 3–6 months to achieve the best results.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">

        <div className="faq-header">
          <span className="faq-badge">Pricing FAQ</span>

          <h2>
            Common <span>Questions</span>
          </h2>

          <p>
            Everything you need to know about our pricing and plans.
          </p>
        </div>

        <div className="faq-list">

          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>

                {activeIndex === index ? (
                  <FaMinus />
                ) : (
                  <FaPlus />
                )}
              </button>

              <div
                className={`faq-answer ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FAQ;