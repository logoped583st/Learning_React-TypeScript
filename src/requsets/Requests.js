import {fetchTasksSuccess, fetchUserError, fetchUsersSuccess, fetchUserSuccess} from "../actions/actions";
import reducerTasks from "../reducers/ReducerTasks";

const BASE_URL = 'http://localhost:8080/';

export const sendRequestUser = (login, password) => (dispatch) => {
    console.log(login + " " + password)
    return fetch(BASE_URL + 'authorization?login=' + login + "&password=" + password)
        .then((res) => {

            if (200 <= res.status < 400) {
                return res.json()
            } else {
                return dispatch(fetchUserError())
            }
        })
        .then((json) => {
            dispatch(fetchUserSuccess(json));
        }).catch((err) => {
            return dispatch(fetchUserError())
        })
};


export const sendRequestAllUser = (login) => (dispatch) => {
    return fetch("http://localhost:8080/allusers?login=" + login)  //"http://localhost:8080/allusers?login=admin"
        .then((res) => {
            if (200 <= res.status < 400) {
                return res.json()
            } else {

            }
        })
        .then((json) => {
            console.log(json)
            dispatch(fetchUsersSuccess(json));
        }).catch((err) => {
            console.log(err);
        })
};

export const registerUser = (login, password) => (dispatch) => {
    console.log(login + " " + password);
    return fetch(BASE_URL + 'registration?login=' + login + '&password=' + password)
        .then((res) => {
            if (200 <= res.status < 400) {
                console.log(res.status);
                return res.json()
            } else {
                return dispatch(fetchUserError())
            }
        })
        .then((json) => {
            dispatch(fetchUserSuccess(json));
        }).catch((err) => {
            return dispatch(fetchUserError())
        })
};


export const getTasks = (id) => (dispatch) => {
    return fetch(BASE_URL + 'tasks?id=' + id)
        .then((res) => {
            if (200 <= res.status < 400) {
                console.log(res.status)
                return res.json()
            } else {

            }
        }).then((json) => {
            return dispatch(fetchTasksSuccess(json))
        })
};

export const createTask =  (id,description) => (dispatch) => {
    return fetch(BASE_URL+"createTask",{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id:id,description:description})
    }).then((res) => {
        if (200 <= res.status < 400) {
            console.log(res.status)
            return res.json()
        } else {

        }
    }).then((json) => {
        return dispatch(fetchTasksSuccess(json))
    })
}

