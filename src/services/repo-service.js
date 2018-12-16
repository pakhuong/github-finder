import { GITHUB_API } from '../config/api-endpoint';
import ajax from '../util/ajax';

let repoService = {
    getReposByUsername(username, pageNumber) {
        return ajax.get(`${GITHUB_API}/search/repositories`, {
            q: `user:${username}`,
            page: pageNumber,
            per_page: 10
        });
    }
};

export default repoService;