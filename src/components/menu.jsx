import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const Menu = () => {
	return (
		<div>
			<NavLink to="/">
				<img src={logo} alt="" width="50" height="50" />
			</NavLink>
			<ul>
				<li>
					<NavLink to="signin">Sign In</NavLink>
				</li>
				<li>
					<NavLink to="register">Register</NavLink>
				</li>
				<li>
					<NavLink to="dashboard">Dashboard</NavLink>
				</li>
				<li>
					<NavLink to="profile">Profile</NavLink>
				</li>
				<li>
					<NavLink to="profile">Profile</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
