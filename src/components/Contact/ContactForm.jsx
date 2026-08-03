import "./ContactForm.css";
import { FaPaperPlane } from "react-icons/fa";
import QuickLinks from "./QuickLinks";
import SocialLinks from "./SocialLinks";
import ContactCTA from "./ContactCTA";

const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">
            Get In Touch
          </span>

          <h2 className="section-title">
            Send Us a <span>Message</span>
          </h2>

          <p className="section-description">
            Fill out the form below and our team will get back to you within 2
            hours during business hours.
          </p>
        </div>

        <div className="contact-grid">

          <div className="contact-left">

            <form className="contact-form">

              <div className="form-row">

                <div>
                  <label>Full Name *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label>Email *</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>

              </div>

              <div className="form-row">

                <div>
                  <label>Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div>

                  <label>Subject *</label>

                  <select>

                    <option>General Inquiry</option>

                    <option>Website Development</option>

                    <option>SEO Services</option>

                    <option>Digital Marketing</option>

                    <option>AI Analysis</option>

                    <option>Referral Program</option>

                  </select>

                </div>

              </div>

              <label>Message *</label>

              <textarea
                rows="6"
                placeholder="Tell us about your project..."
              ></textarea>

              <button className="send-btn">

                <FaPaperPlane />

                Send Message

              </button>

            </form>

          </div>

          <div className="contact-right">

            <QuickLinks />

            <SocialLinks />

            <ContactCTA />

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;