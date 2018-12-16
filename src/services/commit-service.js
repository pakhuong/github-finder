import { GITHUB_API } from '../config/api-endpoint';
import ajax from '../util/ajax';

let commitService = {
    getCommitsInRepo(repoFullName, pageNumber) {
        return ajax.get(`${GITHUB_API}/repos/${repoFullName}/commits`);
    }
};

export default commitService;