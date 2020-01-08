import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

const Menu = () => {
	const classes = useStyles();

	return (
		<div className="menu">
			<AppBar position="static">
				<Toolbar>
					{/* <IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton> */}
					<Typography variant="h6" className={classes.title}>
						<NavLink to="/">
							<img src={logo} alt="" width="50" height="50" />
						</NavLink>
					</Typography>
					<NavLink to="/signin">Sign In</NavLink>
					<NavLink to="/register">Register</NavLink>
					<NavLink to="/dashboard">Dashboard</NavLink>
					<NavLink to="/profile">Profile</NavLink>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Menu;
