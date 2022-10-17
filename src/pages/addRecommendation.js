import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import { InputLabel } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import ParticlesBackground from "../components/ParticlesBackground";
import axios from "axios";
import authHeader from "../services/auth-header";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";


function AddRecommendation(){const defaultValues = {
  name: "",
  date: "10/04/2022",
  gender: "",
  os: "",
  favoriteNumber: 0,
};
  const [questions, setQuestions] = useState(null);

  const fetchData = () => {
    return axios.get("http://localhost:8082/question/all", {headers: authHeader()})
        .then((response) => setQuestions(response.data));
  }

  useEffect(() => {
    fetchData();
  },[])

  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  /*const handleSliderChange = (name) => (e, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };*/
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  const [value, setValue] = React.useState();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setValue({[event.target.name]: event.target.value})
  };
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <br />
      <ParticlesBackground />
      <div>
        <Container maxWidth="sm" fixed>
          <Box sx={{ bgcolor: "#403bbc", opacity: 0.5}}>
            <form onSubmit={handleSubmit}>
              <FormLabel>Recommendation Form</FormLabel>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                direction="column"
              >
                <Grid item>
                  <InputLabel>Name:</InputLabel>
                  <TextField
                    id="name-input"
                    name="name"
                    type="text"
                    value={formValues.name}
                    onChange={handleInputChange}
                  />
                </Grid>
                <br />
                <Grid item>
                  <InputLabel>Date:</InputLabel>
                  <TextField
                    id="date-input"
                    name="date"
                    type="date"
                    value={formValues.date}
                    onChange={handleInputChange}
                  />
                </Grid>
                <br />

                <div>
                  {questions && questions.length && questions.map((question, key) => (
                            <Grid item key={question.id}>
                              <Card sx={{ maxWidth: 400}} >
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {question.questionBody}{question.type}
                                </Typography>
                                {(question.type === "Free_Text" ) &&
                                    <Box
                                        component="form"
                                        sx={{
                                          '& .MuiTextField-root': { m: 1, width: '40ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            id="filled-multiline-flexible"
                                            label="Write your answer below"
                                            value={value}
                                            onChange={handleChange}
                                            variant="filled"
                                        />
                                    </Box>}
                                {(question.type === "Single_Choice" ) &&
                                    <TextField
                                        id="filled-select-answer"
                                        select
                                        label="Select"
                                        //value={currency}
                                        // Vespi: aici la value CRED ca trebuie sa faca legatura cu answer(gen sa fie answerBody)
                                        onChange={handleChange}
                                        variant="filled"
                                    >
                                      {question.possibleAnswer1 &&
                                      <MenuItem value={question.possibleAnswer1}>
                                        {/*Vespi: banuiesc ca e aceeasi treaba ca mai sus??? la fiecare MenuItem */}
                                            {question.possibleAnswer1}
                                      </MenuItem>}
                                      {question.possibleAnswer2 &&
                                          <MenuItem value={question.possibleAnswer2}>
                                            {question.possibleAnswer2}
                                          </MenuItem>
                                      }
                                      {question.possibleAnswer3 &&
                                          <MenuItem value={question.possibleAnswer3}>
                                            {question.possibleAnswer3}
                                          </MenuItem>
                                      }
                                      {question.possibleAnswer4 &&
                                          <MenuItem value={question.possibleAnswer4}>
                                            {question.possibleAnswer4}
                                          </MenuItem>
                                      }
                                    </TextField>}
                                {(question.type === "Multiple_Choice" ) &&
                                    <Box>
                                    <FormControlLabel
                                  label= {question.possibleAnswer1}
                                  control={
                                  <Checkbox
                                  checked={value}
                                   onChange={handleChange}
                                  inputProps={{ 'possibleAnswer1': question.possibleAnswer1 }}
                                  value={question.possibleAnswer1}
                                  />}
                                  />
                                  <FormControlLabel
                                  label= {question.possibleAnswer2}
                                  control={
                                  <Checkbox
                                      checked={value}
                                      onChange={handleChange}
                                  inputProps={{ 'possibleAnswer2': question.possibleAnswer2 }}
                                  value={question.possibleAnswer2}
                                  />}
                                  />
                                  <FormControlLabel
                                  label= {question.possibleAnswer3}
                                  control={
                                  <Checkbox
                                      checked={value}
                                      onChange={handleChange}
                                  inputProps={{ 'possibleAnswer3': question.possibleAnswer1 }}
                                  value={question.possibleAnswer1}
                                  />}
                                  />
                                  <FormControlLabel
                                  label= {question.possibleAnswer1}
                                  control={
                                  <Checkbox
                                  checked={value}
                                  onChange={handleChange}
                                  inputProps={{ 'possibleAnswer1': question.possibleAnswer1 }}
                                  value={question.possibleAnswer1}
                                  />}
                                  /></Box>}
                              </CardContent>
                              </Card>
                              <br />
                            </Grid>
                        ))}
                </div>



                <br />
                <Button variant="contained" component="label">
                  Upload CV
                  <input hidden accept=".pdf" multiple type="file" />
                </Button>
                <br />
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Grid>
              <br />
            </form>
          </Box>
        </Container>{" "}
      </div>
      <br />
      <div>
        <Box
          m={1}
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ height: 40 }}
            onClick={() => navigate(-1)}
          >
            Go back
          </Button>
        </Box>
      </div>
      <Footer />
    </div>
  );
};
export default AddRecommendation;
