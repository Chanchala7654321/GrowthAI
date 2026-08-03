import "./QuickLinks.css";
import { FaBrain, FaTags, FaChartLine, FaChartBar, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";

const QuickLinks = () => {

  const links = [

    {
      icon: <FaBrain />,
      title: "AI Business Analysis",
      path: "/pain-point-analysis",
    },

    {
      icon: <FaTags />,
      title: "Pricing",
      path: "/pricing",
    },

    {
      icon: <FaChartLine />,
      title: "Competitor Analysis",
      path: "/competitor-analysis",
    },

    {
      icon: <FaChartBar />,
      title: "Market Trends",
      path: "/market-trends",
    },

    {
      icon: <FaUserFriends />,
      title: "Referral Program",
      path: "/referral",
    },

  ];

  return (

    <div className="quick-card">

      <h3>Quick Links</h3>

      {links.map((item) => (

        <Link
          to={item.path}
          key={item.title}
          className="quick-link"
        >
          {item.icon}
          {item.title}
        </Link>

      ))}

    </div>

  );

};

export default QuickLinks;