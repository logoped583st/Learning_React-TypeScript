export const fetchUserSuccess = (responce) => (dispatch) => {
    console.log("sendReq");

    return dispatch(
        {
            type: 'RESPONCE_SUCCESS_USER',
            data: {
                id:responce.id,
                userName: responce.userName,
                description:responce.description,
                skills: responce.skills,
                badges: responce.badges,
                photo: responce.photo,
            }
        }
    )
};


export const fetchTokenSuccess = (responce) => (dispatch) => {
    return dispatch({
        type: 'TOKEN_SUCCES',
        data: {
            token : responce.token
        }
    })
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

export const fetchTasksSuccess = (response) => (dispatch) => {
    return dispatch(
        {
            type: 'RESPONCE_SUCCESS_TASKS',
            data: {
                activities: response
            }
        }
    )
};

export const fetchCreateTasksSuccess = (response) => (dispatch) => {
    return dispatch(
        {
            type: 'RESPONCE_SUCCESS_CREATE_TASKS',
            data: {
                task: response
            }
        }
    )
};



