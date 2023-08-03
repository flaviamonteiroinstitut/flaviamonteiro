//Import packages
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./photos.css";

const Photos = () => {
  return (
    <div className="photos-container">
      <div>
        <div>
          {/* <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showThumbs={false}
            swipeable={true}
            showStatus={false}
          >
            <div>
              <img src={photo3} />
            </div>
            <div>
              <img src={photo4} />
            </div>
          </Carousel> */}
        </div>
      </div>
    </div>
  );
};

export default Photos;
