let commitReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_COMMITS':
            return {
                ...state,
                commits: action.commits
            }

        default:
            return state;
    }
};

export default commitReducer;