import "./footer.css";
import logo from "../../assets/img/logo1.png";
import insta from "../../assets/img/instagram.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <img className="footer-logo" src={logo} alt="" />
      </div>
      <div className="footer-items">
        <span className="footer-title">Le Cabinet</span>
        <span className="footer-text">
          12 Rue de Phalsbourg <br />
          75017 Paris
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
          <img className="footer-insta" src={insta} alt="" />
          <span>Pilates & Yoga</span>
        </a>
        <a
          className="footer-link"
          href="https://www.instagram.com/flaviamonteiromassages/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer-insta" src={insta} alt="" />
          <span>Massages</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
