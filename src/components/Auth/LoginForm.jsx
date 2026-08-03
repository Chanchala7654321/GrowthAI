import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  RiEyeLine,
  RiEyeOffLine,
  RiLoginBoxLine,
} from "react-icons/ri";
import { useAuth } from "../../context/AuthContext";
import "./LoginForm.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));
    const userName = savedUser?.fullName || savedUser?.name || (formData.email ? formData.email.split("@")[0] : "Kamla");

    login({
      name: userName,
      email: formData.email || "kamla@example.com",
    });

    navigate("/analysis");
  };

  return (
    <div className="login-card">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="eye-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
            </button>
          </div>
        </div>

        <button type="submit" className="login-btn">
          <RiLoginBoxLine />
          <span>Sign In</span>
        </button>
      </form>

      <div className="login-footer">
        <span>Don't have an account?</span>
        <Link to="/register">Create Account</Link>
      </div>
    </div>
  );
};

export default LoginForm;