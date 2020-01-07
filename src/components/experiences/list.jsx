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
			<h1>Experiences: </h1>
			{experiences.map(experience => (
				<div style={{ border: "2px solid black" }}>
					{experience.title}
					<br />
					{experience.description}
				</div>
			))}
		</>
	);
};

// Step 8: Use "connect" to plug the component to redux
// Step 9: Plug the action creators into the component
export default connect(state => state, { loadExperiences })(Experiences);
