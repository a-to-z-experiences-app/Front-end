import React from "react";
import "./App.scss";
import Experiences from "./components/experiences/list";
import AddExperience from "./components/experiences/add";
import LogIn from "./components/user/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/user/register";
import Menu from "./components/menu";
import PrivateRoute from "./helpers/privateRoute";

import Container from "@material-ui/core/Container";
import User from "./components/user/user";
import UserProfile from "./components/user/userprofile";

import Experience from "./components/experiences/experience";

function App() {
  return (
    <>
      <Router>
        <Container maxWidth="lg">
          <Menu></Menu>
          <Switch>
            <Route exact path="/" component={Experiences} />
            <Route path="/signin" component={LogIn} />
            <Route path="/register" component={Register} />
            <Route
                path="/dashboard"
                component={props => {
                    return (
                        <Experiences
                            {...props}
                            isDashboard={true}
                        />
                    );
                }}
            />
            <PrivateRoute path="/add" component={AddExperience} />
            <PrivateRoute path="/edit/:id" component={AddExperience} />
            <Route path="/experience/:id" component={Experience} />
            <PrivateRoute
              path="/profile"
              component={props => <User {...props} />}
            />
            <Route path="/user/:id" component={UserProfile} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
