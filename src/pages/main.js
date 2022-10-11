import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {useNavigate} from "react-router-dom";


function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            Your Website &nbsp;
            {new Date().getFullYear()}
        </Typography>
    );
}

const theme = createTheme();

export default function SignOut() {

    let navigate = useNavigate();
    const handleBackToLogin = () =>{
        let path = "/login";
        navigate(path);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Typography component="h1" variant="h5">
                    Hello, our site is cool trust me
                </Typography>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleBackToLogin}
                >
                    Login
                </Button>

                <Copyright sx={{ mt: 12, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}