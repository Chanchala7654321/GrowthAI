import { useState } from "react";
import { FaPaperPlane, FaEnvelope, FaRegPaperPlane } from "react-icons/fa";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    console.log("Subscribed:", email);

    alert("Thank you for subscribing!");

    setEmail("");
  };

  return (
    <section className="newsletter">
      <div className="container">

        <div className="newsletter-content">

          <div className="newsletter-icon">
            <FaPaperPlane />
          </div>

          <h2>Stay Ahead of the Curve</h2>

          <p>
            Get weekly market trend reports, industry forecasts, and actionable
            insights delivered straight to your inbox. No spam, just value.
          </p>

          <form
            className="newsletter-form"
            onSubmit={handleSubmit}
          >

            <div className="input-box">

              <FaEnvelope className="input-icon" />

              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>

            <button type="submit">
              <FaRegPaperPlane />
              Subscribe
            </button>

          </form>

          <small>
            No spam, unsubscribe anytime. We respect your privacy.
          </small>

        </div>

      </div>
    </section>
  );
};

export default Newsletter;