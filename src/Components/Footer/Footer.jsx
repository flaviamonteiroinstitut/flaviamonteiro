//Import packages
import React, { useState } from "react";

import "./footer.css";
import logo from "../../assets/img/logo1.png";
import insta from "../../assets/img/instagram.png";

const Footer = () => {
  const [showLegalMentions, setShowLegalMentions] = useState(false);

  const toggleLegalMentions = () => {
    setShowLegalMentions(!showLegalMentions);
  };
  return (
    <div>
      <div className="footer-container">
        <div>
          <img className="footer-logo" src={logo} alt="Logo" />
        </div>
        <div className="footer-items">
          <span className="footer-title">Le Cabinet</span>
          <span className="footer-text">
           <a href="https://www.google.com/maps?q=12+Rue+de+Phalsbourg,+75017+Paris" target="_blank" rel="noopener noreferrer">
             12 Rue de Phalsbourg <br />
             75017 Paris
             </a>
          </span>
        </div>
        <div className="footer-items">
          <span className="footer-title">Me Contacter</span>
          <span className="footer-text">07 81 98 84 89</span>
        </div>

        <div className="footer-social">
          <a
            className="footer-link"
            href="https://www.instagram.com/flaviapilatesparis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="footer-insta" src={insta} alt="Instagram" />
            <span>Pilates & Yoga</span>
          </a>
          <a
            className="footer-link"
            href="https://www.instagram.com/flaviamonteiromassages/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="footer-insta" src={insta} alt="Instagram" />
            <span>Massages</span>
          </a>
        </div>
      </div>
      <address className="footer-mentions">
        <a href="#!" onClick={toggleLegalMentions}>
          Mentions légales
        </a>
        {showLegalMentions && (
          <div className="legal-mentions-text">
            Site web hébergé sur https://www.netlify.com/ <br />
            Toutes les photographies présentes sur ce site sont la propriété exclusive de Flavia Monteiro. Toute reproduction ou utilisation sans autorisation expresse est strictement interdite. <br />
            Site web créé en React.Js par felipefarnetti@gmail.com <br />
            Politique de confidentialité : Aucune donnée personnelle n'est collectée ni stockée lors de votre visite sur ce site. Nous n'utilisons pas de cookies pour collecter des informations personnelles. <br />
            Pour toute question ou demande d'information, vous pouvez nous contacter à l'adresse suivante : flaviavkb@gmail.com
            <span
              className="legal-mentions-close"
              onClick={toggleLegalMentions}
            >
              FERMER
            </span>
          </div>
        )}
      </address>
    </div>
  );
};

export default Footer;
