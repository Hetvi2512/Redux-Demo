import {BUY_ICECREAM} from './iceCreamTypes'
const initialIceCreamState ={
    numOfIceCream: 20
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
      case BUY_ICECREAM:
        return {
          // ...state = to maintain original state in a copy and update only numOfCake and not the actual state
          ...state,
          numOfIceCream: state.numOfIceCream - 1
        };
      default:
        return state;
    }
  };
  
  export default iceCreamReducer;