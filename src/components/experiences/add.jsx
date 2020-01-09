import React from "react";
import {
	updateForm,
	saveExperience,
	getExperience
} from "../../state/actionCreators";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

import { useParams, useHistory } from "react-router";

const AddExperience = ({
	form,
	updateForm,
	saveExperience,
	getExperience,
	user
}) => {
	let { id } = useParams();
	let history = useHistory();

	React.useEffect(() => {
		if (id !== undefined) {
			getExperience(id);
		}
	}, [id]);

	const handleChange = e => {
		console.log(e);
		if (e.target === undefined) {
			updateForm({ name: "date", value: new Date(e) });
			return;
		}
		const { name, value } = e.target;
		updateForm({ name, value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		saveExperience(form, user.id, history);
	};

	return (
		<>
			<h1>New Experience:</h1>
			<form onSubmit={handleSubmit}>
				<br />
				<TextField
					id="standard-basic"
					label="Title"
					name="title"
					value={form.title}
					onChange={handleChange}
					variant="outlined"
				/>
				<br />
				<br />
				<TextField
					id="standard-basic"
					label="Location"
					name="location"
					value={form.location}
					onChange={handleChange}
					variant="outlined"
				/>
				<br />
				<br />
				<TextField
					id="standard-basic"
					label="Price"
					name="price"
					value={form.price}
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
						value={form.date}
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
					value={form.description}
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
					{form.id !== undefined
						? "Save Experience"
						: "Add Experience"}
				</Button>
			</form>
		</>
	);
};

// Step 8: Use "connect" to plug the component to redux
// Step 9: Plug the action creators into the component
export default connect(state => state, {
	updateForm,
	saveExperience,
	getExperience
})(AddExperience);
