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
			<Route exact path="/" component={LogIn} />
			<Route path="/register" component={Register} />
			<Route path="/experiences" component={Experiences} />
			<Route path="/dashboard" component={Experiences} />
		</>
	);
}

export default App;
