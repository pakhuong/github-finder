let userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_USERS':
            return {
                ...state,
                users: action.users,
                total: action.total
            }

        default:
            return state;
    }
};

export default userReducer;