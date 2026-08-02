import React from "react";
import "./SeoPlans.css";

import {
  FaSearch,
  FaBullhorn,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";

const SeoPlans = () => {
  return (
    <section className="seo-section">
      <div className="container">

        <div className="seo-heading">
          <h2>Marketing & SEO Plans</h2>

          <p>
            Monthly plans to boost your online visibility and drive growth.
          </p>
        </div>

        <div className="seo-grid">

          {/* SEO Package */}

          <div className="seo-card">

            <div className="seo-icon">
              <FaSearch />
            </div>

            <h3>SEO Package</h3>

            <p className="plan-subtitle">
              Rank higher on Google
            </p>

            <div className="price">
              ₹7,999
              <span>/month</span>
            </div>

            <p className="description">
              Comprehensive SEO services to improve your search rankings and
              drive organic traffic.
            </p>

            <hr />

            <ul>

              <li><FaCheck /> Keyword Research & Strategy</li>

              <li><FaCheck /> On-Page SEO Optimization</li>

              <li><FaCheck /> Technical SEO Audit</li>

              <li><FaCheck /> Content Optimization</li>

              <li><FaCheck /> Monthly Performance Reports</li>

              <li><FaCheck /> Competitor Analysis</li>

              <li><FaCheck /> Link Building Strategy</li>

              <li><FaCheck /> Local SEO Optimization</li>

            </ul>

            <button className="outline-btn">
              Boost Rankings
              <FaArrowRight />
            </button>

          </div>

          {/* Digital Marketing */}

          <div className="seo-card featured">

            <span className="badge">
              Best Value
            </span>

            <div className="seo-icon featured-icon">
              <FaBullhorn />
            </div>

            <h3>Digital Marketing</h3>

            <p className="plan-subtitle">
              Grow your reach
            </p>

            <div className="price">
              ₹12,999
              <span>/month</span>
            </div>

            <p className="description">
              End-to-end digital marketing campaigns to generate leads and
              increase brand awareness.
            </p>

            <hr />

            <ul>

              <li><FaCheck /> Social Media Management</li>

              <li><FaCheck /> Google Ads Campaigns</li>

              <li><FaCheck /> Facebook & Instagram Ads</li>

              <li><FaCheck /> Email Marketing</li>

              <li><FaCheck /> Content Creation</li>

              <li><FaCheck /> Monthly Analytics Reports</li>

              <li><FaCheck /> A/B Testing</li>

              <li><FaCheck /> Conversion Optimization</li>

              <li><FaCheck /> Remarketing Campaigns</li>

            </ul>

            <button className="primary-btn">
              Start Growing
              <FaArrowRight />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SeoPlans;