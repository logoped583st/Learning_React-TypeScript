import {applyMiddleware, createStore} from "redux";
import {combineReducers} from 'redux'
import thunk from "redux-thunk";
import reducerTasks from "./ReducerTasks";
import reducerUser from "./ReducerUser";
import reducerToken from "./TokenReduser";

const reduser = combineReducers({reducerToken, reducerUser, reducerTasks, });
const store = createStore(reduser, applyMiddleware(thunk));

export default store;