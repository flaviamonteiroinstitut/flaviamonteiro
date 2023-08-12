// Import packages
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./photos.css";
import drainage from "./drainage.json";
import pilates from "./pilates.json";

const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Photos = () => {
  const shuffledDrainageList = shuffleArray(drainage.photos);
  const shuffledPilatesList = shuffleArray(pilates.photos);

  return (
    <div className="photos-container">
      <div className="photos-title">
        <h2>Galerie de photos</h2>
      </div>
      <div className="photos-carousels">
        <div>
          <h3>
            REMODELAGE DU CORPS <br /> DRAINAGE LYMPATHIQUE
          </h3>
          <Carousel
            className="photos-carousel-options"
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showThumbs={false}
            thumbWidth={70}
            swipeable={true}
            showStatus={false}
            showIndicators={false}
            useKeyboardArrows={true}
            dynamicHeight={true}
          >
            {shuffledDrainageList.map((photoPath, index) => (
              <div key={index}>
                <img src={photoPath} alt={`Photo ${index}`} />
              </div>
            ))}
          </Carousel>
        </div>
        <div>
          <h3>
            COACHING <br /> PILATES - YOGA
          </h3>
          <Carousel
            className="photos-carousel-options"
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showThumbs={false}
            thumbWidth={70}
            swipeable={true}
            showStatus={false}
            showIndicators={false}
            useKeyboardArrows={true}
            dynamicHeight={true}
          >
            {shuffledPilatesList.map((photoPath, index) => (
              <div key={index}>
                <img src={photoPath} alt={`Photo ${index}`} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Photos;
