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

export const loginUser = loginData => async dispatch => {
  try {
    const { data } = await axiosWithAuth().post("/login", loginData);
    if (data.token) {
      localStorage.setItem("token", data.token);
      dispatch({
        type: types.LOGIN,
        payload: {
          user: data.user
        }
      });
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = data => dispatch => {
  axiosWithAuth()
    .post("/register", data)
    .then(response => {
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      dispatch({
        type: types.REGISTER,
        payload: {
          user: response.data.user
        }
      });
    })
    .catch(() => {
      console.log("error!!!");
    });
};
export const saveExperience = experience => dispatch => {
  axiosWithAuth()
    .post("/experiences", experience)
    .then(response => {
      console.log(response.data.experiences);

      // dispatch({
      // 	type: types.GET_EXPERIENCES,
      // 	payload: {
      // 		experiences: response.data.experiences
      // 	}
      // });
    })
    .catch(() => {
      console.log("error!!!");
    });
};

export const deleteExperience = id => dispatch => {
  axiosWithAuth()
    .delete("/experiences/" + id)
    .then(response => {
      console.log(response.data);
      dispatch({
        type: types.DELETE_EXPERIENCE,
        payload: {
          id: id
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
