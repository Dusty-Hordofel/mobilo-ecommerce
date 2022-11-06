import React from "react";
import { Route, Navigate } from "react-router-dom";
// import { useUserContext } from '../context/user_context'
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth0();
  console.log(
    "🚀 ~ file: PrivateRoute.js ~ line 7 ~ PrivateRoute ~ children",
    children
  );

  return user ? children : <Navigate to="/"></Navigate>;
};
export default PrivateRoute;
