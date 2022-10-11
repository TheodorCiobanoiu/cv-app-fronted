import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import Slider from "@material-ui/core/Slider";
import { InputLabel } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
//const today = Date.getFullYear() + "-" + Date.getMonth() + "-" + Date.getDate();
const defaultValues = {
    name: "",
    date: "10/04/2022",
    gender: "",
    os: "",
    favoriteNumber: 0,
};

const AddQuestion = () => {

    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleSliderChange = (name) => (e, value) => {
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };

    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <br />
            <div>
                <Container maxWidth="sm" fixed>
                    <Box sx={{ bgcolor: "#cfe8fc" }}>
                        <br />
                        <form onSubmit={handleSubmit}>
                            <Grid
                                container
                                alignItems="center"
                                justify="center"
                                direction="column"
                            >
                                <Grid item>
                                    <TextField
                                        id="question-input"
                                        name="intrebare"
                                        label="Question: "
                                        type="text"
                                        value={formValues.intrebare}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Grid>
                                <br/>
                                <Grid item>
                                    <TextField
                                        id="type-input"
                                        name="tip"
                                        label="Type: "
                                        type="text"
                                        value={formValues.tip}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Grid>
                                <br />
                                <Grid item>
                                    <TextField
                                        id="answer-input"
                                        name="answer1"
                                        label="Possible answer: "
                                        type="text"
                                        value={formValues.username}
                                        onChange={handleInputChange}

                                    />
                                </Grid>
                                <br />
                                <Grid item>
                                    <TextField
                                        id="answer-input"
                                        name="answer1"
                                        label="Possible answer: "
                                        type="text"
                                        value={formValues.username}
                                        onChange={handleInputChange}

                                    />
                                </Grid>
                                <br />
                                <Grid item>
                                    <TextField
                                        id="answer-input"
                                        name="answer1"
                                        label="Possible answer: "
                                        type="text"
                                        value={formValues.username}
                                        onChange={handleInputChange}

                                    />
                                </Grid>
                                <br />
                                <Grid item>
                                    <TextField
                                        id="answer-input"
                                        name="answer1"
                                        label="Possible answer: "
                                        type="text"
                                        value={formValues.username}
                                        onChange={handleInputChange}

                                    />
                                </Grid>
                                <br />
                                <Button variant="contained" color="primary" type="submit">
                                    Add
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
export default AddQuestion;