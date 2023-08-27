// Import packages
import React from "react";
import ReactPlayer from "react-player";
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
      <h2 className="photos-video-area">Galerie de Videos</h2>
      <ul className="photos-videos">
        <li>
          <h3>
            Drainage lymphatique pour femme enceinte
            <br /> Méthode Renata França
          </h3>

          <ReactPlayer
            url="https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/remodelage/remodelage-renata.MP4"
            controls={true}
            width="400px"
            height="auto"
            style={{
              borderRadius: "7px",
              borderBottomLeftRadius: "17px",
              borderBottomRightRadius: "17px",
              border: "1px solid white",
              margin: "0",
              overflow: "hidden",
            }} // Add this line
            showStatus={false}
            showThumbs={false}
          />
        </li>
        <li>
          <h3>
            Pilates <br />
            <br />
          </h3>

          <ReactPlayer
            url="https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/pilates/pilates.mp4"
            controls={true}
            width="400px"
            height="auto"
            style={{
              borderRadius: "7px",
              borderBottomLeftRadius: "17px",
              borderBottomRightRadius: "17px",
              border: "1px solid white",
              margin: "0",
              overflow: "hidden",
            }} // Add this line
            showStatus={false}
            showThumbs={false}
          />
        </li>
        <li>
          <h3>
            Yoga <br />
          </h3>

          <ReactPlayer
            url="https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/yoga/yoga.mp4"
            controls={true}
            width="400px"
            height="auto"
            style={{
              borderRadius: "7px",
              borderBottomLeftRadius: "17px",
              borderBottomRightRadius: "17px",
              border: "1px solid white",
              // margin: "0 auto",
              overflow: "hidden",
            }} // Add this line
            showStatus={false}
            showThumbs={false}
          />
        </li>
      </ul>
    </div>
  );
};

export default Photos;
