import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaRocket } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { RiUserLine, RiArrowDownSLine, RiLogoutBoxRLine } from "react-icons/ri";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
    setUserDropdownOpen(false);
  };

  const handleGetStarted = () => {
    closeMenu();
    if (isLoggedIn) {
      navigate("/analysis");
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    closeMenu();
    logout();
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <div className="logo-box">
            <FaRocket />
          </div>
          <h2>GrowthAI</h2>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          {isLoggedIn && (
            <>
              <NavLink to="/analysis">AI Analysis</NavLink>
              <NavLink to="/growth-assistant">AI Assistant</NavLink>
              <NavLink to="/competitor">Competitor</NavLink>
            </>
          )}

          <NavLink to="/">Home</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/referral">Referral</NavLink>
          <NavLink to="/trends">Trends</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Right Section: Logged In vs Logged Out */}
        <div className="nav-buttons">
          {isLoggedIn ? (
            <div className="user-profile-wrapper">
              <button
                className="user-profile-btn"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              >
                <div className="user-avatar-badge">
                  <RiUserLine />
                </div>
                <span className="user-name">{user?.name || "Kamla"}</span>
                <RiArrowDownSLine className={`arrow-icon ${userDropdownOpen ? "open" : ""}`} />
              </button>

              {userDropdownOpen && (
                <div className="user-dropdown-menu">
                  <div className="dropdown-user-header">
                    <p className="dropdown-user-name">{user?.name || "Kamla"}</p>
                    <p className="dropdown-user-email">{user?.email || "kamla@example.com"}</p>
                  </div>
                  <hr className="dropdown-divider" />
                  <button className="dropdown-logout-btn" onClick={handleLogout}>
                    <RiLogoutBoxRLine />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink to="/login" className="sign-in">
                Sign In
              </NavLink>

              <button className="btn-primary" onClick={handleGetStarted}>
                Get Started
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        {isLoggedIn && (
          <>
            <NavLink to="/analysis" onClick={closeMenu}>
              AI Analysis
            </NavLink>
            <NavLink to="/growth-assistant" onClick={closeMenu}>
              AI Assistant
            </NavLink>
            <NavLink to="/competitor" onClick={closeMenu}>
              Competitor
            </NavLink>
          </>
        )}

        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/pricing" onClick={closeMenu}>
          Pricing
        </NavLink>
        <NavLink to="/referral" onClick={closeMenu}>
          Referral
        </NavLink>
        <NavLink to="/trends" onClick={closeMenu}>
          Trends
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>

        {isLoggedIn ? (
          <div className="mobile-user-box">
            <p className="mobile-user-name">Signed in as <strong>{user?.name || "Kamla"}</strong></p>
            <button className="mobile-logout-btn" onClick={handleLogout}>
              Sign Out
            </button>
          </div>
        ) : (
          <>
            <NavLink to="/login" className="mobile-signin" onClick={closeMenu}>
              Sign In
            </NavLink>

            <button className="mobile-btn" onClick={handleGetStarted}>
              Get Started
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;