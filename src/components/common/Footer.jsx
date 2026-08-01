import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

import {
  FaRocket,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-column">
          <NavLink to="/" className="footer-logo">
            <div className="logo-icon">
              <FaRocket />
            </div>

            <h2>GrowthAI</h2>
          </NavLink>

          <p className="footer-description">
            AI-powered digital growth platform helping businesses analyze,
            optimize, and scale their online presence with smart AI-powered
            recommendations.
          </p>

          <div className="social-icons" id="footerIcons">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaXTwitter />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/referral">Referral Program</NavLink>
          <NavLink to="/market-trends">Market Trends</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Our Services</h3>

          <NavLink to="/pricing">Website Development</NavLink>
          <NavLink to="/pricing">SEO Optimization</NavLink>
          <NavLink to="/pricing">Digital Marketing</NavLink>
          <NavLink to="/pricing">E-Commerce Solutions</NavLink>
          <NavLink to="/pricing">Business Analysis</NavLink>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Us</h3>

          <div className="contact-item">
            <FaMapMarkerAlt />

            <span>
              123 Business Avenue,
              <br />
              Tech Park,
              <br />
              Mumbai - 400001, India
            </span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />

            <a href="tel:+919876543210">
              +91 98765 43210
            </a>
          </div>

          <div className="contact-item">
            <MdEmail />

            <a href="mailto:hello@growthai.com">
              hello@growthai.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}

      <div className="footer-bottom">

        <p>
          © 2026 <span>GrowthAI</span>. All Rights Reserved.
        </p>

        <div className="footer-policy">
          <NavLink to="/privacy">
            Privacy Policy
          </NavLink>

          <NavLink to="/terms">
            Terms of Service
          </NavLink>
        </div>

      </div>
    </footer>
  );
};

export default Footer;