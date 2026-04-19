import "./agenda.css";

const Agenda = () => {
  return (
    <div className="page agenda">
      <section className="agenda__hero container">
        <span className="eyebrow">Cours</span>
        <h1 className="agenda__title">
          Réserver un <em>cours</em>.
        </h1>
        <p className="agenda__lead">
          Sélectionnez une date et un créneau directement dans l'agenda en
          ligne ci-dessous.
        </p>
      </section>

      <section className="agenda__embed container">
        <div className="agenda__frame">
          <iframe
            src="https://flaviamonteiro.setmore.com"
            title="Agenda Flavia Monteiro"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Agenda;
