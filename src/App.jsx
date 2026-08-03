import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Referral from "./pages/Referral";
import MarketTrends from "./pages/MarketTrends";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Analysis from "./pages/Analysis";
import AnalysisReport from "./pages/AnalysisReport";
import CompetitorAnalysis from "./pages/CompetitorAnalysis";
import GrowthAssistant from "./pages/GrowthAssistant";
import { AuthProvider, useAuth } from "./context/AuthContext";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// Route for Login / Register when already logged in
const PublicOnlyRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return <Navigate to="/analysis" replace />;
  }
  return children;
};

function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/referral" element={<Referral />} />
        <Route path="/trends" element={<MarketTrends />} />
        <Route path="/market-trends" element={<MarketTrends />} />
        <Route path="/contact" element={<Contact />} />

        {/* Auth Pages (Public Only) */}
        <Route
          path="/login"
          element={
            <PublicOnlyRoute>
              <Login />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicOnlyRoute>
              <Register />
            </PublicOnlyRoute>
          }
        />

        {/* Protected / Logged-in Pages */}
        <Route
          path="/analysis"
          element={
            <ProtectedRoute>
              <Analysis />
            </ProtectedRoute>
          }
        />
        <Route
          path="/growth-assistant"
          element={
            <ProtectedRoute>
              <GrowthAssistant />
            </ProtectedRoute>
          }
        />
        <Route
          path="/assistant"
          element={
            <ProtectedRoute>
              <GrowthAssistant />
            </ProtectedRoute>
          }
        />
        <Route
          path="/analysis-report"
          element={
            <ProtectedRoute>
              <AnalysisReport />
            </ProtectedRoute>
          }
        />
        <Route
          path="/competitor"
          element={
            <ProtectedRoute>
              <CompetitorAnalysis />
            </ProtectedRoute>
          }
        />

        {/* Catch-all Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;