import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Experiences from "./components/experiences/list";
import LogIn from "./components/user/login";

function App() {
  return (
    <>
      <Experiences></Experiences>;
      <LogIn />
    </>
  );
}

export default App;
