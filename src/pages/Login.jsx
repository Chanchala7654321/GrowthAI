import "./Login.css";

import AuthHeader from "../components/Auth/AuthHeader";
import LoginForm from "../components/Auth/LoginForm";
import AuthFooter from "../components/Auth/AuthFooter";

const Login = () => {
  return (
    <main className="login-page">
      <div className="login-container">
        <div className="login-card">
          <AuthHeader
            icon="ri-user-line"
            title="Welcome Back"
            subtitle="Sign in to access your AI analysis reports"
            type="login"
          />

          <LoginForm />

          <AuthFooter isLogin={true} />
        </div>
      </div>
    </main>
  );
};

export default Login;