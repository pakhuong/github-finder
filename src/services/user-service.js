import { GITHUB_API } from '../config/api-endpoint';
import ajax from '../util/ajax';

let userService = {
    getUsersByUsername(username, pageNumber) {
        return ajax.get(`${GITHUB_API}/search/users`, { 
            q: username,
            page: pageNumber
        });
    }
};

export default userService;