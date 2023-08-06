import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useStateProvider } from "../utils/StateProvider";

const PrivateRoute = () => {
  const [{ isLoggedIn }] = useStateProvider();

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
