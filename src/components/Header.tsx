import type { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';
import { Link } from 'preact-router/match';
import '../styles/Header.css';

const Header: FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link path="/">
            <h1>
              <span className="logo-obviously">OBVIOUSLY</span>
              <span className="logo-limited">LIMITED</span>
            </h1>
          </Link>
        </div>

        <button
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav className={`main-nav ${menuOpen ? 'menu-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a  href="/">Home</a>
            </li>
            <li className="nav-item">
              <a  href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a  href="/about">About</a>
            </li>
            <li className="nav-item">
              <a  href="/collaboration">Collaboration</a>
            </li>
            <li className="nav-item nav-cta">
              <a href="/collaboration" className="button nav-button">Create Strategy</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
