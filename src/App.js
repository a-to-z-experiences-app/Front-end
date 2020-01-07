import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Experiences from "./components/experiences/list";
import AddExperience from "./components/experiences/add";
import LogIn from "./components/user/login";

function App() {
	return (
		<>
			<Experiences></Experiences>;
			<LogIn />
			<AddExperience />
		</>
	);
}

export default App;
