import React from "react";
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Route component={Component} {...rest} />;
  }
  return <Redirect to="/login" />;
};

export default PrivateRoute;
