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
export const filterExperiences = search => dispatch => {
  dispatch({
    type: types.FILTER_EXPERIENCES,
    payload: {
      filter: search
    }
  });
};

// Step 7: Design action creator functions
export const loadUserExperiences = userID => dispatch => {
  axiosWithAuth()
    .get("/users/" + userID + "/host_experiences")
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
      localStorage.setItem("user", JSON.stringify(data.user));
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

export const saveExperience = (experience, userID, history) => dispatch => {
  if (experience.id !== undefined) {
    axiosWithAuth()
      .put("/experiences/" + experience.id, experience)
      .then(response => {
        console.log(response.data);

        dispatch({
          type: types.CLEAR_FORM
        });

        history.push("/dashboard");
      })
      .catch(() => {
        console.log("error!!!");
      });
  } else {
    axiosWithAuth()
      .post("/experiences", { ...experience, user_id: userID })
      .then(response => {
        console.log(response.data.experiences);

        dispatch({
          type: types.CLEAR_FORM
        });

        history.push("/dashboard");
      })
      .catch(() => {
        console.log("error!!!");
      });
  }
};

export const getExperience = id => dispatch => {
  axiosWithAuth()
    .get("/experiences/" + id)
    .then(response => {
      console.log(response.data);
      dispatch({
        type: types.EDIT,
        payload: {
          experience: response.data
        }
      });
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

export const updateForm = ({ name, value }) => {
  return {
    type: types.UPDATE_FORM,
    payload: {
      name,
      value
    }
  };
};

export const updateUser = (data, id) => dispatch => {
  console.log(data);
  axiosWithAuth()
    .put(`/users/${id}`, data)
    .then(response => {
      console.log(response.data);
      localStorage.setItem("user", response.data.user);
      dispatch({
        type: types.UPDATE_USER,
        payload: {
          user: data
        }
      });
    })
    .catch(error => {
      console.log("error!!!", error.response);
    });
};

export const getUserProfile = id => dispatch => {
  axiosWithAuth()
    .get("/users/" + id + "/host_experiences")
    .then(response => {
      console.log(response.data);
      dispatch({
        type: types.SET_USERPROFILE,
        payload: {
          userProfile: response.data
        }
      });
    })
    .catch(() => {
      console.log("error!!!");
    });
};
