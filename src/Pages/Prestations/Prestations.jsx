import React, { useState } from "react";
import "./prestations.css";

const ServiceModal = ({ service, onClose }) => {
  return (
    <div className="prestations-modal-overlay">
      <div className="prestations-modal">
        <h2>{service.title}</h2>
        <p>{service.text}</p>
        <img src={service.photo} alt="" />
        <p>Prix : {service.price}</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

const Prestations = () => {
  const [expanded, setExpanded] = useState(false);
  const services = [
    {
      title: "Coaching privé",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/coachingprive.jpg",
      text: "Pilates, yoga ou renforcement musculaire - 80 € - 1 h",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/remodelage/remodelage-renata.MP4",
      price: "80 € - 1 h",
    },
    {
      title: "Coaching 2 personnes",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/coachinggroupe.jpg",
      text: "Pilates, yoga ou renforcement musculaire - 90 € - 1 h",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/yoga/yoga.mp4",
      price: "90 € - 1 h",
    },
    {
      title: "Drainage lympathique ou remodelage du corps",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/drainage/avantapres2-Grande.jpeg",
      text: "Drainage lymphatique: Réduit les cedèmes, active la circulation sanguine, développe un réseau complexe de vaisseaux où circulent les fluides corporelles, combattant la cellulite. Remodelage du corps: Conçu pour modeler les adipocytes, c'est-à-dire déplacer la graisse aux bons endroits, par conséquent, donner plus de contour au corps. 120 € - 50 min",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/remodelage/remodelage-renata.MP4",
      price: "120 € - 50 min",
    },
    {
      title: "Massage Drainage Plus",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/drainage/avantapres6-Grande.jpeg",
      text: "Après avoir suivi plusieurs formations et appris diverses techniques, j'ai développé le Drainege Plus, c'est un peu plus qu'un drainage classique, travaillant également les tissus adipeux et le dégonflement du corps. 120 € - 1 h",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/remodelage/remodelage-renata.MP4",
      price: "120 € - 1 h",
    },
    {
      title: "Massage thérapeutique relaxant",
      photo:
        "https://raw.githubusercontent.co/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/remodelage/IMG_3602%20-%20Grande.jpeg",
      text: "120 € - 1 h",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/yoga/yoga.mp4",
      price: "120 € - 1 h",
    },
    {
      title: "Drainage lymphatique ou remodelage du corps home care ",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/drainage/avantapres4-Grande.jpeg",
      text: "Prestation à domicile - 150 € - 1 h",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/yoga/yoga.mp4",
      price: "150 €",
    },
    {
      title: "Drain Face",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/drainage/avantapres4-Grande.jpeg",
      text: "Massage et drainage lymphatique du visage. Un vrai bonheur pour détendre le visage et apaiser les traits - 70 € - 30 min",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/yoga/yoga.mp4",
      price: "70 €",
    },
    {
      title: "Drainage lymphatique et EMSZERO",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/drainage/avantapres4-Grande.jpeg",
      text: "L'appareil de sculpture...... - 180 € - 1h30 min",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/yoga/yoga.mp4",
      price: "180 €",
    },
    {
      title: "EMSZERO",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/drainage/avantapres4-Grande.jpeg",
      text: "L'appareil de sculpture corporel..... - 80 € - 30 min",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/yoga/yoga.mp4",
      price: "80 €",
    },
  ];
  const forfaits = [
    {
      title: "Coaching + Massage",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/drainage/avantapres7-Grande.jpeg",
      text: "Pilates, yoga ou renforcement musculaire + massage - 190 € - 2 h",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/remodelage/remodelage-renata.MP4",
      price: "190 € - 2 h",
    },
    {
      title: "Forfait 4 sessions de massage RF",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/remodelage/IMG_3602%20-%20Grande.jpeg",
      text: "Méthode Renata França - 440 € - 50 min",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/remodelage/remodelage-renata.MP4",
      price: "440 € - 50 min",
    },
    {
      title: "Forfait 8 sessions de massage RF",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/remodelage/IMG_3602%20-%20Grande.jpeg",
      text: "Méthode Renata França - 840 € - 50 min",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/remodelage/remodelage-renata.MP4",
      price: "840 € - 50 min",
    },
    {
      title: "Forfait 10 sessions de massage RF",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/remodelage/IMG_3602%20-%20Grande.jpeg",
      text: "Méthode Renata França - 1000 € - 50 min",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/remodelage/remodelage-renata.MP4",
      price: "1000 € - 50 min",
    },
    {
      title: "Forfait femme enceinte",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/remodelage/IMG_3602%20-%20Grande.jpeg",
      text: "Sur devis",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/remodelage/remodelage-renata.MP4",
      price: "Sur devis - 50 min",
    },
    {
      title: "Forfait post-operatoire",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/remodelage/IMG_3602%20-%20Grande.jpeg",
      text: "Les drainages port-opératoire sont fortement conseillées, 7 à 10 jours après l'opération et d'activer l'élimination de l'oedème. Il est préconisée de faire deux séances de drainage par semaine, pendant une durée minimale de 5 semaines. Liposuccion, abdominoplastie, implants, entre autres. Sur devis - 1 h",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/remodelage/remodelage-renata.MP4",
      price: "Sur devis - 1 h",
    },
    {
      title: "Forfait 4 séances EMSZERO",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/remodelage/IMG_3602%20-%20Grande.jpeg",
      text: "280 € - 30 min",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/remodelage/remodelage-renata.MP4",
      price: "280 € - 30 min",
    },
  ];

  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="prestations-container">
      <h2 className="prestations-title">Prestations</h2>
      <h5 className="prestations-title1">
        cliquer/toucher pour plus d'informations
      </h5>
      {services.map((service, index) => (
        <div
          key={index}
          className={`prestations-service-item${
            index === services.length - 1 ? " prestations-last-item" : ""
          }`}
          onClick={() => openModal(service)}
        >
          <div className="prestations-service-info">
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
          <img src={service.photo} alt={service.title} />
        </div>
      ))}
      {selectedService && (
        <ServiceModal service={selectedService} onClose={closeModal} />
      )}
      <h2 className="prestations-title3">Forfaits</h2>

      {forfaits.map((forfait, index) => (
        <div key={index} className="prestations-service-item1">
          <div className="prestations-service-info1">
            <h3>{forfait.title}</h3>
            <p>{forfait.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Prestations;
