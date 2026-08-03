import "./AuthHeader.css";

import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";

const AuthHeader = ({ title, subtitle, type }) => {
  const Icon = type === "register" ? FaUserPlus : FaUser;

  return (
    <div className="auth-header">
      <div
        className={`auth-header-icon ${
          type === "register" ? "register-icon" : "login-icon"
        }`}
      >
        <Icon />
      </div>

      <h1 className="auth-header-title">{title}</h1>

      <p className="auth-header-subtitle">{subtitle}</p>
    </div>
  );
};

export default AuthHeader;