import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import {InputLabel} from "@material-ui/core";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import {useNavigate} from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import ParticlesBackground from "../components/ParticlesBackground";
import axios from "axios";
import authHeader from "../services/auth-header";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import AuthService from "../services/auth.service";
import RecommendationService from "../services/recommendation.service";

function AddRecommendation() {
    const defaultValues = {
        userId: "",
        candidateFirstName: "",
        candidateLastName: "",
        candidateEmail: "",
        candidatePhoneNumber: "",
        progressStatus: "Not_Reviewed",
        cvFileId: "",
        answers: [],
    };

    const [questions, setQuestions] = useState(null);
    const fetchData = () => {
        return axios
            .get("http://localhost:8082/question/all", {headers: authHeader()})
            .then((response) => setQuestions(response.data));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const validationSchema = Yup.object().shape({
        candidateFirstName: Yup.string(),
        candidateLastName: Yup.string(),
        candidateEmail: Yup.string()
            .email("Format email invalid!")
            .when("users", (users) => {
                return users && users.length > 0
                    ? Yup.string().email("Format email invalid!")
                    : Yup.string()
                        .email("Format email invalid!")
                        .required("Completați emailul sau adăugați un csv cu useri!");
            }),
        candidatePhoneNumber: Yup.string().min(10).required("Adaugati un numar de telefon pentru candidat.")
    });

    const [formValues, setFormValues] = useState(defaultValues);
    const [myResponse, setMyResponse] = useState({});
    const handleSubmit = async (values) => {
        console.log("Values object: ");
        console.log(values);
        console.log(values);

        const allAnswers = [];
        questions.forEach((question) => {
            console.log(question);
            const answer = {
                question: {},
                answerBody: ""
            }
            if (question.type === "Multiple_Choice") {
                const allTheAnswers = values[question.id];
                let finalAnswer;
                //allTheAnswers.forEach(answer =>{finalAnswer += ", " + answer});
                finalAnswer = allTheAnswers[0];
                for (let i = 1; i < allTheAnswers.length; i++) {
                    finalAnswer += ", " + allTheAnswers[i];
                }
                answer.answerBody = finalAnswer;
                answer.question = question;
                allAnswers.push(answer);
                console.log("Final answer: " + finalAnswer);
            } else {
                answer.answerBody = values[question.id];
                answer.question = question;
                allAnswers.push(answer);
            }
        });
        console.log("GIVEN ANSWERS");
        console.log(allAnswers);

        // Create an object of formData
        const formData = new FormData();
        // Update the formData object
        await formData.append("file", state.selectedFile, state.selectedFile.name);

        let axiosFileResponse = {}
        // Details of the uploaded file
        console.log(state.selectedFile);
        const user = JSON.parse(localStorage.getItem("user"));
        let recommendationFileId = 0;
        await axios.post("http://localhost:8082/file/uploadFile", formData, {
            headers: {
                Authorization: "Bearer " + user.token,
                "Content-Type": "multipart/form-data",
            },
        }).then(async (response) => {
            await setMyResponse(response.data);
            console.log("AXIOS FILE RESPONSE");
            console.log(myResponse);
            recommendationFileId = myResponse.fileId;

        });
        console.log(recommendationFileId);
        setFormValues({
                userId: user.id,
                candidateFirstName: values.candidateFirstName,
                candidateLastName: values.candidateLastName,
                candidateEmail: values.candidateEmail,
                candidatePhoneNumber: values.candidatePhoneNumber,
                progressStatus: "Not_Reviewed",
                cvFileId: recommendationFileId,
                answers: allAnswers,
            }
        );
        console.log("FINAL FORM VALUES ");
        console.log(formValues);

        await RecommendationService.addRecommendation(formValues).then((response) => {
            console.log(response);
        });
        // console.log("Event object on handleSubmit")
        // console.log(event);
        // console.log(formValues);
    };

    const [value, setValue] = React.useState();
    //
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   this.setValue({[event.target.name]: event.target.value})
    // };
    const navigate = useNavigate();

    //**************UPLOAD/DONWLOAD STUFF

    const state = {
        // Initially, no file is selected
        selectedFile: null,
    };

    // On file select (from the pop up)
    const onFileChange = (event) => {
        // Update the state
        state.selectedFile = event.target.files[0];
    };

    // const [answers2, setAnswers2] = useState([])
    // function handleOnChange (event) {
    //    setAnswers2([...answers2, {event.: newValue}]);
    //  }


    // On file upload (click the upload button)
    // const onFileUpload = (event) => {
    //     console.log("IM INSIDE ONFILEUPLOAD")
    //     // Create an object of formData
    //     const formData = new FormData();
    //     // Update the formData object
    //     formData.append("file", state.selectedFile, state.selectedFile.name);
    //
    //     // Details of the uploaded file
    //     console.log(state.selectedFile);
    //     const user = JSON.parse(localStorage.getItem("user"));
    //     console.log(user.token);
    //     axios.post("http://localhost:8082/file/uploadFile", formData, {
    //         headers: {
    //             Authorization: "Bearer " + user.token,
    //             "Content-Type": "multipart/form-data",
    //         },
    //     }).then((response) => {
    //         console.log(response);
    //     });
        /* axios.post('http://localhost:8082/mail/sendMail',
            {
              to:'theodor.ciobanoiu@gmail.com',
              subject:'Acesta este un test de mail',
              text:'Dupa cum spune si titlul, acesta este doar un test :)'
            }, {headers: authHeader()});
     */
        // Request made to the backend api
        // Send formData object
        //axios.post("api/uploadfile", formData);
    // };
    //**************UPLOAD/DOWNLOAD STUFF

    const onSubmitForm= () =>{};

    return (
        <div>
            <Header/>
            <br/>
            {/*<ParticlesBackground />*/}
            <div>
                <Container
                    maxWidth="sm"
                    fixed
                    sx={{
                        width: "90%",
                        color: "white",
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                        position: "relative",
                    }}
                >
                    <Box sx={{bgcolor: "#ffffff", borderRadius: 10}}>
                        <Formik initialValues={{}} validationSchema={validationSchema} onSubmit={handleSubmit}>
                            {(props) => (
                                <Form noValidate onSubmit={props.handleSubmit} className="form">
                                    <Grid
                                        className="grid-form"
                                        container
                                        alignItems="center"
                                        justifyContent="center"
                                        direction="column"
                                    >
                                        <FormLabel
                                            style={{
                                                margin: "20px",
                                            }}
                                        >
                                            Recommendation Form
                                        </FormLabel>
                                        <Grid item>
                                            <InputLabel>First Name: </InputLabel>
                                            <Field
                                                as={TextField}
                                                disabled={false}
                                                required
                                                id="outlined-required"
                                                label="Required"
                                                name="candidateFirstName"
                                                type="text"
                                                error={Boolean(props.touched.candidateFirstName && props.errors.candidateFirstName)}
                                                helperText={
                                                    <ErrorMessage name="email"/> &&
                                                    props.touched.candidateFirstName &&
                                                    props.errors.candidateFirstName
                                                }
                                                value={props.values.candidateFirstName}
                                                onBlur={props.handleBlur}
                                                onChange={props.handleChange}
                                            />
                                            {!Boolean(props.touched.candidateFirstName && props.errors.candidateFirstName) ? (
                                                <div style={{marginTop: "3px"}}></div>
                                            ) : null}
                                        </Grid>
                                        <br/>
                                        <Grid item>
                                            <InputLabel>Last Name:</InputLabel>
                                            <Field
                                                as={TextField}
                                                id="name-input-last"
                                                name="candidateLastName"
                                                type="text"
                                                value={props.values.candidateLastName}
                                                onBlur={props.handleBlur}
                                                onChange={props.handleChange}
                                            />
                                        </Grid>
                                        <br/>
                                        <Grid item>
                                            <InputLabel>Email:</InputLabel>
                                            <TextField
                                                id="email-input"
                                                name="candidateEmail"
                                                type="text"
                                                value={props.values.candidateEmail}
                                                onBlur={props.handleBlur}
                                                onChange={props.handleChange}
                                            />
                                        </Grid>
                                        <br/>
                                        <Grid item>
                                            <InputLabel>Phone Number:</InputLabel>
                                            <TextField
                                                id="phone-input"
                                                name="candidatePhoneNumber"
                                                type="text"
                                                value={props.values.candidatePhoneNumber}
                                                onChange={props.handleChange}
                                            />
                                        </Grid>
                                        <br/>
                                        <Grid item>
                                            {/*<InputLabel>Date:</InputLabel>*/}
                                            {/*<TextField*/}
                                            {/*  id="date-input"*/}
                                            {/*  name="date"*/}
                                            {/*  type="date"*/}
                                            {/*  value={formValues.date}*/}
                                            {/*  onChange={handleInputChange}*/}
                                            {/*/>*/}
                                        </Grid>
                                        <br/>

                                        <div>
                                            {questions &&
                                                questions.length &&
                                                questions.map((question, key) => (
                                                    <Grid item key={question.id}>
                                                        <Card sx={{maxWidth: 400}}>
                                                            <CardContent>
                                                                <Typography
                                                                    gutterBottom
                                                                    variant="h5"
                                                                    component="div"
                                                                >
                                                                    {question.questionBody}
                                                                </Typography>
                                                                {question.type === "Free_Text" && (
                                                                    <Box
                                                                        component="form"
                                                                        sx={{
                                                                            "& .MuiTextField-root": {
                                                                                m: 1,
                                                                                width: "40ch",
                                                                            },
                                                                        }}
                                                                        noValidate
                                                                        autoComplete="off"
                                                                    >
                                                                        <TextField
                                                                            id="filled-multiline-flexible"
                                                                            label="Write your answer below"
                                                                            value={value}
                                                                            name={question.id}
                                                                            onChange={props.handleChange}
                                                                            variant="filled"
                                                                        />
                                                                    </Box>
                                                                )}
                                                                {question.type === "Single_Choice" && (
                                                                    <TextField
                                                                        id="filled-select-answer"
                                                                        select
                                                                        label="Select"
                                                                        //value={currency}
                                                                        // Vespi: aici la value CRED ca trebuie sa faca legatura cu answer(gen sa fie answerBody)
                                                                        onChange={props.handleChange}
                                                                        variant="filled"
                                                                        fullWidth={true}
                                                                        name={question.id}
                                                                    >
                                                                        {question.possibleAnswer1 && (
                                                                            <MenuItem value={question.possibleAnswer1}>
                                                                                {/*Vespi: banuiesc ca e aceeasi treaba ca mai sus??? la fiecare MenuItem */}
                                                                                {question.possibleAnswer1}
                                                                            </MenuItem>
                                                                        )}
                                                                        {question.possibleAnswer2 && (
                                                                            <MenuItem value={question.possibleAnswer2}>
                                                                                {question.possibleAnswer2}
                                                                            </MenuItem>
                                                                        )}
                                                                        {question.possibleAnswer3 && (
                                                                            <MenuItem value={question.possibleAnswer3}>
                                                                                {question.possibleAnswer3}
                                                                            </MenuItem>
                                                                        )}
                                                                        {question.possibleAnswer4 && (
                                                                            <MenuItem value={question.possibleAnswer4}>
                                                                                {question.possibleAnswer4}
                                                                            </MenuItem>
                                                                        )}
                                                                    </TextField>
                                                                )}
                                                                {question.type === "Multiple_Choice" && (
                                                                    <Box onChange={props.handleChange}>
                                                                        <FormControlLabel
                                                                            label={question.possibleAnswer1}
                                                                            control={
                                                                                <Checkbox
                                                                                    checked={value}
                                                                                    onChange={props.handleChange}
                                                                                    name={question.id}
                                                                                    inputProps={{
                                                                                        possibleAnswer1:
                                                                                        question.possibleAnswer1,
                                                                                    }}
                                                                                    value={question.possibleAnswer1}
                                                                                />
                                                                            }
                                                                        />
                                                                        <FormControlLabel
                                                                            label={question.possibleAnswer2}
                                                                            control={
                                                                                <Checkbox
                                                                                    checked={value}
                                                                                    name={question.id}
                                                                                    onChange={props.handleChange}
                                                                                    inputProps={{
                                                                                        possibleAnswer2:
                                                                                        question.possibleAnswer2,
                                                                                    }}
                                                                                    value={question.possibleAnswer2}
                                                                                />
                                                                            }
                                                                        />
                                                                        <FormControlLabel
                                                                            label={question.possibleAnswer3}
                                                                            control={
                                                                                <Checkbox
                                                                                    checked={value}
                                                                                    name={question.id}
                                                                                    onChange={props.handleChange}
                                                                                    inputProps={{
                                                                                        possibleAnswer3:
                                                                                        question.possibleAnswer1,
                                                                                    }}
                                                                                    value={question.possibleAnswer1}
                                                                                />
                                                                            }
                                                                        />
                                                                        <FormControlLabel
                                                                            label={question.possibleAnswer1}
                                                                            control={
                                                                                <Checkbox
                                                                                    checked={value}
                                                                                    name={question.id}
                                                                                    onChange={props.handleChange}
                                                                                    inputProps={{
                                                                                        possibleAnswer1:
                                                                                        question.possibleAnswer1,
                                                                                    }}
                                                                                    value={question.possibleAnswer1}
                                                                                />
                                                                            }
                                                                        />
                                                                    </Box>
                                                                )}
                                                            </CardContent>
                                                        </Card>
                                                        <br/>
                                                    </Grid>
                                                ))}
                                        </div>

                                        <br/>
                                        <Button
                                            style={{
                                                borderRadius: 35,
                                                padding: "18px 36px",
                                                fontSize: "18px",
                                                color: "black",
                                                borderWidth: 4,
                                            }}
                                            variant="outlined"
                                            sx={{backgroundColor: "white", height: 40}}
                                            component="label"
                                        >
                                            Upload CV
                                            <input
                                                hidden
                                                accept=".pdf"
                                                multiple
                                                type="file"
                                                onChange={onFileChange}
                                            />
                                        </Button>
                                        <br/>
                                        <Button
                                            style={{
                                                borderRadius: 35,
                                                padding: "18px 36px",
                                                fontSize: "18px",
                                                color: "black",
                                                borderWidth: 4,
                                            }}
                                            variant="outlined"
                                            sx={{backgroundColor: "white", height: 40}}
                                            color="primary"
                                            type="submit"
                                            onClick={onSubmitForm}
                                        >
                                            Submit
                                        </Button>
                                    </Grid>
                                    <br/>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Container>{" "}
            </div>
            <br/>
            <div>
                <Box
                    m={1}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                >
                    <Button
                        style={{
                            borderRadius: 35,
                            padding: "18px 36px",
                            fontSize: "18px",
                            color: "black",
                            borderWidth: 4,
                        }}
                        variant="outlined"
                        sx={{backgroundColor: "white", height: 40}}
                        onClick={() => navigate(-1)}
                    >
                        Go back
                    </Button>
                </Box>
            </div>
            <Footer/>
        </div>
    );
}

export default AddRecommendation;
