import { RiCheckLine, RiCloseLine } from "react-icons/ri";
import "./PasswordStrength.css";

const PasswordStrength = ({ password }) => {
  const hasLength = password.length >= 6;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  return (
    <div className="password-strength">
      <p className={hasLength ? "valid" : "invalid"}>
        <span>6+ characters</span>
      </p>

      <p className={hasUppercase ? "valid" : "invalid"}>
        <span>1 uppercase letter</span>
      </p>

      <p className={hasNumber ? "valid" : "invalid"}>
        <span>1 number</span>
      </p>
    </div>
  );
};

export default PasswordStrength;