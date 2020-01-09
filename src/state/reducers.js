import * as types from "./actionTypes";

const user = JSON.parse(localStorage.getItem("user"));

// STEP 1: Decide state slices
const initialState = {
	user: user,
	experiences: [],
	form: {
		title: "",
		location: "",
		price: 1,
		date: new Date(),
		description: ""
	}
};

// STEP 3: create reducers
export function userReducer(user = initialState.user, action) {
	switch (action.type) {
		case types.REGISTER:
			return action.payload.user;
		case types.LOGIN:
			return action.payload.user;
		case types.UPDATE_USER:
			return user;
		case types.DELETE_USER:
			return user;
		default:
			return user;
	}
}

// STEP 3: create reducers
export function experiencesReducer(
	experiences = initialState.experiences,
	action
) {
	switch (action.type) {
		case types.CREATE_EXPERIENCE:
			return action.payload.experience;
		case types.READ_EXPERIENCE:
			return experiences;
		case types.UPDATE_EXPERIENCE:
			return experiences;
		case types.DELETE_EXPERIENCE:
			return experiences.filter(
				experience => experience.id !== action.payload.id
			);
		case types.GET_EXPERIENCES:
			return action.payload.experiences;
		case types.FILTER_EXPERIENCES:
			return experiences.filter(
				experience =>
					experience.title.includes(action.payload.filter.search) ||
					experience.description.includes(
						action.payload.filter.search
					) ||
					experience.location.includes(
						action.payload.filter.search
					) ||
					experience.price.includes(action.payload.filter.search)
			);
		default:
			return experiences;
	}
}

// STEP 3: create reducers
export function formReducer(form = initialState.form, action) {
	switch (action.type) {
		case types.UPDATE_FORM:
			return {
				...form,
				[action.payload.name]: action.payload.value
			};
		// case types.SAVE_FORM:
		// 	console.log("save");

		// 	return initialState.form;
		case types.EDIT:
			return action.payload.experience;
		case types.CLEAR_FORM:
			return initialState.form;
		default:
			return form;
	}
}
