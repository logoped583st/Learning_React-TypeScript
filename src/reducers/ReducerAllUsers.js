const initialStateAllUsers = {
    users: []
};


const reducerAllUsers = (state = initialStateAllUsers, action) => {
    switch (action.type) {
        case 'RESPONCE_SUCCESS_ALL_USER': {
            return Object.assign({}, initialStateAllUsers.users, action.data);
        }
        case 'RESPONCE_ERROR_ALL_USER': {
            return Object.assign({}, initialStateAllUsers.users, action.data);
        }
        default: {
            if (state !== undefined) {
                return state;
            } else {
                return initialStateAllUsers;
            }
        }
    }
};

export default reducerAllUsers;