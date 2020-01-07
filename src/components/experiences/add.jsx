import React from "react";
import { saveExperience } from "../../state/actionCreators";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

const AddExperience = ({ saveExperience }) => {
	const [experience, setExperience] = React.useState({
		title: "",
		location: "",
		price: 1,
		date: new Date(),
		description: ""
	});

	const handleChange = e => {
		setExperience({
			...experience,
			[e.target.name]: e.target.value
		});
		console.log(experience);
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log("save");

		saveExperience(experience);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<br />
				<TextField
					id="standard-basic"
					label="Title"
					name="title"
					value={experience.title}
					onChange={handleChange}
					variant="outlined"
				/>
				<br />
				<br />
				<TextField
					id="standard-basic"
					label="Location"
					name="location"
					value={experience.location}
					onChange={handleChange}
					variant="outlined"
				/>
				<br />
				<br />
				<TextField
					id="standard-basic"
					label="Price"
					name="price"
					value={experience.price}
					onChange={handleChange}
					variant="outlined"
					type="number"
				/>
				<br />
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<KeyboardDatePicker
						disableToolbar
						format="MM/dd/yyyy"
						margin="normal"
						id="date-picker-inline"
						label="Date"
						value={experience.date}
						onChange={handleChange}
						KeyboardButtonProps={{
							"aria-label": "change date"
						}}
						variant="outlined"
					/>
				</MuiPickersUtilsProvider>
				<br />
				<br />
				<TextField
					id="standard-basic"
					label="Description"
					name="description"
					value={experience.description}
					onChange={handleChange}
					variant="outlined"
					type="number"
					multiline
					rows="5"
					inputProps={{ cols: 50 }}
				/>
				<br />
				<br />
				<Button type="submit" variant="contained" color="primary">
					Add Experience
				</Button>
			</form>
		</>
	);
};

// Step 8: Use "connect" to plug the component to redux
// Step 9: Plug the action creators into the component
export default connect(state => state, { saveExperience })(AddExperience);
