import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const CalendarApp = () => {
  const [events, setEvents] = useState([]);

  const CLIENT_ID = "475720912712-pv1mg95gif67dc7offrrc9d6q99lin0q.apps.googleusercontent.com";
  const API_KEY = "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";
  const CALENDAR_ID = "your_calendar_id@group.calendar.google.com";

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
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
    <div>
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

export default CalendarApp;
