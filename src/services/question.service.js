import axios from "axios";
import authHeader from "./auth-header";

class QuestionService {
    addQuestion(type, questionBody, possibleAnswer1, possibleAnswer2, possibleAnswer3, possibleAnswer4) {
        return axios
            .post("http://localhost:8082/question/add", {
                type,
                questionBody,
                possibleAnswer1,
                possibleAnswer2,
                possibleAnswer3,
                possibleAnswer4
            }, {headers: authHeader()})
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    }
}
export default new QuestionService();