import { useLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";
function EventsDetailsPage() {
  const data = useLoaderData();
  // console.log(data);
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

export async function loader({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId);
  if (!response.ok) {
    return json(
      { message: "Could not fetch event details from db!" },
      { status: 400 }
    );
  } else {
    console.log(response);
    return response;
  }
}

export default EventsDetailsPage;
