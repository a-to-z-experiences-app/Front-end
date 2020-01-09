import React, { useState } from "react";
import { Button, Form, Input, FormGroup } from "reactstrap";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../state/actionCreators";
import logo from "../../images/logo.png";

// this has been kept

const LogIn = ({ user, loginUser, history }) => {
	const [userData, setUserData] = useState({
		username: "",
		password: ""
	});

	const handleChange = e => {
		setUserData({
			...userData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		loginUser(userData).then(res => {
			if (res) {
				history.push("/");
			}
		});
		// let userdett = loginUser(userData);
		// if (localStorage.getItem("token")) {
		// }
	};
	return (
		<LoginForm>
			<div className="topHalf">
				<img src={logo} alt="logo" />
				<h2>
					Sign In |{" "}
					<NavLink className="navLink" to="/register">
						Register
					</NavLink>
				</h2>
			</div>

			<div className="bottomHalf">
				<br />
				<br />
				<Form onSubmit={handleSubmit}>
					<FormGroup>
						<Input
							type="text"
							name="username"
							id="email"
							placeholder="email address"
							value={userData.email}
							onChange={handleChange}
						/>
					</FormGroup>
					<br />
					<br />
					<FormGroup>
						<Input
							type="password"
							name="password"
							id="password"
							placeholder="password"
							value={userData.password}
							onChange={handleChange}
						/>
					</FormGroup>
					<br />
					<br />
					<br />
					{/* <NavLink to="/"> */}
					<Button>Sign In</Button>
					{/* </NavLink> */}
				</Form>
			</div>
		</LoginForm>
	);
};

const LoginForm = styled.form`
	.topHalf {
		min-height: 50%;
		background-color: #e9e7e3;
	}
	img {
		max-height: 100px;
		max-width: 100px;
		margin-left: 45%;
	}
	h2 {
		color: #fe0202;
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 48px;
		line-height: 56px;
		margin-left: 15%;
		padding-top: 20%;
	}
	.navLink {
		text-decoration: none;
		color: #d3d3d3;
	}
	.bottomHalf {
		margin-left: 30%;
	}
	FormGroup {
		border: 3px solid red;
	}
	button {
		color: #fe0202;
		width: 220px;
		height: 40px;
		border: 1px solid #fe0202;
		border-radius: 2rem;
		font-size: 24px;
		margin-bottom: 15%;
	}
`;

export default connect(
	(state, ownProps) => {
		console.log(`%c` + JSON.stringify(ownProps), "color: red");
		return state;
	},
	{ loginUser }
)(LogIn);
