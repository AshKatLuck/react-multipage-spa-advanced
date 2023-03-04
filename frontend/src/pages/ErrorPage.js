import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  let title = "An Error Occured";
  let message = "Something went wrong";
  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }
  if (error.status === 404) {
    title = "Not Found";
    message = "Could not find the resource or page";
  }

  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
}
export default ErrorPage;
