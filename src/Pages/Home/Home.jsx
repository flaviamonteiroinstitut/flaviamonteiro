import { Link } from "react-router-dom";
import "./home.css";

const HIGHLIGHTS = [
  {
    kicker: "Coaching",
    title: "Pilates · Yoga · Renforcement",
    text: "Cours privés ou duo, adaptés à votre corps et vos objectifs.",
    to: "/prestations",
  },
  {
    kicker: "Soins",
    title: "Drainage & Remodelage",
    text: "Méthode Renata França et ma signature Drainage Plus.",
    to: "/prestations",
  },
  {
    kicker: "Cabinet",
    title: "Paris Monceau",
    text: "Un écrin calme au 12 rue de Phalsbourg, 75017 Paris.",
    to: "/monceau",
  },
];

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero__overlay" />
        <div className="hero__content container">
          <div className="hero__cta">
            <a
              href="https://www.planity.com/flavia-monteiro-institut-de-massage-75017-paris"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Réserver
            </a>
            <Link to="/prestations" className="btn btn-ghost">
              Prestations
            </Link>
          </div>
        </div>
      </section>

      <section className="home__highlights section">
        <div className="container">
          <div className="home__intro">
            <span className="eyebrow">L'Institut</span>
            <h2 className="section-title">
              Un lieu pensé pour <em>prendre soin</em>.
            </h2>
            <p className="section-lead">
              Plus de 15 ans d'expérience, des méthodes rigoureuses et un regard
              attentif pour que chaque séance soit unique.
            </p>
          </div>

          <div className="home__grid">
            {HIGHLIGHTS.map((h) => (
              <Link key={h.title} to={h.to} className="home__card">
                <span className="home__card-kicker">{h.kicker}</span>
                <h3 className="home__card-title">{h.title}</h3>
                <p className="home__card-text">{h.text}</p>
                <span className="home__card-arrow" aria-hidden>
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home__quote">
        <div className="container">
          <p>
            “Toujours à la recherche d'une autre voie, d'une nouvelle manière
            d'aborder les choses.”
          </p>
          <span>— Flavia Monteiro</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
