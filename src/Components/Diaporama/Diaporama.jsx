import { Carousel } from "react-responsive-carousel";

const Diaporama = () => {
  const customArrowStyles = {
    // Add your custom styles for the arrows here
    // For example, you can increase the font size and add a larger arrow icon
    fontSize: "30px",
    color: "white",
  };
  return (
    <div>
      <Carousel
        className="photos-carousel"
        autoPlay={true}
        interval={4000}
        infiniteLoop={true}
        stopOnHover={true}
        thumbWidth={160}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={customArrowStyles}
            >
              &#60; {/* Customized arrow icon for previous */}
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={customArrowStyles}
            >
              &#62; {/* Customized arrow icon for next */}
            </button>
          )
        }
      >
        <div>
          <img src="../src/assets/img/Imagem1.jpg" />
          <p className="legend">Sitio Petrovale</p>
        </div>
        <div>
          <img src="../src/assets/img/Imagem2.jpg" />
          <p className="legend">Area superior</p>
        </div>
        <div>
          <img src="../src/assets/img/Imagem3.jpg" />
          <p className="legend">Area superior - quadra</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Diaporama;
