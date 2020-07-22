

import axios from 'axios/index';
import { API_BASE } from 'src/constants/Config';

const API = API_BASE + "/homes";

class DepartmentService {

    getDepartments(){
        return axios({
            method: 'GET',
            url: `${API}`,
            transformResponse(data) {
                if(data){
                    data = JSON.parse(data);
                }
                return data;
            }
        });
    }
}

export default new DepartmentService();