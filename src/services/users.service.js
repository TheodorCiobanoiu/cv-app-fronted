import axios from "axios";
import authHeader from "./auth-header";
import AuthService from "./auth.service";

const API_URL = 'http://localhost:8082/admin/';

class UsersService {
    getUserById(id){
        return axios.get(API_URL + 'get-user/by-id/'+id,{headers: authHeader()});
    }
}

export default new UsersService();