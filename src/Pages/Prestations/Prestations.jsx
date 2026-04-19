import { useEffect, useState } from "react";
import "./prestations.css";

const SERVICES = [
  {
    title: "Coaching privé",
    photo:
      "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/coachingprive.jpg",
    text: "Pilates, yoga ou renforcement musculaire — séance individuelle adaptée à votre niveau et vos objectifs.",
    price: "80 €",
    duration: "1 h",
    tag: "Coaching",
  },
  {
    title: "Coaching 2 personnes",
    photo:
      "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/coachinggroupe.jpg",
    text: "Pilates, yoga ou renforcement musculaire en duo — la complicité d'une séance partagée.",
    price: "90 €",
    duration: "1 h",
    tag: "Coaching",
  },
  {
    title: "Drainage lymphatique ou remodelage",
    photo:
      "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/drainage/avantapres2-Grande.jpeg",
    text: "Réduit les œdèmes, active la circulation, combat la cellulite. Le remodelage déplace la graisse pour redessiner les contours du corps.",
    price: "120 €",
    duration: "50 min",
    tag: "Soin signature",
  },
  {
    title: "Massage Drainage Plus",
    photo:
      "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/drainage/avantapres6-Grande.jpeg",
    text: "Ma méthode personnelle, plus complète qu'un drainage classique : travail sur les tissus adipeux et le dégonflement du corps.",
    price: "120 €",
    duration: "1 h",
    tag: "Signature",
  },
  {
    title: "Massage thérapeutique relaxant",
    photo:
      "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/refs/heads/main/src/assets/img/massage/massagerelaxante.jpg",
    text: "Une parenthèse profonde de relâchement et de détente musculaire.",
    price: "120 €",
    duration: "1 h",
    tag: "Massage",
  },
  {
    title: "Drainage / remodelage à domicile",
    photo:
      "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/drainage/avantapres4-Grande.jpeg",
    text: "Le confort de l'institut, chez vous — prestation à domicile dans Paris.",
    price: "150 €",
    duration: "1 h",
    tag: "Home Care",
  },
  {
    title: "Drain Face",
    photo:
      "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/drainage/avantapres4-Grande.jpeg",
    text: "Massage et drainage lymphatique du visage. Détend les traits et apaise la peau.",
    price: "70 €",
    duration: "30 min",
    tag: "Visage",
  },
  {
    title: "Drainage lymphatique + EMSZERO",
    photo:
      "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/ems/emszero.jpg",
    text: "L'association du drainage manuel et de la sculpture corporelle EMSZERO pour un effet renforcé.",
    price: "180 €",
    duration: "1 h 30",
    tag: "Combo",
  },
  {
    title: "EMSZERO",
    photo:
      "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/ems/emszero.jpg",
    text: "L'appareil de sculpture corporelle qui tonifie et redessine en seulement 30 min.",
    price: "80 €",
    duration: "30 min",
    tag: "Technologie",
  },
];

const FORFAITS = [
  {
    title: "Coaching + Massage",
    text: "Pilates, yoga ou renforcement musculaire suivi d'un massage.",
    price: "190 €",
    duration: "2 h",
  },
  {
    title: "4 sessions de massage RF",
    text: "Méthode Renata França — 4 séances pour des résultats visibles.",
    price: "440 €",
    duration: "50 min / séance",
  },
  {
    title: "8 sessions de massage RF",
    text: "Méthode Renata França — protocole intensif sur 8 séances.",
    price: "840 €",
    duration: "50 min / séance",
  },
  {
    title: "10 sessions de massage RF",
    text: "Méthode Renata França — l'engagement long pour une vraie transformation.",
    price: "1 000 €",
    duration: "50 min / séance",
  },
  {
    title: "Forfait femme enceinte",
    text: "Protocole adapté à chaque trimestre, en douceur.",
    price: "Sur devis",
    duration: "—",
  },
  {
    title: "Forfait post-opératoire",
    text: "Drainages post-opératoires recommandés (liposuccion, abdominoplastie, implants…). 2 séances/semaine, minimum 5 semaines.",
    price: "Sur devis",
    duration: "1 h / séance",
  },
  {
    title: "4 séances EMSZERO",
    text: "Sculpture corporelle, protocole de 4 séances.",
    price: "280 €",
    duration: "30 min / séance",
  },
];

const ServiceModal = ({ service, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="prestation-modal-overlay" onClick={onClose}>
      <div className="prestation-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="prestation-modal__close"
          onClick={onClose}
          aria-label="Fermer"
        >
          ×
        </button>
        <div className="prestation-modal__media">
          <img src={service.photo} alt={service.title} />
        </div>
        <div className="prestation-modal__body">
          <span className="prestation-modal__tag">{service.tag}</span>
          <h2>{service.title}</h2>
          <p>{service.text}</p>
          <div className="prestation-modal__meta">
            <div>
              <span>Prix</span>
              <strong>{service.price}</strong>
            </div>
            <div>
              <span>Durée</span>
              <strong>{service.duration}</strong>
            </div>
          </div>
          <a
            href="https://www.planity.com/flavia-monteiro-institut-de-massage-75017-paris"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Réserver cette prestation
          </a>
        </div>
      </div>
    </div>
  );
};

const Prestations = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="page prestations">
      <section className="prestations__hero container">
        <span className="eyebrow">Prestations</span>
        <h1 className="prestations__hero-title">
          Coaching, soins &amp; <em>signature</em>.
        </h1>
        <p className="prestations__hero-lead">
          Une carte pensée pour s'adapter à vous — du cours individuel aux
          protocoles complets de drainage et remodelage.
        </p>
      </section>

      <section className="prestations__list container">
        <div className="prestations__grid">
          {SERVICES.map((service) => (
            <button
              key={service.title}
              className="prestation-card"
              onClick={() => setSelected(service)}
            >
              <div className="prestation-card__media">
                <img src={service.photo} alt={service.title} loading="lazy" />
                <span className="prestation-card__tag">{service.tag}</span>
              </div>
              <div className="prestation-card__body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="prestation-card__footer">
                  <span className="prestation-card__price">
                    {service.price}
                  </span>
                  <span className="prestation-card__duration">
                    {service.duration}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="prestations__forfaits">
        <div className="container">
          <span className="eyebrow">Forfaits</span>
          <h2 className="section-title prestations__forfaits-title">
            Programmes &amp; <em>cures</em>.
          </h2>
          <p className="section-lead prestations__forfaits-lead">
            Pour s'engager dans un travail de fond, j'ai construit des
            programmes complets.
          </p>

          <div className="forfait-grid">
            {FORFAITS.map((f) => (
              <article key={f.title} className="forfait-card">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <div className="forfait-card__meta">
                  <span>{f.price}</span>
                  <span>·</span>
                  <span>{f.duration}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <ServiceModal service={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default Prestations;
