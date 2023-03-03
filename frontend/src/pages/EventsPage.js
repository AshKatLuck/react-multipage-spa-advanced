import { Link } from "react-router-dom";
const DUMMY_EVENTS = [
  { eventID: "e1", title: "Event 1" },
  { eventID: "e2", title: "Event 2" },
  { eventID: "e3", title: "Event 3" },
  { eventID: "e4", title: "Event 4" },
  { eventID: "e5", title: "Event 5" },
  { eventID: "e6", title: "Event 6" },
];

const EventsPage = () => {
  return (
    <>
      <h1>Events Page!</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.eventID}>
            <Link to={`/events/${event.eventID}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
