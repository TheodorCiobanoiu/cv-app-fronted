import React, {useState} from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {useNavigate} from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import ParticlesBackground from "../components/ParticlesBackground";
import AuthService from "../services/auth.service";
import authHeader from "../services/auth-header";
import axios from "axios";
//const settings = ["Profile", "Logout"];
//const today = Date.getFullYear() + "-" + Date.getMonth() + "-" + Date.getDate();
const defaultValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
};

const AddAccount = () => {
    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        //e.preventDefault();
        let apiResponse;
        AuthService.register(
            formValues.firstName,
            formValues.lastName,
            formValues.username,
            formValues.phone,
            formValues.email,
            formValues.password
        )
            .then((response) => {
                apiResponse = response.data;
            })
            .catch((error) => console.log(error));
        console.log("After register request server responded with: ");
        console.log(apiResponse);
        alert("Data Inserted");
        //console.log(formValues);
    };

    const navigate = useNavigate();

    return (
        <div>
            <Header/>
            {/*<ParticlesBackground/>*/}
            <br/>
            <div>
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
                    <Box sx={{bgcolor: "#ffffff", borderRadius: 10}}>
                        <br/>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <Grid
                                container
                                alignItems="center"
                                justify="center"
                                direction="column"
                            >
                                <Grid item>
                                    <TextField
                                        id="firstName"
                                        name="firstName"
                                        label="First Name: "
                                        type="text"
                                        value={formValues.firstName}
                                        onChange={(e) => handleInputChange(e)}
                                        required
                                    />
                                </Grid>
                                <br/>
                                <Grid item>
                                    <TextField
                                        id="lastName"
                                        name="lastName"
                                        label="Last name: "
                                        type="text"
                                        value={formValues.lastName}
                                        onChange={(e) => handleInputChange(e)}
                                        required
                                    />
                                </Grid>
                                <br/>
                                <Grid item>
                                    <TextField
                                        id="username"
                                        name="username"
                                        label="Username: "
                                        type="text"
                                        value={formValues.username}
                                        onChange={(e) => handleInputChange(e)}
                                        required
                                    />
                                </Grid>
                                <br/>
                                <Grid item>
                                    <TextField
                                        id="email"
                                        name="email"
                                        label="Email"
                                        type="email"
                                        value={formValues.email}
                                        onChange={(e) => handleInputChange(e)}
                                        required
                                    />
                                </Grid>
                                <br/>
                                <Grid item>
                                    <TextField
                                        id="phone"
                                        name="phone"
                                        label="Phone"
                                        type="text"
                                        value={formValues.phone}
                                        onChange={(e) => handleInputChange(e)}
                                        required
                                    />
                                </Grid>
                                <br/>
                                <Grid item>
                                    <TextField
                                        id="password"
                                        required
                                        label="Password: "
                                        name="password"
                                        type="password"
                                        value={formValues.password}
                                        onChange={(e) => handleInputChange(e)}
                                    />
                                </Grid>
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
                                    type="submit"
                                    href="/admin"
                                    onClick={handleSubmit}
                                >
                                    Create
                                </Button>
                            </Grid>
                            <br/>
                        </form>
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
            <Box sx={{mt: 13, mb: 0}}>
                <Footer/>
            </Box>
        </div>
    );
};
export default AddAccount;
