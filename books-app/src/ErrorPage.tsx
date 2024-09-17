import { Navigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  console.error(error);

  return <Navigate to="/sign-in" replace />;
};
