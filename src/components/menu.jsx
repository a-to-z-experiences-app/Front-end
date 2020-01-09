import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { connect } from "react-redux";

import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import { useHistory } from "react-router";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1,
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block"
		}
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginLeft: 0,
		marginRight: theme.spacing(2),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto"
		}
	},
	searchIcon: {
		width: theme.spacing(7),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	inputRoot: {
		color: "inherit"
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: 120,
			"&:focus": {
				width: 200
			}
		}
	}
}));

const Menu = ({ user }) => {
	const classes = useStyles();
	let history = useHistory();
	const [userSearch, setUserSearch] = React.useState("");

	const search = e => {
		e.preventDefault();
		history.push("/?search=" + userSearch);
	};

	const handleChange = e => {
		setUserSearch(e.target.value);
	};

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
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<form action="" onSubmit={search}>
							<InputBase
								placeholder="Search…"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput
								}}
								value={userSearch}
								onChange={handleChange}
								inputProps={{
									"aria-label": "search"
								}}
							/>
						</form>
					</div>

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
