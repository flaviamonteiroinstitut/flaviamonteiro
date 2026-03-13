import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import logo from "../../assets/img/logo1.png";
import insta from "../../assets/img/instagram.png";

import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  const [isMenuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuVisible ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuVisible]);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleItemClick = (path) => {
    setMenuVisible(false);
    navigate(path);
  };

  return (
    <div className="header-container">
      <img
        className="header-logo"
        src={logo}
        alt="logo"
        onClick={navigateToHome}
      />

      <div
        className={`header-sandwich ${isMenuVisible ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {isMenuVisible && (
        <div className="header-overlay" onClick={toggleMenu} />
      )}

      <nav className={`header-nav ${isMenuVisible ? "visible" : ""}`}>
        <ul className="header-menu">
          <li onClick={() => handleItemClick("/apropos")}>À propos</li>
          <li onClick={() => handleItemClick("/monceau")}>Monceau</li>
<li onClick={() => handleItemClick("/photos")}>Galerie</li>
          <li onClick={() => handleItemClick("/prestations")}>Prestations</li>
          <li onClick={() => handleItemClick("/agenda")}>Cours</li>
        </ul>
        <ul className="header-menu1">
          <li>
            <a
              href="https://www.planity.com/flavia-monteiro-institut-de-massage-75017-paris"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="header-button">Réserver Monceau</button>
            </a>
          </li>
        </ul>
        <ul className="header-social">
          <li>
            <a
              className="header-link"
              href="https://www.instagram.com/flaviapilatesparis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="header-insta" src={insta} alt="" />
              <span>Pilates & Yoga</span>
            </a>
          </li>
          <li>
            <a
              className="header-link"
              href="https://www.instagram.com/flaviamonteiromassages/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="header-insta" src={insta} alt="" />
              <span>Massages</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
