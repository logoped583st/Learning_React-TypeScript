import {fetchUserSuccess} from "../actions/actions";


// const baseUrl = 'https://api.github.com/users/';


const BASE_URL = 'localhost:8080/';

export const sendRequestUser = (login, password) => (dispatch) => {
    return fetch(BASE_URL + 'authorization?login=' + login + "&password=" + password)
        .then((res) => {
            console.log(res);
            dispatch(fetchUserSuccess(res.json()));
        }).catch((err) => {
            console.log(err.toString());
        })
};