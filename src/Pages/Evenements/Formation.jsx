import React from "react";
import "./formation.css";

const Formation = () => {
  return (
    <div className="formation-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&bgcolor=%23ffffff&showPrint=0&showTabs=0&showTz=0&showCalendars=0&mode=WEEK&src=ZmVsaXBlZmFybmV0dGlAZ21haWwuY29t&color=%23E67C73"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Formation;
