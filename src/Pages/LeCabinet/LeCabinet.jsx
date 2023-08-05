//import packages
import ReactPlayer from "react-player";

import "./lecabinet.css";

import cabinet from "../../assets/img/cabinet/cabinet-bon.jpg";
import video from "../../assets/img/cabinet-video.mp4";

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
              url={video}
              controls={true}
              width="100%"
              height="100%"
              showStatus={false}
              showThumbs={false}
            />
          </div>
        </div>
        <img className="lecabinet-photo" src={cabinet} alt="cabinet" />
      </div>
    </div>
  );
};

export default LeCabinet;
