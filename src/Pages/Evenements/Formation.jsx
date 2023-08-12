import React, { useEffect, useState } from "react";
import axios from "axios";
import "./formation.css";

const Formation = () => {
  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   const apiKey =
  //     "AEjwcsKsil28qmiSknbGKtMRPomo6nSOizICRrsF3ZwiGktqRJCgXgT6wk0yCsl9"; // Replace with your actual API key
  //   const endpoint =
  //     "https://eu-central-1.aws.data.mongodb-api.com/app/data-nthdn/endpoint/data/v1";

  //   axios.get(`${endpoint}/collections/flaviamonteiro/events`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer AEjwcsKsil28qmiSknbGKtMRPomo6nSOizICRrsF3ZwiGktqRJCgXgT6wk0yCsl9`,
  //     },
  //   });
  //   console

  //     .then((response) => {
  //       // Assuming response.data is an object with a "results" array containing event objects
  //       setEvents(response.data.results);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  return (
    <div className="formation-container">
      <h1>A Venir ...</h1>
      <div className="event-list">
        {/* {events.map((event) => (
          <div className="event" key={event._id}>
            <div className="event-title">{event.title}</div>
            <div className="event-description">{event.description}</div>
            <div className="event-location">{event.location}</div>
            <div className="event-location">{event.data}</div>
            <div className="event-price">{event.price}</div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Formation;
