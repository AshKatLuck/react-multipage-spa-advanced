import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EventsDetailsPage from "./pages/EventDetailsPage";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage from "./pages/NewEventPage";
import RootLayout from "./root";
import EventsRootLayout from "./EventsRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
          { path: "/events/:eventId", element: <EventsDetailsPage /> },
          { path: "/events/new", element: <NewEventPage /> },
          { path: "/events/:eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
