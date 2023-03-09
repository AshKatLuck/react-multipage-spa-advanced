import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";
import { Suspense } from "react";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
function EventsDetailsPage() {
  const { event, events } = useRouteLoaderData("event-details");
  // console.log(data);
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

async function loadEvent({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId);
  if (!response.ok) {
    return json(
      { message: "Could not fetch event details from db!" },
      { status: 400 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}
async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    return json({ message: "Could not fetch the events" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader({ request, params }) {
  return defer({
    event: await loadEvent({ request, params }),
    events: loadEvents(),
  });
}

export async function action({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });
  if (!response.ok) {
    return json({ message: "Could not delete the event" }, { status: 500 });
  } else {
    return redirect("/events");
  }
}

export default EventsDetailsPage;
