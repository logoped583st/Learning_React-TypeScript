export const fetchUserSuccess = (responce) => (dispatch) => {
    console.log("sendReq");

    return dispatch(
        {
            type: 'RESPONCE_SUCCESS_USER',
            data: {
                id: responce.id,
                email: responce.email,
                photo: responce.photo,
                admin: responce.admin
            }
        }
    )
};

export const fetchUserError = () => (dispatch) => {
    return dispatch(
        {
            type: 'RESPONCE_ERROR_USER',
            data: {
                error: true,
                email: ''
            }
        })
};

export const fetchUsersSuccess = (responce) => (dispatch) => {
    console.log("sendReq");

    return dispatch(
        {
            type: 'RESPONCE_SUCCESS_ALL_USER',
            data: {
                users: responce
            }
        }
    )
};



