let repoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_REPOS':
            return {
                ...state,
                repos: action.repos,
                total: action.total
            }

        default:
            return state;
    }
};

export default repoReducer;