import { showLoading, hideLoading } from 'react-redux-loading-bar';

import userService from '../services/user-service';

export let addUsers = ({ items: users, total_count: total }) => ({
    type: 'ADD_USERS',
    users,
    total
});

export let searchUsers = (username, pageNumber = 1) => {
    return async (dispatch, getState) => {
        dispatch(showLoading());

        let res = await userService.getUsersByUsername(username, pageNumber);

        if (res.status !== 200) {
            dispatch(addUsers(null));

            return;
        }

        dispatch(addUsers(res.data));
        dispatch(hideLoading());
    };
};