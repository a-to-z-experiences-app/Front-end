import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { connect } from "react-redux";

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

const Menu = ({ user }) => {
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

					{user !== null && user !== undefined ? (
						<>
							<NavLink to="/dashboard">Dashboard</NavLink>
							<NavLink to="/profile">{user.username}</NavLink>
						</>
					) : (
						<>
							<NavLink to="/signin">Sign In</NavLink>
							<NavLink to="/register">Register</NavLink>
						</>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
};

// Step 8: Use "connect" to plug the component to redux
// Step 9: Plug the action creators into the component
export default connect(state => state, {})(Menu);
