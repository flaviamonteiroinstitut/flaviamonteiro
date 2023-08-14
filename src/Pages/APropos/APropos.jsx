// Import components
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./apropos.css";

// Modal component
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="apropos-modal-container">
      <div className="apropos-modal-content">
        <h2>Flavia Monteiro</h2>
        <p>
          Formée dans les écoles les plus renommées de Paris et du Brésil sur
          des techniques classiques mais aussi des plus récentes tel que le Neo
          Pilates. Elle a développé à son tour une méthode personnelle appelée
          Suspension Pilates. Toujours à la recherche d’une autre voie, d’une
          nouvelle manière d’aborder les choses, elle se perfectionne au
          professorat de Yoga Vinyasa à Paris et de Jivamukti à New York City en
          2019. Dernièrement, elle s’est tournée vers des soins complémentaires
          à ses cours en suivant des formations de massages et de drainage au
          Brésil selon la célèbre méthode Renata França. Le drainage lymphatique
          se distingue par des résultats impressionnants et immédiats. Cette
          technique réduit les œdèmes, active la circulation sanguine, développe
          un réseau complexe de vaisseaux où circulent les fluides corporelles
          combattant la cellulite. Résultats : un corps moins gonflé, un
          métabolisme accéléré et une sensation de bien être. La méthode Renata
          França est très efficace pour soulager et limiter les symptômes du
          lipoedème, qui se caractérise par l'accumulation de tissu adipeux
          (graisses) sous-cutané. En effet, même si c'est avant tout un désordre
          des tissus adipeux, le lymphoedème est une conséquence secondaire du
          lipoedème. Les témoignages sont unanimes quant à l'efficacité de cette
          méthode. Une autre technique de la méthode Renata França est le
          remodelage du corps, dont la principale caractéristique est
          l'application de mouvements vigoureux et fermes sur tout le corps.
          Conçu pour modeler les adipocytes, c'est à dire déplacer la graisse
          vers d’autres endroits et par conséquent donner plus de contour au
          corps. Après avoir travaillé au sein de clubs prestigieux de Paris
          comme le groupe Ken Club et L'Usine, elle rejoint l’équipe des coachs
          du Paris Basket pour donner des cours de yoga et de Pilates aux
          joueurs professionnels du club. L'adaptation des cours pour les pros
          est toujours un challenge.
        </p>
        <button className="apropos-modal-button" onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  );
};

const APropos = () => {
  // State to handle the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="apropos-container">
      <div className="apropos-title">
        <h3>
          Coach sportive spécialisée en Pilates et Yoga <br /> depuis plus de 9
          ans
        </h3>
      </div>
      <div className="apropos-content">
        <div className="apropos-carousel">
          <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showThumbs={false}
            swipeable={true}
            showStatus={false}
          >
            <div>
              <img
                src="https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/phofil/photo3.jpg"
                alt="Photo 3"
              />
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/phofil/photo4.jpg"
                alt="Photo 4"
              />
            </div>
          </Carousel>
        </div>
        <div className="apropos-text">
          <p>
            ▪️Diplômes de professeur de sport et coach depuis 2014.
            <br />
            ▪️Formée et diplômée professeur de Pilates dans les écoles les plus
            renommées de Paris et du Brésil. Pilates classique et Néo Pilates.
            <br />
            ▪️Professeur diplômée de Yoga Vinyasa et formée au Jivamukti à New
            York City en 2019. <br />
            ▪️Formée et diplômée (São Paulo Brésil) au massage de drainage et
            remodelage Méthode Renata França.
            <br />
            ▪️Coach de Yoga et Pilates des joueurs Paris Basket.
          </p>
          {/* PLUS button */}
          <p className="apropos-button" onClick={toggleModal}>
            PLUS
          </p>
          {/* Modal */}
          <Modal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
      </div>
      <div className="apropos-carousel1">
        <Carousel
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showThumbs={false}
          swipeable={true}
          showStatus={false}
          dynamicHeight={true}
        >
          <div>
            <img
              src="https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/phofil/photo1.jpg"
              alt="Photo 1"
            />
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/phofil/photo6.jpg"
              alt="Photo 6"
            />
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/phofil/photo2.jpg"
              alt="Photo 2"
            />
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/phofil/photo7.jpg"
              alt="Photo 7"
            />
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/phofil/photo5.jpg"
              alt="Photo 5"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default APropos;
