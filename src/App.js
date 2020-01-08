import React from "react";
import "./App.css";
import Experiences from "./components/experiences/list";
import AddExperience from "./components/experiences/add";
import LogIn from "./components/user/login";
import { Route } from "react-router-dom";
import Register from "./components/user/register";
import Menu from "./components/menu";

function App() {
	return (
		<>
			<Menu></Menu>
			<Route exact path="/" component={Experiences} />
			<Route path="/signin" component={LogIn} />
			<Route path="/register" component={Register} />
			<Route path="/dashboard" component={Experiences} />
			<Route path="/add" component={AddExperience} />
			<Route path="/experience/:id" component={Experiences} />
			<Route path="/profile" component={""} />
			<Route path="/user/:id" component={""} />
		</>
	);
}

export default App;
