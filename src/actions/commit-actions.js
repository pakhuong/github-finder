import { showLoading, hideLoading } from 'react-redux-loading-bar';

import commitService from '../services/commit-service';

export let addCommits = (commits) => ({
    type: 'ADD_COMMITS',
    commits
});

export let searchCommits = (repoFullName) => {
    return async (dispatch, getState) => {
        dispatch(showLoading());

        let res = await commitService.getCommitsInRepo(repoFullName);
        
        if (res.status !== 200) {
            dispatch(addCommits(null));

            return;
        }

        dispatch(addCommits(res.data));
        dispatch(hideLoading());
    };
};