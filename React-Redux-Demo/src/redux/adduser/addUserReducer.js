import {
  ADD_USERS_FAILURE,
  ADD_USERS_REQUESTS,
  ADD_USERS_SUCCESS
} from "./addUserType";
const initialState = {
  loading: false,
  users: [
    {
      title: "",
      body: "",
      userId: 1
    }
  ]
};
const addUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS_REQUESTS:
      return {
        ...state,
        loading: true
      };
    case ADD_USERS_SUCCESS:
      let userList={...state};
      userList.users.push(action.payload)
      return {
        loading: false,
        users: userList,
        error: ""
      };
    case ADD_USERS_FAILURE:
      return {
        loading: false,
        users: "",
        error: action.payload
      };

    default:
      return state;
  }
};

export default addUserReducer;
