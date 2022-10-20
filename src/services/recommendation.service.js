import axios from "axios";
import authHeader from "./auth-header";
import AuthService from "./auth.service";

const API_URL = 'http://localhost:8082/recommendation/';
const user = AuthService.getCurrentUser();
class RecommendationService {
    getAllRecommendations() {
        return axios.get(API_URL + 'all', {headers: authHeader()});
    }
    getRecommendationsById(id){
        return axios.get(API_URL + 'all/' + id, {headers: authHeader()});
    }
    addRecommendation(formValues){
        return axios.post(API_URL + 'add',formValues,{headers: authHeader()})
    }
    changeRecommendationStatus(recommendationId, newStatus){
        return axios.post(API_URL + 'changeStatus/' + recommendationId + '/' + newStatus, undefined, {headers: authHeader()})
    }
}

export default new RecommendationService();