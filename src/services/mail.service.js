import axios from "axios";
import authHeader from "./auth-header";

class MailService{

    sendMail(to, subject, text) {
        axios.post('http://localhost:8082/mail/sendMail',
            {
                to: to,
                subject: subject,
                text: text
            }, {headers: authHeader()});
    }
}

export default new MailService;