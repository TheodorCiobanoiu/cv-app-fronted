import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@material-ui/core/Grid";

import { InputLabel } from "@material-ui/core";
import { DataGrid } from "@mui/x-data-grid";

export default function ModalRecommendation(props) {
  let id = props.recommendation.userId;
  let candidateFirstName = props.recommendation.candidateFirstName;
  let candidateLastName = props.recommendation.candidateLastName;
  let candidateEmail = props.recommendation.candidateEmail;
  let candidatePhoneNumber = props.recommendation.candidatePhoneNumber;
  let progressStatus = props.recommendation.progressStatus;

  /*   const [answers, setAnswers] = useState("");

  const getData = () => {
    RecommendationService.getRecommendationsById(id)
      .then((response) => {
        const data = response.data;
        console.log("Inside getData(): allData variable: ");
        console.log(data);
        setAnswers(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
    console.log("Recommendation objects:");
    console.log(answers);
  }, []); */

  return (
    /*     <div>
      <InputLabel>First Name:</InputLabel>
      <InputLabel>{nume}</InputLabel>
    </div> */
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3} />
        <Grid item xs={3}>
          <InputLabel>First Name: </InputLabel>
        </Grid>
        <Grid item xs={3}>
          <InputLabel>{candidateFirstName} </InputLabel>
        </Grid>
        <Grid item xs={3} />
        <br />
        <Grid item xs={3} />
        <Grid item xs={3}>
          <InputLabel>Last Name: </InputLabel>
        </Grid>
        <Grid item xs={3}>
          <InputLabel>{candidateLastName} </InputLabel>
        </Grid>
        <Grid item xs={3} />
        <br />
        <Grid item xs={3} />
        <Grid item xs={3}>
          <InputLabel>Email: </InputLabel>
        </Grid>
        <Grid item xs={3}>
          <InputLabel>{candidateEmail} </InputLabel>
        </Grid>
        <Grid item xs={3} />
        <br />
        <Grid item xs={3} />
        <Grid item xs={3}>
          <InputLabel>Phone Number: </InputLabel>
        </Grid>
        <Grid item xs={3}>
          <InputLabel>{candidatePhoneNumber} </InputLabel>
        </Grid>
        <Grid item xs={3} />
        <br />
        <Grid item xs={3} />
        <Grid item xs={3}>
          <InputLabel>Status: </InputLabel>
        </Grid>
        <Grid item xs={3}>
          <InputLabel>{progressStatus} </InputLabel>
        </Grid>
        <Grid item xs={3} />
        <br />
        <br />

        <Grid item xs={4} />
        <Grid item xs={4}>
          <Button
            style={{
              borderRadius: 35,
              padding: "18px 36px",
              fontSize: "18px",
              color: "black",
              borderWidth: 4,
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="outlined"
            sx={{ backgroundColor: "white", height: 40 }}
            component="label"
          >
            Download CV
          </Button>
        </Grid>
        <Grid item xs={4} />
        <br />
        <br />
        <br />

        <Grid item xs={4} />
        <Grid item xs={4}>
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
            color="primary"
            type="submit"
          >
            Set status
          </Button>
        </Grid>
        <Grid item xs={4} />
        <br />
      </Grid>

      <br />

      <br />
    </div>
  );
}
