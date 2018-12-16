import { showLoading, hideLoading } from 'react-redux-loading-bar';

import repoService from '../services/repo-service';

export let addRepos = ({ items: repos, total_count: total }) => ({
    type: 'ADD_REPOS',
    repos,
    total
});

export let searchRepos = (username, pageNumber = 1) => {
    return async (dispatch, getState) => {
        dispatch(showLoading());

        let res = await repoService.getReposByUsername(username, pageNumber);
        
        if (res.status !== 200) {
            dispatch(addRepos(null));

            return;
        }

        dispatch(addRepos(res.data));
        dispatch(hideLoading());
    };
};