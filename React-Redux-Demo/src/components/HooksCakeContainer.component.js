import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from '../redux';
function HooksCakeContainer(props) {
    const numOfCakes = useSelector(state => state.cake.numOfCakes) // It is similar to mapStateToprops
    const dispatch =  useDispatch()// Similar to mapDispatchtoProps
    return(
        <div>
        <h2>Number of Cakes with hooks  {numOfCakes} </h2>
        <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
  }
  export default HooksCakeContainer;

  
