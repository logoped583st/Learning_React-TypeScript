const initialStateUser = {
    image: '',
    name: '',
    login: '',
    bio: '',
    blog: '',
    company: '',
    location: '',
    email: '',
    social: '',
    error:null
};


const reducerUser = (state = initialStateUser, action) => {
    switch (action.type) {
        case 'RESPONCE_SUCCESS_USER': {
            return Object.assign({}, state.reducerUser, action.data);
        }
        case 'RESPONCE_ERROR_USER':{
            return Object.assign({}, state.reducerUser, action.data);
        }
        default: {
            if (state !== undefined) {
                return state;
            } else {
                return initialStateUser;
            }
        }
    }
};

export default reducerUser;