import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { PropsWithChildren } from "react";

export const PublicRoute = (props: PropsWithChildren) => {
  const { children } = props;

  const { user } = useAuth();

  if (user !== undefined) {
    return <Navigate to="/" replace />;
  }

  return children;
};
