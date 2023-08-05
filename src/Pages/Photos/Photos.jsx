//Import packages
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./photos.css";
import drainage from "./drainage.json";
import remodelage from "./remodelage.json";
import pilates from "./pilates.json";

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

  return (
    <div className="photos-container">
      <div className="photos-title">
        <h3>Drainage lymphatique et remodelage</h3>
      </div>
      <div className="photos-carousels">
        <div className="photos-drainage">
          <Carousel
            className="remodelage"
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showThumbs={false}
            thumbWidth={70}
            swipeable={true}
            showStatus={false}
            showIndicators={false}
            useKeyboardArrows={true}
          >
            {drainageList}
          </Carousel>
        </div>
        <div className="photos-drainage">
          <Carousel
            className="remodelage"
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
        <div className="photos-drainage">
          <Carousel
            className="remodelage"
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
      <div className="photos-title">
        <h3>Drainage lymphatique et remodelage</h3>
      </div>
      <div className="photos-carousels">
        <div className="photos-drainage">
          <Carousel
            className="remodelage"
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showThumbs={false}
            thumbWidth={70}
            swipeable={true}
            showStatus={false}
            showIndicators={false}
            useKeyboardArrows={true}
          >
            {drainageList}
          </Carousel>
        </div>
        <div className="photos-drainage">
          <Carousel
            className="remodelage"
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showThumbs={false}
            thumbWidth={70}
            swipeable={true}
            showStatus={false}
            showIndicators={false}
            useKeyboardArrows={true}
          >
            {remodelageList}
          </Carousel>
        </div>
        <div className="photos-drainage">
          <Carousel
            className="remodelage"
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showThumbs={false}
            thumbWidth={70}
            swipeable={true}
            showStatus={false}
            showIndicators={false}
            useKeyboardArrows={true}
          >
            {drainageList}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Photos;
