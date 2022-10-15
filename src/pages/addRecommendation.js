import React, { useState } from "react";
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
import ShowQuestions from "./components/showQuestion";
import ParticlesBackground from "../components/ParticlesBackground";
import {default as questions} from './QUESTIONS.json'
import {Divider, List, ListItem} from "@mui/material";
//const today = Date.getFullYear() + "-" + Date.getMonth() + "-" + Date.getDate();
const defaultValues = {
  name: "",
  date: "10/04/2022",
  gender: "",
  os: "",
  favoriteNumber: 0,
};

const AddRecommendation = () => {
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

  const [value, setValue] = React.useState('Meoooow');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
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
                  {questions.map((question,key) =>
                      {
                        return(
                            <Grid item>
                              <Card sx={{ maxWidth: 400}} >
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {question.question_body}
                                </Typography>
                                {(question.type === 1 ) &&
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
                                {(question.type === 2 ) &&
                                    <Typography> bow </Typography>}
                                {(question.type === 3 ) &&
                                    <Typography> pock </Typography>}
                              </CardContent>
                              </Card>
                              <br />
                            </Grid>
                        )
                      }
                  )}
                </div>

                <Grid item>
                  <Card sx={{ maxWidth: 400 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Q2
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>



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
