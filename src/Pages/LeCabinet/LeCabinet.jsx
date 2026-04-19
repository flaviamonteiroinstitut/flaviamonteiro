import ReactPlayer from "react-player";
import "./lecabinet.css";

const PHOTOS = [
  "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/cabinet/cabinet4new.jpg",
  "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/cabinet/cabinet3new.jpg",
  "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/cabinet/cabinet2new.jpg",
  "https://raw.githubusercontent.com/flaviamonteiroinstitut/flaviamonteiro/main/src/assets/img/cabinet/cabinet1new.jpg",
];

const LeCabinet = () => {
  return (
    <div className="page cabinet">
      <section className="cabinet__hero container">
        <span className="eyebrow">Cabinet</span>
        <h1 className="cabinet__title">
          Paris <em>Monceau</em>
        </h1>
        <p className="cabinet__address">
          <a
            href="https://maps.app.goo.gl/zG7tKkjWNvg8mWBN7"
            target="_blank"
            rel="noopener noreferrer"
          >
            12 Rue de Phalsbourg · 75017 Paris
          </a>
        </p>

        <div className="cabinet__cta">
          <a
            href="https://www.planity.com/flavia-monteiro-institut-de-massage-75017-paris"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Réserver
          </a>
          <a
            href="https://maps.app.goo.gl/zG7tKkjWNvg8mWBN7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Itinéraire
          </a>
        </div>
      </section>

      <section className="cabinet__gallery container">
        <div className="cabinet__grid">
          {PHOTOS.map((src, i) => (
            <figure key={i} className={`cabinet__tile cabinet__tile--${i}`}>
              <img src={src} alt={`Cabinet Monceau ${i + 1}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="cabinet__video">
        <div className="container">
          <span className="eyebrow">Visite</span>
          <h2 className="section-title cabinet__video-title">
            Bienvenue dans <em>l'institut</em>.
          </h2>
          <div className="cabinet__player">
            <ReactPlayer
              src="https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/cabinet-video.mp4"
              controls
              width="100%"
              height="100%"
              style={{ borderRadius: "var(--radius-lg)", overflow: "hidden" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeCabinet;
