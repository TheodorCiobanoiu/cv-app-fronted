import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'http:localhost:8082/recommendation/';

class RecommendationService {
    getAllRecommendations() {
        return axios.get(API_URL + 'all', {headers: authHeader()});
    }
}

export default new RecommendationService();