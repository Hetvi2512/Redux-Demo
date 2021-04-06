import {combineReducers} from 'redux'
import cakeReducer from './cakes/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './users/userReducer'
import addUserReducer from './adduser/addUserReducer'
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
    addUser:addUserReducer
})
export default rootReducer;