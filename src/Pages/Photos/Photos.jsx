import { useMemo } from "react";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./photos.css";
import drainage from "./drainage.json";
import pilates from "./pilates.json";

const shuffleArray = (array) => {
  const out = [...array];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
};

const VIDEOS = [
  {
    title: "Drainage Renata França",
    subtitle: "Femme enceinte",
    src: "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/remodelage/remodelage-renata.MP4",
  },
  {
    title: "Pilates",
    subtitle: "Suspension & sol",
    src: "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/pilates/pilates.mp4",
  },
  {
    title: "Yoga",
    subtitle: "Vinyasa flow",
    src: "https://github.com/flaviamonteiroinstitut/flaviamonteiro/raw/main/src/assets/img/yoga/yoga.mp4",
  },
];

const Photos = () => {
  const drainageList = useMemo(() => shuffleArray(drainage.photos), []);
  const pilatesList = useMemo(() => shuffleArray(pilates.photos), []);

  const renderCarousel = (list, keyPrefix) => (
    <Carousel
      autoPlay
      interval={3000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      useKeyboardArrows
      swipeable
      dynamicHeight
    >
      {list.map((photoPath, i) => (
        <div key={`${keyPrefix}-${i}`}>
          <img src={photoPath} alt={`${keyPrefix} ${i + 1}`} />
        </div>
      ))}
    </Carousel>
  );

  return (
    <div className="page galerie">
      <section className="galerie__hero container">
        <span className="eyebrow">Galerie</span>
        <h1 className="galerie__title">
          Photos &amp; <em>vidéos</em>.
        </h1>
        <p className="galerie__lead">
          Quelques instantanés des cours, des séances de drainage et des
          résultats avant/après.
        </p>
      </section>

      <section className="galerie__dual container">
        <div className="galerie__dual-item">
          <h2 className="galerie__dual-title">Drainage &amp; Remodelage</h2>
          <div className="galerie__carousel">
            {renderCarousel(drainageList, "drainage")}
          </div>
        </div>
        <div className="galerie__dual-item">
          <h2 className="galerie__dual-title">Coaching Pilates &amp; Yoga</h2>
          <div className="galerie__carousel">
            {renderCarousel(pilatesList, "pilates")}
          </div>
        </div>
      </section>

      <section className="galerie__videos">
        <div className="container">
          <span className="eyebrow">Vidéos</span>
          <h2 className="section-title galerie__videos-title">
            En <em>mouvement</em>.
          </h2>

          <div className="galerie__videos-grid">
            {VIDEOS.map((v) => (
              <article key={v.title} className="galerie__video-card">
                <div className="galerie__video-player">
                  <ReactPlayer
                    src={v.src}
                    controls
                    width="100%"
                    height="100%"
                  />
                </div>
                <h3>
                  {v.title}
                  <span>{v.subtitle}</span>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Photos;
