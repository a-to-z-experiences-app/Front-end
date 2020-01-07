import React from "react";
import "./App.css";
import Experiences from "./components/experiences/list";
import AddExperience from "./components/experiences/add";
import LogIn from "./components/user/login";
import { Route } from "react-router-dom";
import Register from "./components/user/register";

function App() {
  return (
    <>
      <Experiences></Experiences>;
      <Route exact path="/" component={LogIn} />
      <Route path="/register" component={Register} />
    </>
  );
}

export default App;
