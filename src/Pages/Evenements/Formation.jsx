import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import "./formation.css"
require('dotenv').config()

const formation = () => {
  const [events, setEvents] = useState([]);
  const CALENDAR_ID = "felipefarnetti@group.calendar.google.com";

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        apiKey: process.env.API_KEY,
        clientId: process.env.CLIENT_ID,
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
        scope: "https://www.googleapis.com/auth/calendar.readonly",
      }).then(() => {
        gapi.client.load("calendar", "v3", () => {
          listUpcomingEvents();
        });
      });
    };

    gapi.load("client:auth2", initClient);
  }, []);

  const listUpcomingEvents = () => {
    gapi.client.calendar.events
      .list({
        calendarId: CALENDAR_ID,
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: "startTime",
      })
      .then((response) => {
        const events = response.result.items;
        setEvents(events);
      });
  };

  return (
    <div classname="formation-container">
      <h1>Upcoming Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.summary} ({new Date(event.start.dateTime).toLocaleString()})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default formation;
