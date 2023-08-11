import { useNavigate } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/img/logo1.png";
import insta from "../../assets/img/instagram.png";

import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleItemClick = (path) => {
    setMenuVisible(false);
    navigate(path);
  };

  return (
    <div className="header-container">
      <div
        className={`header-sandwich ${isMenuVisible ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img
        className="header-logo"
        src={logo}
        alt="logo"
        onClick={navigateToHome}
      />

      <nav className={`header-nav ${isMenuVisible ? "visible" : ""}`}>
        <ul className="header-menu">
          <li onClick={() => handleItemClick("/apropos")}>À propos de moi</li>
          <li onClick={() => handleItemClick("/lecabinet")}>Le cabinet</li>
          <li onClick={() => handleItemClick("/photos")}>Galerie</li>
          <li onClick={() => handleItemClick("/prestations")}>Prestations</li>
          <li onClick={() => handleItemClick("/evenements")}>Évènements</li>
        </ul>
        <ul className="header-menu1">
          <li>
            <a
              href="https://www.planity.com/flavia-monteiro-institut-de-massage-75017-paris"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="header-button">RESERVER</button>
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
