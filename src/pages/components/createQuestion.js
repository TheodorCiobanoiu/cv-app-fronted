import React, { useEffect, useState } from "react";
import axios from "axios";

const CreateQuestion = () => {
    const [questions, getQuestions] = useState([]);
    const fetchData = () => {
        axios.get("http://localhost:8082/question/all").then(response => {
            getQuestions(response.data)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <div>
            {questions.length > 0 && (
                <ul>
                    {questions.map(question => (
                        <li key={question.id}>{question.id}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
export default CreateQuestion