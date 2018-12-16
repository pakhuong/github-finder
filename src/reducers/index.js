import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import userReducer from './user-reducer';
import repoReducer from './repo-reducer';
import commitReducer from './commit-reducer';

let rootReducer = combineReducers({
    user: userReducer,
    repo: repoReducer,
    commit: commitReducer,
    loadingBar: loadingBarReducer
});

export default rootReducer;