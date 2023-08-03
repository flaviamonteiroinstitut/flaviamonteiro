import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./apropos.css";

import photo1 from "../../assets/img/phofil/photo1.jpg";
import photo2 from "../../assets/img/phofil/photo2.jpg";
import photo3 from "../../assets/img/phofil/photo3.jpg";
import photo4 from "../../assets/img/phofil/photo4.jpg";
import photo5 from "../../assets/img/phofil/photo5.jpg";
import photo6 from "../../assets/img/phofil/photo6.jpg";
import photo7 from "../../assets/img/phofil/photo7.jpg";

const APropos = () => {
  return (
    <div className="apropos-container">
      <div className="apropos-title">
        <h3>
          Coach sportive spécialisée en Pilates et Yoga <br /> depuis plus de 9
          ans
        </h3>
      </div>
      <div className="apropos-content">
        <div className="apropos-carousel">
          <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showThumbs={false}
            swipeable={true}
            showStatus={false}
          >
            <div>
              <img src={photo3} />
            </div>
            <div>
              <img src={photo4} />
            </div>
          </Carousel>
        </div>
        <div className="apropos-text">
          <p>
            Formée dans les écoles les plus renommées de Paris et du Brésil sur
            des techniques classiques mais aussi des plus récentes tel que le
            Neo Pilates. Elle a développé à son tour une méthode personnelle
            appelée Suspension Pilates. Toujours à la recherche d’une autre
            voie, d’une nouvelle manière d’aborder les choses, elle se
            perfectionne au professorat de Yoga Vinyasa à Paris et de Jivamukti
            à New York City en 2019. Dernièrement, elle s’est tournée vers des
            soins complémentaires à ses cours en suivant des formations de
            massages et de drainage au Brésil selon la célèbre méthode Renata
            França.
          </p>
          <br />
          <p>
            Le drainage lymphatique se distingue par des résultats
            impressionnants et immédiats. Cette technique réduit les œdèmes,
            active la circulation sanguine, développe un réseau complexe de
            vaisseaux où circulent les fluides corporelles combattant la
            cellulite. Résultats : un corps moins gonflé, un métabolisme
            accéléré et une sensation de bien être.
          </p>
          <br />
          <p>
            La méthode Renata França est très efficace pour soulager et limiter
            les symptômes du lipoedème, qui se caractérise par l'accumulation de
            tissu adipeux (graisses) sous-cutané. En effet, même si c'est avant
            tout un désordre des tissus adipeux, le lymphoedème est une
            conséquence secondaire du lipoedème. Les témoignages sont unanimes
            quant à l'efficacité de cette méthode.
          </p>
          <br />
          <p>
            Une autre technique de la méthode Renata França est le remodelage du
            corps, dont la principale caractéristique est l'application de
            mouvements vigoureux et fermes sur tout le corps. Conçu pour modeler
            les adipocytes, c'est à dire déplacer la graisse vers d’autres
            endroits et par conséquent donner plus de contour au corps.
          </p>
          <br />
          <p>L'adaptation des cours pour les pro est toujours un challenge.</p>
        </div>
      </div>
      <div className="apropos-carousel1">
        <Carousel
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showThumbs={false}
          swipeable={true}
          showStatus={false}
        >
          <div>
            <img src={photo1} />
          </div>
          <div>
            <img src={photo6} />
          </div>
          <div>
            <img src={photo2} />
          </div>

          <div>
            <img src={photo7} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default APropos;
