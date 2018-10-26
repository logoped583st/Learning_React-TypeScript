import {applyMiddleware, createStore} from "redux";
import {combineReducers} from 'redux'
import thunk from "redux-thunk";
import reducerUser from './ReducerUser'

const reduser = combineReducers({reducerUser})
const store = createStore(reduser, applyMiddleware(thunk));

export default store;