//Import packages
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./photos.css";
import drainage from "./drainage.json";
import pilates from "./pilates.json";

const Photos = () => {
  const drainageList = drainage.photos.map((photoPath, index) => (
    <div key={index}>
      <img src={photoPath} alt={`Photo ${index}`} />
    </div>
  ));
  const pilatesList = pilates.photos.map((photoPath, index) => (
    <div key={index}>
      <img src={photoPath} alt={`Photo ${index}`} />
    </div>
  ));

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
            {drainageList}
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
            {pilatesList}
          </Carousel>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Photos;
