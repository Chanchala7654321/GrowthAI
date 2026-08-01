import React from "react";
import "./About.css";

import {
  FaBrain,
  FaChartLine,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

import aboutImg from "../../assets/search-image-3.jpeg";

function About() {
  return (
    <section className="section bg-light" id="about">
      <div className="section-container">

        <div className="about-grid">

          {/* Left Side */}

          <div className="about-image-wrapper">

            <div className="about-image">
              <img
                src={aboutImg}
                alt="AI Dashboard"
              />
            </div>

            <div className="about-floating-badge">

              <div className="pulse-dot"></div>

              <span>AI Analysis Active</span>

            </div>

          </div>

          {/* Right Side */}

          <div className="about-content">

            <span className="section-badge">
              About GrowthAI
            </span>

            <h2>
              We Combine AI Intelligence With
              <span> Digital Strategy</span>
            </h2>

            <p>
              GrowthAI is an advanced AI-driven platform designed
              to help businesses identify digital gaps, optimize
              their online presence, and unlock new growth
              opportunities.
            </p>

            <p>
              Whether you need a stunning website, better SEO,
              or complete digital marketing services,
              our AI-powered recommendations help you grow faster.
            </p>

            <div className="about-features">

              <div className="about-feature">
                <div className="feature-icon-box">
                  <FaBrain />
                </div>

                <span>AI-Powered Analysis</span>
              </div>

              <div className="about-feature">
                <div className="feature-icon-box">
                  <FaChartLine />
                </div>

                <span>Data-Driven Strategy</span>
              </div>

              <div className="about-feature">
                <div className="feature-icon-box">
                  <FaRocket />
                </div>

                <span>Fast Implementation</span>
              </div>

              <div className="about-feature">
                <div className="feature-icon-box">
                  <FaShieldAlt />
                </div>

                <span>Proven Results</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;