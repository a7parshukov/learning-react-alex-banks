import { useLocation, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const location = useLocation();
  console.error(error);
  console.log(location);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred (Resource not found at {location.pathname}).</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export { ErrorPage };