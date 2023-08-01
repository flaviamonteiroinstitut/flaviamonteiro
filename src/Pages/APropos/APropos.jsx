import { Carousel } from "react-responsive-carousel";
import "./apropos.css";
import photo1 from "../../assets/img/phofil/photo1.jpg";
import photo2 from "../../assets/img/phofil/photo2.jpg";
import photo3 from "../../assets/img/phofil/photo3.jpg";
import photo4 from "../../assets/img/phofil/photo4.jpg";

const APropos = () => {
  const customArrowStyles = {
    fontSize: "20px",
    color: "white",
  };
  return (
    <div className="apropos-container">
      <div>
        <h1>Flavia Monteiro</h1>
        <h2>
          Coach sportive spécialisée en Pilates et Yoga depuis plus de 9 ans
        </h2>
        <Carousel
          className="apropos-carousel1"
          autoPlay={true}
          interval={4000}
          infiniteLoop={true}
          showThumbs={false}
        >
          <div>
            <img src={photo1} />
          </div>
          <div>
            <img src={photo2} />
          </div>
        </Carousel>
        <Carousel
          className="apropos-carousel1"
          autoPlay={true}
          interval={4000}
          infiniteLoop={true}
          showThumbs={false}
        >
          <div>
            <img src={photo3} />
          </div>
          <div>
            <img src={photo4} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default APropos;
