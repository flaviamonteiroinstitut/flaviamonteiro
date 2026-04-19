import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./apropos.css";

const PORTRAIT_IMAGES = [
  "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/phofil/photo3.jpg",
  "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/phofil/photo4.jpg",
];

const GALLERY_IMAGES = [
  "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/phofil/photo1.jpg",
  "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/phofil/photo6.jpg",
  "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/phofil/photo2.jpg",
  "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/phofil/photo7.jpg",
  "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/phofil/photo5.jpg",
];

const HIGHLIGHTS = [
  "Diplômes de professeur de sport et coach depuis 2014.",
  "Formée et diplômée professeur de Pilates dans les écoles les plus renommées de Paris et du Brésil (Pilates classique et Néo Pilates).",
  "Professeur diplômée de Yoga Vinyasa et formée au Jivamukti à New York City en 2019.",
  "Diplômée (São Paulo, Brésil) en massage de drainage et remodelage Méthode Renata França.",
  "Après 4 ans de pratique de la méthode Renata França, j'ai mis au point ma propre méthode — agissant sur les tissus adipeux et les zones de gonflements.",
  "Coach de Yoga et Pilates des joueurs Paris Basket.",
];

const BioModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="bio-modal-overlay" onClick={onClose}>
      <div className="bio-modal" onClick={(e) => e.stopPropagation()}>
        <button className="bio-modal__close" onClick={onClose} aria-label="Fermer">
          ×
        </button>
        <h2>
          Flavia <em>Monteiro</em>
        </h2>
        <p>
          Formée dans les écoles les plus renommées de Paris et du Brésil sur
          des techniques classiques et récentes — tel le Neo Pilates —, elle a
          développé à son tour une méthode personnelle appelée{" "}
          <strong>Suspension Pilates</strong>.
        </p>
        <p>
          Toujours à la recherche d'une autre voie, elle se perfectionne au
          professorat de Yoga Vinyasa à Paris et de Jivamukti à New York City en
          2019. Elle s'est ensuite tournée vers des soins complémentaires avec
          des formations de massages et de drainage au Brésil, selon la célèbre
          méthode Renata França.
        </p>
        <p>
          Le drainage lymphatique se distingue par des résultats impressionnants
          et immédiats : il réduit les œdèmes, active la circulation sanguine et
          combat la cellulite. Résultats : un corps moins gonflé, un métabolisme
          accéléré et une vraie sensation de bien-être.
        </p>
        <p>
          La méthode Renata França est également très efficace pour soulager les
          symptômes du lipoedème. Une autre de ses techniques, le remodelage du
          corps, applique des mouvements vigoureux et fermes pour modeler les
          adipocytes et donner davantage de contour au corps.
        </p>
        <p>
          Après avoir travaillé au sein de clubs prestigieux de Paris comme le
          groupe Ken Club et L'Usine, Flavia rejoint l'équipe des coachs du
          Paris Basket pour donner des cours de yoga et de Pilates aux joueurs
          professionnels. L'adaptation des cours pour les pros reste toujours un
          challenge stimulant.
        </p>
      </div>
    </div>
  );
};

const APropos = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="page apropos">
      <section className="apropos__hero container">
        <span className="eyebrow">À propos</span>
        <h1 className="apropos__hero-title">
          Coach sportive spécialisée en <em>Pilates</em> &amp; <em>Yoga</em>{" "}
          depuis plus de 15 ans.
        </h1>
      </section>

      <section className="apropos__intro container">
        <div className="apropos__intro-media">
          <Carousel
            autoPlay
            interval={4000}
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            swipeable
            showArrows={false}
          >
            {PORTRAIT_IMAGES.map((src, i) => (
              <div key={i} className="apropos__carousel-slide">
                <img src={src} alt={`Flavia portrait ${i + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="apropos__intro-text">
          <h2 className="apropos__intro-title">Mon parcours</h2>
          <ul className="apropos__highlights">
            {HIGHLIGHTS.map((h, i) => (
              <li key={i}>
                <span className="apropos__bullet" aria-hidden>•</span>
                {h}
              </li>
            ))}
          </ul>
          <button
            className="btn btn-outline apropos__more"
            onClick={() => setModalOpen(true)}
          >
            Lire ma biographie complète
          </button>
        </div>
      </section>

      <section className="apropos__gallery">
        <div className="container">
          <span className="eyebrow">Studio</span>
          <h2 className="section-title apropos__gallery-title">
            Instantanés de <em>pratique</em>.
          </h2>
          <div className="apropos__gallery-mosaic">
            {GALLERY_IMAGES.map((src, i) => (
              <div key={i} className="apropos__gallery-item">
                <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <BioModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default APropos;
