//import packages
import ReactPlayer from "react-player";

import "./lecabinet.css";

<<<<<<< HEAD
import cabinet from "../../assets/img/cabinet/cabinet-bon.jpg";
import video from "../../assets/img/cabinet-video.mp4";

=======
>>>>>>> e423bf8 (all)
const LeCabinet = () => {
  return (
    <div className="lecabinet-container">
      <div className="lecabinet-title">
        <h2>Cabinet Paris Monceau</h2>
        <h3>
          12 Rue de Phalsbourg <br />
          75017 Paris
        </h3>
      </div>
      <div className="lecabinet-content">
        <div>
          <div className="lecabinet-video">
            <ReactPlayer
<<<<<<< HEAD
              url={video}
=======
              url="https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/cabinet-video.mp4"
>>>>>>> e423bf8 (all)
              controls={true}
              width="100%"
              height="100%"
              showStatus={false}
              showThumbs={false}
            />
          </div>
        </div>
<<<<<<< HEAD
        <img className="lecabinet-photo" src={cabinet} alt="cabinet" />
=======
        <img
          className="lecabinet-photo"
          src="https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/cabinet/cabinet-bon.jpg"
          alt="cabinet"
        />
>>>>>>> e423bf8 (all)
      </div>
    </div>
  );
};

export default LeCabinet;
