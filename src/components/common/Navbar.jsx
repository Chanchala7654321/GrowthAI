import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRocket } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/referral">Referral</NavLink>
          <NavLink to="/market-trends">Trends</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Desktop Buttons */}
        <div className="nav-buttons">
          <NavLink to="/login" className="sign-in">
            Sign In
          </NavLink>

          <NavLink to="/register" className="btn-primary">
            Get Started
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/pricing" onClick={closeMenu}>Pricing</NavLink>
        <NavLink to="/referral" onClick={closeMenu}>Referral</NavLink>
        <NavLink to="/market-trends" onClick={closeMenu}>Trends</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

        <NavLink to="/login" className="mobile-signin" onClick={closeMenu}>
          Sign In
        </NavLink>

        <NavLink to="/register" className="mobile-btn" onClick={closeMenu}>
          Get Started
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;