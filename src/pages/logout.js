import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
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
    const handleBackToMain = () =>{
        let path = "/";
        navigate(path);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                    <Typography component="h1" variant="h5">
                        Successfully Logged out!
                    </Typography>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleBackToMain}
                        >
                           Go back to our main page.
                        </Button>

                <Copyright sx={{ mt: 12, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}