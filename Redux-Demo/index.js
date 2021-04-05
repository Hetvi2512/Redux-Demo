const redux = require("redux");
const reduxLogger = require('redux-logger'); // It is a middleware to log every action and state changer



const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger()
// STATE of the application

/*
const initialState = {
  numOfCakes: 10,
  numOfIcecream: 20
};
*/

const initialCakeState = {
  numOfCakes: 10
};
const initialIceCreamState = {
  numOfIcecream: 20
};

/* action = describes what happened, decribes the change in state of application
         only way application can interact with store.
         It has a "Type" property to describe type of action.
         Type = defined as a string constant
         Action creator is a function that returns an action 
 */
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
function buyCake() {
  return {
    type: BUY_CAKE
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

/*  reducer = ties action and store together by 
          actually performing the state transition depending on action
            (previousState, action) => newState
 */

/*
Instead of having everything in one reducer we seperate it.

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        // ...state = to maintain original state in a copy and update only numOfCake and not the actual state
        ...state,
        numOfCakes: state.numOfCakes - 1
      };

    case BUY_ICECREAM:
      return {
        // ...state = to maintain original state in a copy and update only numOfCake and not the actual state
        ...state,
        numOfIcecream: state.numOfIcecream - 1
      };

    default:
      return state;
  }
};
*/
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        // ...state = to maintain original state in a copy and update only numOfCake and not the actual state
        ...state,
        numOfCakes: state.numOfCakes - 1
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        // ...state = to maintain original state in a copy and update only numOfCake and not the actual state
        ...state,
        numOfIcecream: state.numOfIcecream - 1
      };
    default:
      return state;
  }
};

/* store = 1. Holds the state of application
            2. Allows access to state via getState()
            3. Allows state to be updated via Dispatch(action)
            4. Register listeners via subscribe(listener) => registering components
            5. unsubscribe the listener
 */

 // Now we have to reducers but one store so we need to combine both the reducers
 const rootReducer = combineReducers({
     cake: cakeReducer,
     iceCream: iceCreamReducer
 })
//const store = createStore(reducer);

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());
/* const unsubscibe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
removed console.log and applied logger which will log everything which is a middleware

*/
const unsubscibe = store.subscribe(() =>{}
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscibe();

// To update the state , do it with action method so redux also knows change state
// Do not directly update the state

// write pure reducers = pure functions
