import "./WebsitePlans.css";
import {
  FaDesktop,
  FaBuilding,
  FaShoppingCart,
  FaGem,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";

const plans = [
  {
    title: "Basic Website",
    subtitle: "Perfect for startups",
    icon: <FaDesktop />,
    oldPrice: "₹14,999",
    price: "₹9,999",
    duration: "one-time",
    description:
      "A professional single-page website with essential features to establish your online presence.",
    features: [
      "1 Page Website",
      "Mobile Responsive Design",
      "Contact Form",
      "Basic SEO",
      "Social Links",
      "1 Month Support",
      "3 Revisions",
      "WhatsApp Integration",
    ],
    button: "Get Started",
    featured: false,
  },
  {
    title: "Business Website",
    subtitle: "For growing businesses",
    icon: <FaBuilding />,
    oldPrice: "₹34,999",
    price: "₹24,999",
    duration: "one-time",
    description:
      "Multi-page business website with advanced features and premium design.",
    features: [
      "Up to 10 Pages",
      "Responsive Design",
      "Advanced SEO",
      "Blog Integration",
      "Google Analytics",
      "3 Months Support",
      "Unlimited Revisions",
      "Admin Dashboard",
      "Performance Optimization",
    ],
    button: "Get Started",
    featured: true,
    badge: "Most Popular",
  },
  {
    title: "Ecommerce Website",
    subtitle: "Online store solution",
    icon: <FaShoppingCart />,
    oldPrice: "₹54,999",
    price: "₹39,999",
    duration: "one-time",
    description:
      "Complete ecommerce website with payment gateway and inventory.",
    features: [
      "25 Products",
      "Product Management",
      "Payment Gateway",
      "Cart & Checkout",
      "Order Management",
      "Inventory",
      "Customer Accounts",
      "SEO",
      "Email Notifications",
    ],
    button: "Start Selling",
    featured: false,
  },
  {
    title: "Premium Website",
    subtitle: "Enterprise solution",
    icon: <FaGem />,
    oldPrice: "₹79,999",
    price: "₹59,999",
    duration: "one-time",
    description:
      "Custom enterprise solution with premium support and integrations.",
    features: [
      "Unlimited Pages",
      "Custom UI/UX",
      "Advanced SEO",
      "API Integration",
      "Dashboard",
      "Multilanguage",
      "12 Months Support",
      "Project Manager",
      "Monthly Reports",
    ],
    button: "Contact Sales",
    featured: false,
  },
];

export default function WebsitePlans() {
  return (
    <section className="website-plans">
      <div className="container">
        <div className="section-heading">
          <h2>Website Development Plans</h2>
          <p>
            One-time investment for a professional website that drives results
          </p>
        </div>

        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div
              className={`plan-card ${plan.featured ? "featured" : ""}`}
              key={index}
            >
              {plan.featured && (
                <span className="plan-badge">{plan.badge}</span>
              )}

              <div className="plan-icon">{plan.icon}</div>

              <h3>{plan.title}</h3>

              <span className="subtitle">{plan.subtitle}</span>

              <div className="price-box">
                <span className="old-price">{plan.oldPrice}</span>

                <h2>{plan.price}</h2>

                <small>{plan.duration}</small>
              </div>

              <p className="description">{plan.description}</p>

              <ul>
                {plan.features.map((item, i) => (
                  <li key={i}>
                    <FaCheck />
                    {item}
                  </li>
                ))}
              </ul>

              <button>
                {plan.button}
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}