import axios from "axios";
import authHeader from "./auth-header";
import AuthService from "./auth.service";

const API_URL = 'http://localhost:8082/admin/';


class AdminService {
    getAllUsers(){
        return axios.get(API_URL+'all-users', {headers: authHeader()});
    }
}

export default new AdminService();