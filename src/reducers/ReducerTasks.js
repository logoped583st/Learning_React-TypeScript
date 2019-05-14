const initialStateUser = {
    activities: [


    ]
};


const reducerTasks = (state = initialStateUser, action) => {
    switch (action.type) {
        case 'RESPONCE_SUCCESS_TASKS': {
            return Object.assign({}, state.reducerTasks, action.data);
        }
        case 'RESPONCE_ERROR_TASKS': {
            return Object.assign({}, state.reducerTasks, action.data);
        }
        case 'RESPONCE_SUCCESS_CREATE_TASKS': {
            console.log(action);
            return {
                ...state,
                activities: state.activities.concat(action.data.task)
            };
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

export default reducerTasks;