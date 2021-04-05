const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default; // allows action creator to return function instead of action object
const reduxLogger = require('redux-logger'); // It is a middleware to log every action and state changer

const axios = require("axios");
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger()
const createStore = redux.createStore;

const initialState = {
  loading: false,
  users: [],
  error: ""
};

//actions
const FETCH_USERS_REQUESTS = "FETCH_USERS_REQUESTS";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUESTS
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
};
const fetchUserFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  };
};
// reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTS:
      return {
        ...state,
        loading: true
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ""
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: "",
        error: action.payload
      };
  }
};

// action creator => returns action
// thunk middleware helps to return function instead of action object
// this function is allowed not to be pure.
// Pure function cannot have axios call
// This function can have aysnc await axios call.
const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        const users = response.data.map(user => user.id);
        dispatch(fetchUserSuccess(users));
      })
      .catch(error => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));
//store.subscribe(()=>{console.log(store.getState())})
store.subscribe(()=>{})
store.dispatch(fetchUsers())