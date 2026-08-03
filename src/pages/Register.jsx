import "./Register.css";

import AuthHeader from "../components/Auth/AuthHeader";
import RegisterForm from "../components/Auth/RegisterForm";
import AuthFooter from "../components/Auth/AuthFooter";

const Register = () => {
  return (
    <main className="register-page">
      <div className="register-container">
        <div className="register-card">
          <AuthHeader
            icon="ri-user-add-line"
            title="Create Your Account"
            subtitle="Join GrowthAI and unlock AI-powered business insights"
            type="register"
          />

          <RegisterForm />

          <AuthFooter isLogin={false} />

          <p className="terms-text">
            By creating an account, you agree to our Terms of Service and Privacy
            Policy.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;