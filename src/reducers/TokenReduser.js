const initialTokenState = {
    token: '',
};


const reducerToken = (state = initialTokenState, action) => {
    console.log(action.type);
    console.log(action);
    switch (action.type) {
        case 'TOKEN_SUCCES': {
            return {
                ...state,
                token: action.data.token

            }
        }
        default: {
            if (state !== undefined) {
                return state;
            } else {
                return initialTokenState;
            }
        }

    }

};

export default reducerToken