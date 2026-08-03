import "./ContactInfo.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const contactData = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    title: "Call Us",
    value: "+91 98765 43210",
    info: "Mon - Fri, 9 AM - 7 PM IST",
    link: "tel:+919876543210",
    color: "primary",
  },

  {
    id: 2,
    icon: <FaEnvelope />,
    title: "Email Us",
    value: "hello@growthai.com",
    info: "We reply within 2 hours",
    link: "mailto:hello@growthai.com",
    color: "accent",
  },

  {
    id: 3,
    icon: <FaMapMarkerAlt />,
    title: "Visit Us",
    value: "123 Business Avenue",
    info: "Tech Park, Mumbai - 400001",
    link: "https://maps.google.com/?q=123+Business+Avenue+Mumbai+400001",
    color: "secondary",
  },

  {
    id: 4,
    icon: <FaClock />,
    title: "Working Hours",
    value: "Mon - Sat: 9 AM - 7 PM",
    info: "Sunday: Closed",
    link: null,
    color: "primary",
  },
];

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <div className="container">
        <div className="info-grid">
          {contactData.map((item) =>
            item.link ? (
              <a
                key={item.id}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : ""}
                rel="noreferrer"
                className="info-card"
              >
                <div className={`info-icon ${item.color}`}>
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p className="value">{item.value}</p>

                <span>{item.info}</span>
              </a>
            ) : (
              <div key={item.id} className="info-card">
                <div className={`info-icon ${item.color}`}>
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p className="value">{item.value}</p>

                <span>{item.info}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;