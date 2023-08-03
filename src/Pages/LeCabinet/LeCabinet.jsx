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
        <video
          className="lecabinet-video"
          src={video}
          type="video/mp4"
          autoPlay
          controls={true}
          loop
          muted
        />
        <div className="lecabinet-text">
          <img className="lecabinet-photo" src={cabinet} alt="cabinet" />
        </div>
      </div>
    </div>
  );
};

export default LeCabinet;
