import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...props }) {
  if (localStorage.getItem("token")) {
    return <Route {...props} render={props => <Component {...props} />} />;
  }
  return <Redirect to="/signin" />;
}

export default PrivateRoute;
