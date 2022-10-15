import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { InputLabel } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import ShowQuestions from "./components/showQuestion";
import ParticlesBackground from "../components/ParticlesBackground";
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

  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <br />
      <ParticlesBackground />
      <div>
        {/* <Container maxWidth="sm" fixed>
          <Box sx={{ bgcolor: "#cfe8fc" }}>
            <form onSubmit={handleSubmit}>
              <br />
              <Typography component="h2" variant="h5" sx={{ ml: 18 }}>
                Recommendation Form
              </Typography>
              <br />
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                direction="column"
              >
                <Grid item>
                  <InputLabel>First Name:</InputLabel>
                  <TextField
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formValues.firstName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item>
                  <InputLabel>Last Name:</InputLabel>
                  <TextField
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formValues.lastName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item>
                  <InputLabel>Email:</InputLabel>
                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item>
                  <InputLabel>Phone number:</InputLabel>
                  <TextField
                    id="phone"
                    name="phone"
                    type="text"
                    value={formValues.phone}
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
                <Grid item>
                  <Card sx={{ maxWidth: 400 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Titlu
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
                <Grid item>
                  <Card sx={{ maxWidth: 400 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <ShowQuestions />
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
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={() => navigate(-1)}
                >
                  Submit
                </Button>
              </Grid>
              <br />
            </form>
          </Box>
        </Container>{" "} */}
        <Container maxWidth="sm" fixed>
          <Box sx={{ bgcolor: "white", borderRadius: 15 }}>
            <form onSubmit={handleSubmit}>
              <br />
              <Typography component="h2" variant="h5" sx={{ ml: 18 }}>
                Recommendation Form
              </Typography>
              <br />
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                direction="column"
              >
                <Grid item>
                  <InputLabel>First Name:</InputLabel>
                  <TextField
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formValues.firstName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item>
                  <InputLabel>Last Name:</InputLabel>
                  <TextField
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formValues.lastName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item>
                  <InputLabel>Email:</InputLabel>
                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item>
                  <InputLabel>Phone number:</InputLabel>
                  <TextField
                    id="phone"
                    name="phone"
                    type="text"
                    value={formValues.phone}
                    onChange={handleInputChange}
                  />
                </Grid>
                <br />
                {/* <Grid item>
                  <InputLabel>Date:</InputLabel>
                  <TextField
                    id="date-input"
                    name="date"
                    type="date"
                    value={formValues.date}
                    onChange={handleInputChange}
                  />
                </Grid> */}
                <br />
                <Grid item>
                  <Card sx={{ maxWidth: 400 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Titlu
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
                <Grid item>
                  <Card sx={{ maxWidth: 400 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <ShowQuestions />
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
                <Button
                  style={{
                    borderRadius: 10,
                    fontSize: "14px",
                    color: "black",
                    borderWidth: 4,
                  }}
                  variant="outlined"
                  component="label"
                >
                  Upload CV
                  <input hidden accept=".pdf" multiple type="file" />
                </Button>
                <br />
                <Button
                  style={{
                    borderRadius: 10,
                    fontSize: "14px",
                    color: "black",
                    borderWidth: 4,
                  }}
                  variant="outlined"
                  color="primary"
                  type="submit"
                  onClick={() => navigate(-1)}
                >
                  Submit
                </Button>
              </Grid>
              <br />
            </form>
          </Box>
        </Container>{" "}
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
          sx={{ height: 40 }}
          onClick={() => navigate(-1)}
        >
          Go back
        </Button>
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
