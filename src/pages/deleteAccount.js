import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import ParticlesBackground from "../components/ParticlesBackground";
//const settings = ["Profile", "Logout"];
//const today = Date.getFullYear() + "-" + Date.getMonth() + "-" + Date.getDate();
const defaultValues = {
  name: "",
  date: "10/04/2022",
  gender: "",
  os: "",
  favoriteNumber: 0,
};

const DeleteAccount = () => {
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

  const navigate = useNavigate();

  return (
      <div>
        <Header />
        <br />
        <ParticlesBackground />
        <div>
          <Container maxWidth="sm" fixed>
            <Box sx={{ bgcolor: "#cfe8fc", borderRadius: 15 }}>
              <br />
              <form onSubmit={handleSubmit}>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                >
                  <Grid item>
                    <TextField
                        id="username"
                        name="username"
                        label="Username: "
                        type="text"
                        value={formValues.username}
                        onChange={handleInputChange}
                        required
                    />
                  </Grid>
                  <br />
                  <Grid item>
                    <TextField
                        id="password"
                        label="Admin Password: "
                        name="password"
                        type="password"
                        value={formValues.username}
                        onChange={handleInputChange}
                        required
                    />
                  </Grid>
                  <br />

                  <Button variant="outlined" color="primary" type="submit">
                    Delete
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
                style={{
                  weight: 200,
                  borderRadius: 35,
                  padding: "18px 32px",
                  fontSize: "18px",
                  color: "white",
                  borderWidth: 4,
                }}
                variant="outlined"
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
export default DeleteAccount;