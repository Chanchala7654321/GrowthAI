import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaUserPlus,
  FaSignInAlt,
} from "react-icons/fa";

import PasswordInput from "./PasswordInput";
import PasswordStrength from "./PasswordStrength";
import "./RegisterForm.css";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));

    alert("Registration Successful!");

    navigate("/login");
  };

  return (
    <div className="register-card">
      <form onSubmit={handleSubmit} className="register-form">

        {/* Full Name */}
        <div className="form-group">
          <label>
            <FaUser className="label-icon" />
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
          />

          {errors.fullName && (
            <small className="error">{errors.fullName}</small>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>
            <FaEnvelope className="label-icon" />
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <small className="error">{errors.email}</small>
          )}
        </div>

        {/* Password */}
        <PasswordInput
          label="Password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />

        {errors.password && (
          <small className="error">{errors.password}</small>
        )}

        <PasswordStrength password={formData.password} />

        {/* Confirm Password */}
        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        {errors.confirmPassword && (
          <small className="error">
            {errors.confirmPassword}
          </small>
        )}

        {/* Button */}
        <button type="submit" className="register-btn">
          <FaUserPlus />
          <span>Create Account</span>
        </button>
      </form>

    </div>
  );
};

export default RegisterForm;