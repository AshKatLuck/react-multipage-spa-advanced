import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  // if (data.isError) {
  //   return <p>{data.errorMessage}</p>;
  // }
  const events = data.events;
  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events1");
  if (!response.ok) {
    // return { isError: true, errorMessage: "Could not fetch the data!" };
    // console.log("eventspgae");
    throw new Response(
      JSON.stringify({ message: "Could not fetch the events" }),
      { status: 500 }
    );
  } else {
    return response;
  }
}
