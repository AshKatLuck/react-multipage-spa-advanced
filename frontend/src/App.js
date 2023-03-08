import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EventsDetailsPage, {
  loader as EventsDetailsLoader,
  action as DeleteEventAction,
} from "./pages/EventDetailsPage";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage, { action as NewEventAction } from "./pages/NewEventPage";
import RootLayout from "./root";
import EventsRootLayout from "./EventsRoot";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/events",
        element: <EventsRootLayout />,
        children: [
          {
            path: "/events",
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-details",
            loader: EventsDetailsLoader,
            children: [
              {
                index: true,
                element: <EventsDetailsPage />,
                action: DeleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
              },
            ],
          },
          {
            path: "/events/new",
            element: <NewEventPage />,
            action: NewEventAction,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
