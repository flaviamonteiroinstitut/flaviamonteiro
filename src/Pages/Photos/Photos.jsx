//Import packages
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import Pages
import Diaporama from "../../Components/Diaporama/Diaporama";

import "./photos.css";

const Photos = () => {
  return (
    <div className="photos-container">
      <div>
        <Diaporama />
      </div>
    </div>
  );
};

export default Photos;
