import React from "react";
import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import heroImg from "../../assets/search-image.jpeg";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <img
        src={heroImg}
        alt="Hero"
        className="hero-image"
      />

      <div className="container hero-content">

        <span className="hero-badge">
          AI Powered Digital Growth Platform
        </span>

        <h1>
          Transform Your Business With
          <span> AI-Driven </span>
          Digital Growth
        </h1>

        <p>
          Get personalized AI insights to optimize your website,
          boost SEO rankings, and accelerate your digital marketing
          with powerful AI recommendations.
        </p>

        <div className="hero-btns">

          <button className="primary-btn">
            <BsLightningChargeFill />
            Free AI Analysis
          </button>

          <button className="secondary-btn">
            View Pricing
            <FaArrowRight />
          </button>

        </div>

        <div className="hero-stats">

          <div>
            <h2>500+</h2>
            <span>Businesses Analyzed</span>
          </div>

          <div>
            <h2>98%</h2>
            <span>Client Satisfaction</span>
          </div>

          <div>
            <h2>3X</h2>
            <span>Business Growth</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;