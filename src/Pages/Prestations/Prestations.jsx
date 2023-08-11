import React, { useState } from "react";
import "./prestations.css";

const ServiceModal = ({ service, onClose }) => {
  return (
    <div className="prestations-modal-overlay">
      <div className="prestations-modal">
        <h2>{service.title}</h2>
        <p>{service.text}</p>
        {<img source src={service.photo} alt="" />}
        <p>Prix : {service.price}</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

const Prestations = () => {
  const services = [
    {
      title: "Coaching privé",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/pilates/pilates3.jpeg",
      text: "Pilates, yoga ou renforcement musculaire - 80 € - 1 h",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/remodelage/remodelage-renata.MP4",
      price: "80 € - 1 h",
    },
    {
      title: "Coaching 2 personnes",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/pilates/pilates1.jpeg",
      text: "Pilates, yoga ou renforcement musculaire - 90 € - 1 h",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/yoga/yoga.mp4",
      price: "90 € - 1 h",
    },
    {
      title: "Drainage lympathique ou remodelage du corps",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/drainage/avantapres7-Grande.jpeg",
      text: "120 € - 50 min",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/remodelage/remodelage-renata.MP4",
      price: "120 € - 50 min",
    },
    {
      title: "Massage thérapeutique relaxant",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/remodelage/IMG_3602%20-%20Grande.jpeg",
      text: "100 € - 50 min",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/yoga/yoga.mp4",
      price: "100 € - 50 min",
    },
    {
      title: "Drainage lymphatique ou remodelage du corps home care ",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/drainage/avantapres4-Grande.jpeg",
      text: "Prestation à domicile - 150 € - 1 h",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/yoga/yoga.mp4",
      price: "50 €",
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
      title: "Forfait 4 sessions des massages",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/remodelage/IMG_3602%20-%20Grande.jpeg",
      text: "Méthode Renata França - 440 € - 50 min",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/remodelage/remodelage-renata.MP4",
      price: "440 € - 50 min",
    },
    {
      title: "Forfait 8 sessions des massages",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/remodelage/IMG_3602%20-%20Grande.jpeg",
      text: "Méthode Renata França - 840 € - 50 min",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/remodelage/remodelage-renata.MP4",
      price: "840 € - 50 min",
    },
    {
      title: "Forfait 10 massages suis RF",
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
      text: "Sur devis - 1 h",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/remodelage/remodelage-renata.MP4",
      price: "Sur devis - 1 h",
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
