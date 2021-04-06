import {
    ADD_USERS_FAILURE,
    ADD_USERS_REQUESTS,
    ADD_USERS_SUCCESS
  } from "./addUserType";
  import axios from 'axios';
  
  export const addUserRequest = () => {
    return {
      type: ADD_USERS_REQUESTS
    };
  };
  const addUserSuccess = users => {
    return {
      type: ADD_USERS_SUCCESS,
      payload: users
    };
  };
  const addUserFailure = error => {
    return {
      type: ADD_USERS_FAILURE,
      payload: error
    };
  };
  
  export const addUsers = (users) => {
    return function(dispatch) {
      dispatch(addUserRequest());
      axios
        .post("https://jsonplaceholder.typicode.com/posts",{
            title: users.title,
            body: users.body,
            userId: users.userId
        })
        .then(response => {
          const users = response.data;
          console.log(response)
          dispatch(addUserSuccess(users));
        })
        .catch(error => {
          dispatch(addUserFailure(error.message));
        });
    };
  };
  