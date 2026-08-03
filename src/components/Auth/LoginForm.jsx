import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  RiUserLine,
  RiEyeLine,
  RiEyeOffLine,
  RiLoginBoxLine,
} from "react-icons/ri";
import "./LoginForm.css";

const LoginForm = () => {
  const navigate = useNavigate();

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

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("No account found. Please register first.");
      return;
    }

    if (
      user.email === formData.email &&
      user.password === formData.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login Successful!");
      navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-card">

      {/* Form */}
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

      {/* Footer */}
      <div className="login-footer">
        <span>Don't have an account?</span>

        <Link to="/register">Create Account</Link>
      </div>
    </div>
  );
};

export default LoginForm;