import "./home.css";

const Home = () => {
  return (
    <div className="home-background">
      <div className="home-overlay">
        <a
          href="https://www.planity.com/flavia-monteiro-institut-de-massage-75017-paris"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="home-button">Réserver Monceau</button>
        </a>
        <a
          href="https://www.planity.com/studio-fla-75009-paris"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="home-button second-button">Réserver Pigalle</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
