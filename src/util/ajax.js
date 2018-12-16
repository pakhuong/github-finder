import axios from 'axios';

import { CLIENT_ID, CLIENT_SECRET } from '../config/api-endpoint';

let ajax = {
    get(url, params) {
        return axios.get(url, {
            params: {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                ...params
            }
        }).catch(error => console.error(error));
    }
};

export default ajax;