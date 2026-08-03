import "./ContactCTA.css";
import { Link } from "react-router-dom";
import { FaBolt } from "react-icons/fa";

const ContactCTA = () => {
  return (
    <div className="contact-cta">

      <h3>Ready to Grow Faster?</h3>

      <p>
        Skip the form and get an instant AI analysis of your business.
        Discover what's holding you back in under 2 minutes.
      </p>

      <Link
        to="/pain-point-analysis"
        className="cta-btn"
      >
        <FaBolt />
        Free AI Analysis
      </Link>

    </div>
  );
};

export default ContactCTA;