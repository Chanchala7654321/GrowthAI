import React from "react";
import { Link } from "react-router-dom";
import { FaChartBar, FaBrain, FaSearch } from "react-icons/fa";
import "./MarketCTA.css";

const MarketCTA = () => {
  return (
    <section className="market-cta">
      <div className="container">
        <div className="cta-content">

          <div className="cta-icon">
            <FaChartBar />
          </div>

          <h2>
            Ready to Capitalize on These Trends?
          </h2>

          <p>
            Our team stays ahead of every digital trend so you don't have to.
            Let's build a strategy that positions your business for what's next.
          </p>

          <div className="cta-buttons">

            <Link
              to="/pain-point-analysis"
              className="cta-btn primary-btn"
            >
              <FaBrain />
              Analyze Your Business
            </Link>

            <Link
              to="/competitor-analysis"
              className="cta-btn outline-btn"
            >
              <FaSearch />
              Analyze Competitors
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MarketCTA;