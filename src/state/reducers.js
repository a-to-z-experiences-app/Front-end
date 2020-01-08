import * as types from "./actionTypes";

// STEP 1: Decide state slices
const initialState = {
	user: {
		id: 0,
		name: "?",
		token: "?"
	},
	experiences: []
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
		default:
			return experiences;
	}
}

// STEP 3: create reducers
// export function formReducer(form = initialState.form, action) {
// 	switch (action.type) {
// 		case types.UPDATE_FORM:
// 			return {
// 				...form,
// 				[action.payload.name]: action.payload.value
// 			};
// 		case types.SAVE_FORM:
// 			console.log("save");

// 			return initialState.form;
// 		case types.EDIT_SMURF:
// 			return action.payload.smurf;
// 		default:
// 			return form;
// 	}
// }
