import React from "react";
import "./formation.css";

const Formation = () => {
  return (
    <div className="formation-container">
      <h1>Google Calendar</h1>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&bgcolor=%23F6BF26&mode=WEEK&src=ZmVsaXBlZmFybmV0dGlAZ21haWwuY29t&color=%23E67C73"
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      ></iframe>
    </div>
  );
};

export default Formation;
