export const fetchUserSuccess = (responce) => (dispatch) => {
    console.log("sendReq");

    return dispatch(
        {
            type: 'RESPONCE_SUCCESS_USER',
            data: {
                id: responce.id,
                email: responce.email,
                photo: responce.photo
            }
        }
    )
};

export const fetchUserError = (error) => (dispatch) => {
    return dispatch(
        {
            type: 'RESPONCE_ERROR_USER',
            data: {
                error: true
            }
        })
};

