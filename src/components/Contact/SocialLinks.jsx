import "./SocialLinks.css";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const SocialLinks = () => {
  const social = [
    {
      icon: <FaFacebook />,
      name: "Facebook",
      color: "#1877f2",
    },

    {
      icon: <FaXTwitter />,
      name: "Twitter / X",
      color: "#000",
    },

    {
      icon: <FaInstagram />,
      name: "Instagram",
      color: "#e1306c",
    },

    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      color: "#0a66c2",
    },
  ];

  return (
    <div className="social-card">
      <h3>Follow Us</h3>

      <div className="social-grid">
        {social.map((item) => (
          <a
            href="/"
            key={item.name}
            style={{ color: item.color }}
            className="social-item"
          >
            {item.icon}

            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
