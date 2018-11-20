import {applyMiddleware, createStore} from "redux";
import {combineReducers} from 'redux'
import thunk from "redux-thunk";
import reducerUser from './ReducerUser'
import reducerAllUsers from "./ReducerAllUsers";
import reducerTasks from "./ReducerTasks";

const reduser = combineReducers({reducerUser, reducerAllUsers, reducerTasks});
const store = createStore(reduser, applyMiddleware(thunk));

export default store;