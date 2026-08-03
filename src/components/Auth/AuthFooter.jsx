import { Link } from "react-router-dom";
import { RiUserAddLine, RiLoginBoxLine } from "react-icons/ri";
import "./AuthFooter.css";

const AuthFooter = ({ isLogin }) => {
  return (
    <div className="auth-footer">
      <div className="divider">
        <span>
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}
        </span>
      </div>

      {isLogin ? (
        <Link to="/register" className="auth-link-btn">
          <RiUserAddLine />
          <span>Create an Account</span>
        </Link>
      ) : (
        <Link to="/login" className="auth-link-btn">
          <RiLoginBoxLine />
          <span>Sign In</span>
        </Link>
      )}
    </div>
  );
};

export default AuthFooter;