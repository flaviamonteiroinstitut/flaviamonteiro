//Import packages
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./photos.css";
import drainage from "./drainage.json";
import remodelage from "./remodelage.json";
import pilates from "./pilates.json";
import yoga from "./yoga.json";

const Photos = () => {
  const drainageList = drainage.photos.map((photoPath, index) => (
    <div key={index}>
      <img src={photoPath} alt={`Photo ${index}`} />
    </div>
  ));
  const remodelageList = remodelage.photos.map((photoPath, index) => (
    <div key={index}>
      <img src={photoPath} alt={`Photo ${index}`} />
    </div>
  ));
  const pilatesList = pilates.photos.map((photoPath, index) => (
    <div key={index}>
      <img src={photoPath} alt={`Photo ${index}`} />
    </div>
  ));
  const yogaList = yoga.photos.map((photoPath, index) => (
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
          <h3>REMODELAGE</h3>
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
          <h3>DRAINAGE LYMPHATIQUE</h3>
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
            {remodelageList}
          </Carousel>
        </div>
        <div>
          <h3>PILATES</h3>
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
        <div>
          <h3>YOGA</h3>
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
            {yogaList}
          </Carousel>
        </div>
        <div>
          <h3>MASSAGE RELAXANTE</h3>
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
            {yogaList}
          </Carousel>
        </div>
        <div>
          <h3>TITRE A METTRE</h3>
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
