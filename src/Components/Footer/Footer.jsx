import { useState } from "react";
import { Link } from "react-router-dom";

import "./footer.css";

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

const Footer = () => {
  const [showLegal, setShowLegal] = useState(false);
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <p className="footer__tagline">Breath, Tone &amp; Drain</p>
        </div>

        <div className="footer__col">
          <h4>Cabinet Monceau</h4>
          <a
            href="https://maps.app.goo.gl/zG7tKkjWNvg8mWBN7"
            target="_blank"
            rel="noopener noreferrer"
          >
            12 Rue de Phalsbourg
            <br />
            75017 Paris
          </a>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <a href="tel:+33781988489">07 81 98 84 89</a>
          <a href="mailto:flaviavkb@gmail.com">flaviavkb@gmail.com</a>
        </div>

        <div className="footer__col">
          <h4>Suivre</h4>
          <a
            href="https://www.instagram.com/flaviapilatesparis/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social"
          >
            <InstagramIcon />
            @flaviapilatesparis
          </a>
          <a
            href="https://www.instagram.com/flaviamonteiromassages/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social"
          >
            <InstagramIcon />
            @flaviamonteiromassages
          </a>
        </div>

        <div className="footer__col footer__col--cta">
          <a
            href="https://www.planity.com/flavia-monteiro-institut-de-massage-75017-paris"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Prendre rendez-vous
          </a>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>© {year} Flavia Monteiro. Tous droits réservés.</span>
        <div className="footer__bottom-links">
          <Link to="/apropos">À propos</Link>
          <Link to="/prestations">Prestations</Link>
          <button
            className="footer__legal-btn"
            onClick={() => setShowLegal(true)}
          >
            Mentions légales
          </button>
        </div>
      </div>

      {showLegal && (
        <div
          className="footer__modal-overlay"
          onClick={() => setShowLegal(false)}
        >
          <div
            className="footer__modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="footer__modal-close"
              onClick={() => setShowLegal(false)}
              aria-label="Fermer"
            >
              ×
            </button>
            <h3>Mentions légales</h3>
            <p>Site web hébergé sur netlify.com.</p>
            <p>
              Toutes les photographies présentes sur ce site sont la propriété
              exclusive de Flavia Monteiro. Toute reproduction ou utilisation
              sans autorisation expresse est strictement interdite.
            </p>
            <p>Site web créé en React.js par felipefarnetti@gmail.com</p>
            <p>
              <strong>Confidentialité :</strong> aucune donnée personnelle n'est
              collectée ni stockée lors de votre visite. Aucun cookie de
              tracking n'est utilisé.
            </p>
            <p>
              Pour toute question, contact :{" "}
              <a href="mailto:flaviavkb@gmail.com">flaviavkb@gmail.com</a>
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
