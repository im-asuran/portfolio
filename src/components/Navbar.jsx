import { useState } from "react";
import { NAV_LINKS } from "../utils";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo">
          SGR
        </a>
        <button
          className={`navbar-toggle${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`navbar-links${menuOpen ? " active" : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
