import { useState } from "react";
import "./PasswordInput.css";

function PasswordInput({
  label,
  placeholder,
  value,
  onChange,
  name,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-group">
      <label>{label}</label>

      <div className="password-input">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete="off"
        />

        <button
          type="button"
          className="eye-btn"
          onClick={() => setShowPassword(!showPassword)}
        >
          <i
            className={
              showPassword ? "ri-eye-off-line" : "ri-eye-line"
            }
          ></i>
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;