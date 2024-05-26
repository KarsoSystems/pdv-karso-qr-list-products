import React from "react";
import { Navigate } from "react-router-dom";
import { RoutesList } from "../../utils/routes";

const ProtectedRoutes = ({
  user,
  isProtect,
  children,
}: React.PropsWithChildren<{ user: null | {}; isProtect: boolean }>) => {
  if (!user && isProtect) {
    return <Navigate to={RoutesList.routeToLogin} />;
  }
  return children;
};

export default ProtectedRoutes;
