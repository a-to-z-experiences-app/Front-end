import React from "react";

import { getExperience } from "../../state/actionCreators";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

import ScheduleIcon from "@material-ui/icons/Schedule";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Experience = ({ getExperience, location, experience }) => {
	let { id } = useParams();

	React.useEffect(() => {
		getExperience(id);
	}, []);
	return (
		<>
			<h1>{experience.title}</h1>
			<img
				src={
					"https://picsum.photos/seed/" + experience.id + "/1200/600"
				}
				alt=""
				style={{ width: "100%" }}
			/>
			<br />
			<p style={{ fontSize: "25px" }}>
				<ScheduleIcon /> {(experience.date || "").slice(0, 10)} <br />
				<LocationOnIcon /> {experience.location} <br />
				<AccountCircleIcon />{" "}
				<NavLink to={"/user/" + experience.user_id}>
					{experience.user_id}
				</NavLink>
			</p>
			<p style={{ fontSize: "25px" }}>{experience.description}</p>
		</>
	);
};

// Step 8: Use "connect" to plug the component to redux
// Step 9: Plug the action creators into the component
export default connect(state => state, { getExperience })(Experience);
