// Step 8: Use "connect" to plug the component to redux
// Step 9: Plug the action creators into the component

import React from "react";
import { useEffect } from "react";
import { loadExperiences } from "../../state/actionCreators";
import { connect } from "react-redux";

const Experiences = ({ experiences, loadExperiences }) => {
	useEffect(() => {
		loadExperiences();
	}, []);

	return (
		<>
			{JSON.stringify(experiences)}
			{experiences.map(experience => (
				<div>{experience.title}</div>
			))}
		</>
	);
};

export default connect(state => state, { loadExperiences })(Experiences);
