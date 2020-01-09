import React, { useReducer, useState } from "react";
import { updateUser } from "../../state/actionCreators";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "date-fns";

const EditProfile = ({ updateUser, user, history, ...props }) => {
  console.log(props, history);
  const [userData, setUserData] = useState({
    username: user.username,
    first_name: user.first_name,
    last_name: user.last_name
  });

  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateUser(userData, user.id);
    history.push("/dashboard");
  };

  return (
    <>
      <h1>Edit profile:</h1>
      <form onSubmit={handleSubmit}>
        <br />
        <TextField
          id="standard-basic"
          label="Username"
          name="username"
          value={userData.username}
          onChange={handleChange}
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          id="standard-basic"
          label="first name"
          name="first_name"
          value={userData.first_name}
          onChange={handleChange}
          variant="outlined"
          type="text"
        />
        <br />
        <br />
        <TextField
          id="standard-basic"
          label="last name"
          name="last_name"
          value={userData.last_name}
          onChange={handleChange}
          variant="outlined"
          type="text"
        />
        <br />
        <br />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Update Profile
        </Button>
      </form>
    </>
  );
};

// Step 8: Use "connect" to plug the component to redux
// Step 9: Plug the action creators into the component
export default connect(state => state, {
  updateUser
})(EditProfile);
