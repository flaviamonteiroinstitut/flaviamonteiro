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
      title: "Drainage Lympathique",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/drainage/avantapres7-Grande.jpeg",
      text: "Service 1 description goes here.",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/remodelage/remodelage-renata.MP4",
      price: "50 €",
    },
    {
      title: "Remodelage",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/remodelage/IMG_3602%20-%20Grande.jpeg",
      text: "Service 1 description goes here.",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/remodelage/remodelage-renata.MP4",
      price: "50 €",
    },
    {
      title: "Pilates",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/pilates/pilates3.jpeg",
      text: "Service 1 description goes here.",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/pilates/pilates.mp4",
      price: "50 €",
    },
    {
      title: "Yoga",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/yoga/yoga1.jpeg",
      text: "Service 1 description goes here.",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/yoga/yoga.mp4",
      price: "50 €",
    },
    {
      title: "Yoga",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/yoga/yoga1.jpeg",
      text: "Service 1 description goes here.",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/yoga/yoga.mp4",
      price: "50 €",
    },
    {
      title: "Yoga",
      photo:
        "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/yoga/yoga1.jpeg",
      text: "Service 1 description goes here.",
      video:
        "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/yoga/yoga.mp4",
      price: "50 €",
    },
    // Add more service objects here
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
      {services.map((service, index) => (
        <div
          key={index}
          className="prestations-service-item"
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
    </div>
  );
};

export default Prestations;
