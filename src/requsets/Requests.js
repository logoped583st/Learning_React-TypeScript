import {
    fetchCreateTasksSuccess,
    fetchTasksSuccess, fetchTokenSuccess,
    fetchUserError,
    fetchUsersSuccess,
    fetchUserSuccess
} from "../actions/actions";

const BASE_URL = 'http://localhost:8080/';


export const sendRequestUser = (login, password) => (dispatch) => {
    console.log(login + " " + password);

    console.log(JSON.stringify({
        login: login, password: password
    }));
    return fetch(BASE_URL + 'authorization', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({
            login: login, password: password
        })

    }).then((res) => {
        console.log(res.status);

        if (200 <= res.status < 400) {
            return res.json()
        } else {
            return dispatch(fetchUserError())
        }
    })
        .then((json) => {
            console.log(json);
            return dispatch(fetchTokenSuccess(json));
        }).catch((err) => {
            return dispatch(fetchUserError())
        });
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
            console.log(json);

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

export const getUser = () => (dispatch) => {
    console.log(localStorage.getItem('token'));
    return fetch(BASE_URL + 'user', {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer '+ localStorage.getItem('token')
            })
        },
    )
        .then((res) => {
            console.log(res.status);

            if (200 <= res.status < 400) {
                return res.json()
            } else {
                return dispatch(fetchUserError())
            }
        })
        .then((json) => {
            console.log(json);
            return dispatch(fetchUserSuccess(json));
        }).catch((err) => {
            return dispatch(fetchUserError())
        })
};


export const getTasks = (token) => (dispatch) => {
    return fetch(BASE_URL + 'activities', {headers: new Headers({'Authorization': 'Bearer '+ localStorage.getItem('token')})})
        .then((res) => {
            console.log(res.status);

            if (200 <= res.status < 400) {
                return res.json()
            } else {

            }
        }).then((json) => {
            console.log(json)
            return dispatch(fetchTasksSuccess(json))
        })
};

export const createTask = (id, description, taskName) => (dispatch) => {
    return fetch(BASE_URL + "activities", {
        method: "POST",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem('token')
        },
        body: JSON.stringify({title: taskName, description: description, type : 'POST'})
    }).then((res) => {

        if (200 <= res.status < 400) {
            return res.json()
        } else {

        }
    }).then((json) => {
        return dispatch(fetchCreateTasksSuccess(json))
    })
};

export const deleteTask = (id) => (dispatch) => {
    return fetch(BASE_URL+'/activities/'    + id, {
        method: 'delete',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem('token')
        },
    }).then((res) => {
        console.log(res.status)
        if (200 <= res.status < 400) {
            return res.json()
        } else {

        }
    }).then((json) => {
        return dispatch(fetchTasksSuccess(json))
    })
};


export const updateTask = (id, description, taskName) => (dispatch) => {
    return fetch(BASE_URL + "activities/" + id, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ localStorage.getItem('token')
        },
        body: JSON.stringify({title: taskName, description: description, type : 'POST'})
    }).then((res) => {
        console.log(res.status)

        if (200 <= res.status < 400) {
            return res.json()
        } else {

        }
    }).then((json) => {
        return dispatch(fetchTasksSuccess(json))
    })
};

