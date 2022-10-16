import axios from "axios";
import authHeader from "./auth-header";
import AuthService from "./auth.service";

const API_URL = 'http://localhost:8082/admin/';


class AdminService {
    getAllUsers(){
        return axios.get(API_URL+'all-users', {headers: authHeader()});
    }

    deleteUser(username){
        const requesterId = AuthService.getCurrentUser().id;
        console.log(username);
        console.log(username);
        return axios.delete(API_URL + 'delete-user/'+username.username+'/'+requesterId, {headers: authHeader()});
    }
}


export default new AdminService();