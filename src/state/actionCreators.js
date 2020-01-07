import * as types from "./actionTypes";
import axiosWithAuth from "../helpers/axios";

// Step 7: Design action creator functions
export const loadExperiences = () => dispatch => {
	axiosWithAuth()
		.get("/experiences")
		.then(response => {
			console.log(response.data.experiences);

			dispatch({
				type: types.GET_EXPERIENCES,
				payload: {
					experiences: response.data.experiences
				}
			});
		})
		.catch(() => {
			console.log("error!!!");
		});
};

// Step 7: Design action creator functions
// export const updateForm = ({ name, value }) => {
// 	return {
// 		type: types.UPDATE_FORM,
// 		payload: {
// 			name,
// 			value
// 		}
// 	};
// };
