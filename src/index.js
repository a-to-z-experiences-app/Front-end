import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

// yarn add redux react-redux redux-thunk
import {
	experiencesReducer,
	userReducer,
	formReducer,
	experienceReducer
} from "./state/reducers";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// Step 4: Use "combineReducers" to make a monster reducer
const monsterReducer = combineReducers({
	user: userReducer,
	experiences: experiencesReducer,
	form: formReducer,
	experience: experienceReducer
});

// Step 5: use "createStore" to make a redux store
const store = createStore(
	monsterReducer, // we need the second arg to enable redux devtools
	{},
	compose(
		applyMiddleware(thunk /* ,etc , other middlewares */),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

ReactDOM.render(
	// Step 6: use "Provider" to inject the store into the app
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
