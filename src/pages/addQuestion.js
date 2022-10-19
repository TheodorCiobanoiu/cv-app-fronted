import React, { Component, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Footer from "./footer";
import Header from "./header";
import ParticlesBackground from "../components/ParticlesBackground";
import authHeader from "../services/auth-header";
import QuestionService from "../services/question.service";
import FormLabel from "@material-ui/core/FormLabel";
import { useNavigate } from "react-router-dom";

export default class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      type: null,
      questionBody: null,
      possibleAnswer1: null,
      possibleAnswer2: null,
      possibleAnswer3: null,
      possibleAnswer4: null,
      question: [],
    };
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const url = "http/localhost:8082/question/add";
    console.log({
      type: this.state.type,
      questionBody: this.state.questionBody,
      possibleAnswer1: this.state.possibleAnswer1,
      possibleAnswer2: this.state.possibleAnswer2,
      possibleAnswer3: this.state.possibleAnswer3,
      possibleAnswer4: this.state.possibleAnswer4,
    });
    this.setState({
      message: "",
      loading: true,
    });
    QuestionService.addQuestion(
      this.state.type,
      this.state.questionBody,
      this.state.possibleAnswer1,
      this.state.possibleAnswer2,
      this.state.possibleAnswer3,
      this.state.possibleAnswer4
    ).then(
      () => {
        this.props.router.navigate("/content");
        window.location.reload();
      },
      (error) => {
        const responseMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: responseMessage,
        });
      }
    );
  }

  render() {
    return (
      <div>
        <Header />
        <br />
        <ParticlesBackground />
        <div className="container">
          <Container
            maxWidth="sm"
            fixed
            sx={{
              width: "90%",
              color: "white",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              position: "relative",
              borderRadius: 10,
            }}
          >
            <Box sx={{ bgcolor: "#ffffff", borderRadius: 10 }}>
              <FormLabel></FormLabel>
              <br />
              <form onSubmit={this.handleSubmit}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  direction="column"
                >
                  <Grid item>
                    <TextField
                      id="question-input"
                      name="type"
                      label="Type(0:FT,1:SC,2:MC): "
                      type="text"
                      value={this.type}
                      onChange={this.onInputChange}
                      required
                    />
                  </Grid>
                  <br />
                  <Grid item>
                    <TextField
                      id="type-input"
                      name="questionBody"
                      label="Question: "
                      type="text"
                      value={this.questionBody}
                      onChange={this.onInputChange}
                      required
                    />
                  </Grid>
                  <br />
                  <Grid item>
                    <TextField
                      id="answer-input"
                      name="possibleAnswer1"
                      label="Possible answer: "
                      type="text"
                      value={this.possibleAnswer1}
                      onChange={this.onInputChange}
                    />
                  </Grid>
                  <br />
                  <Grid item>
                    <TextField
                      id="answer-input"
                      name="possibleAnswer2"
                      label="Possible answer: "
                      type="text"
                      value={this.possibleAnswer2}
                      onChange={this.onInputChange}
                    />
                  </Grid>
                  <br />
                  <Grid item>
                    <TextField
                      id="answer-input"
                      name="possibleAnswer3"
                      label="Possible answer: "
                      type="text"
                      value={this.possibleAnswer3}
                      onChange={this.onInputChange}
                    />
                  </Grid>
                  <br />
                  <Grid item>
                    <TextField
                      id="answer-input"
                      name="possibleAnswer4"
                      label="Possible answer: "
                      type="text"
                      value={this.possibleAnswer4}
                      onChange={this.onInputChange}
                    />
                  </Grid>
                  <br />
                  <Button
                    style={{
                      borderRadius: 35,
                      padding: "18px 36px",
                      fontSize: "18px",
                      color: "black",
                      borderWidth: 4,
                    }}
                    variant="outlined"
                    sx={{ backgroundColor: "white", height: 40 }}
                    type="submit"
                  >
                    Add
                  </Button>
                </Grid>
                <br />
              </form>
            </Box>
          </Container>
        </div>
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
              sx={{ backgroundColor: "white", height: 40 }}
              //onClick={}
            >
              Go back
            </Button>
          </Box>
        </div>
        <Box sx={{ mt: 6, mb: 0 }}>
          <Footer />
        </Box>
      </div>
    );
  }
}
