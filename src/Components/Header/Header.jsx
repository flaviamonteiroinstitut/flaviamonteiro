import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import logo from "../../assets/img/logo-fla.png";
import "./header.css";

const InstagramIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const NAV_ITEMS = [
  { path: "/apropos", label: "À propos" },
  { path: "/monceau", label: "Monceau" },
  { path: "/photos", label: "Galerie" },
  { path: "/prestations", label: "Prestations" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevPath, setPrevPath] = useState(location.pathname);

  // Ferme le menu mobile au changement de route (pattern "adjust state on prop change")
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isHome = location.pathname === "/";
  const transparent = isHome && !isScrolled && !isMenuOpen;

  return (
    <header
      className={`nav ${transparent ? "nav--transparent" : "nav--solid"} ${
        isMenuOpen ? "nav--open" : ""
      }`}
    >
      <div className="nav__inner">
        <button
          className="nav__brand"
          onClick={() => navigate("/")}
          aria-label="Accueil"
        >
          <img src={logo} alt="Flavia Monteiro" />
        </button>

        <nav className="nav__desktop" aria-label="Navigation principale">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav__link--active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <a
            href="https://www.planity.com/flavia-monteiro-institut-de-massage-75017-paris"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary nav__cta"
          >
            Réserver
          </a>
          <button
            className={`nav__burger ${isMenuOpen ? "nav__burger--open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={`nav__mobile ${isMenuOpen ? "nav__mobile--open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="nav__mobile-backdrop" onClick={() => setMenuOpen(false)} />
        <div className="nav__mobile-panel">
          <nav className="nav__mobile-nav" aria-label="Navigation mobile">
            {NAV_ITEMS.map((item, i) => (
              <NavLink
                key={item.path}
                to={item.path}
                style={{ "--i": i }}
                className={({ isActive }) =>
                  `nav__mobile-link ${isActive ? "nav__mobile-link--active" : ""}`
                }
              >
                <span className="nav__mobile-link-index">
                  0{i + 1}
                </span>
                <span className="nav__mobile-link-label">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="nav__mobile-footer">
            <a
              href="https://www.planity.com/flavia-monteiro-institut-de-massage-75017-paris"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary nav__mobile-cta"
            >
              Réserver
            </a>

            <div className="nav__mobile-contact">
              <a href="tel:+33781988489">07 81 98 84 89</a>
              <a href="mailto:flaviavkb@gmail.com">flaviavkb@gmail.com</a>
            </div>

            <div className="nav__mobile-socials">
              <a
                href="https://www.instagram.com/flaviapilatesparis/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
                @flaviapilatesparis
              </a>
              <a
                href="https://www.instagram.com/flaviamonteiromassages/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
                @flaviamonteiromassages
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
