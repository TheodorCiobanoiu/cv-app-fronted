import React, { useEffect, useState } from "react";
import axios from "axios";



const ShowQuestion = () => {
    const [questions, setQuestions] = useState([]);
    const fetchData = () => {
        axios.get("http://localhost:8082/question/all", {crossDomain: true}).then(response => {
            setQuestions(response.data)
            console.log(response.data)
        }).catch(err => console.log(err))

    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <div>
            {questions.length > 0 && (
                <ul>
                    {questions.map(question => (
                        <li key={question.id}>{question.question_body}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
export default ShowQuestion