import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <div id="error-page">
      <h1>¡Oops!</h1>
      <p>¡Ocurrió un error!.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
