import {BUY_CAKE} from './caketTypes'
const initialCakeState ={
    numOfCakes: 10
}
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
      case BUY_CAKE:
        return {
          // ...state = to maintain original state in a copy and update only numOfCake and not the actual state
          ...state,
          numOfCakes: state.numOfCakes - action.payload
        };
      default:
        return state;
    }
  };
  
  export default cakeReducer;