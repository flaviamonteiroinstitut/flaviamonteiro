import ReactPlayer from "react-player";
import "./lecabinet1.css";

const LeCabinet1 = () => {
  return (
    <div className="lecabinet-container">
      <div className="lecabinet-title">
        <h2>Cabinet Paris Douai</h2>
        <a href="https://maps.app.goo.gl/qv8px8pFNHRPRz6Z8" target="_blank">
          <h3>
            5 Rue de Douai <br />
            75009 Paris
          </h3>
          <br />
        </a>
      </div>
      <div className="lecabinet-content">
        <div className="image-container">
          <img
            className="lecabinet-photo"
            src="https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/refs/heads/main/src/assets/img/cabinet1/1.jpg"
            alt="cabinet"
          />
          <img
            className="lecabinet-photo"
            src="https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/refs/heads/main/src/assets/img/cabinet1/2.jpg"
            alt="cabinet"
          />
        </div>
        <div className="image-container">
          <img
            className="lecabinet-photo"
            src="https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/refs/heads/main/src/assets/img/cabinet1/3.jpg"
            alt="cabinet"
          />
          <img
            className="lecabinet-photo"
            src="https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/refs/heads/main/src/assets/img/cabinet1/4.jpg"
            alt="cabinet"
          />
        </div>
        {/* <div className="lecabinet-video">
          <ReactPlayer
            url="https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/cabinet-video.mp4"
            controls={true}
            width="100%"
            height="100%"
            showStatus={false}
            showThumbs={false}
          />
        </div> */}
      </div>
    </div>
  );
};

export default LeCabinet1;
