import "./ContactHero.css";
import { FaComments } from "react-icons/fa";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="contact-overlay"></div>

      <img
        src="https://readdy.ai/api/search-image?query=Modern%20minimalist%20office%20interior%20with%20warm%20terracotta%20accent%20wall%2C%20natural%20light%20streaming%20through%20large%20windows%2C%20clean%20wooden%20desk%20with%20laptop%2C%20indoor%20plants%2C%20abstract%20geometric%20art%20on%20wall%2C%20soft%20shadows%2C%20editorial%20photography%2C%20warm%20neutral%20tones%2C%20professional%20yet%20inviting%20atmosphere&width=1600&height=700&seq=contact-hero-2026&orientation=landscape"
        alt="GrowthAI Office"
        className="hero-image"
      />

      <div className="container hero-content">
        <div className="hero-icon">
          <FaComments />
        </div>

        <h1>
          Let's Build Something
          <span> Great Together</span>
        </h1>

        <p>
          Have a question, idea, or ready to start your digital transformation?
          We're all ears—drop us a message and we'll get back to you within
          2 hours.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;