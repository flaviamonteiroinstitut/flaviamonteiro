import "./home.css";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Update the URL without triggering a page reload
    window.history.pushState({}, "", "/home");

    // Cleanup function
    return () => {
      // Reset the URL when the component unmounts
      window.history.pushState({}, "", "/");
    };
  }, []);

  return (
    <div className="home-background">
      <div className="home-overlay">
        <a
          href="https://www.planity.com/flavia-monteiro-institut-de-massage-75017-paris"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="home-button">RESERVER</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
