import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import ParticlesBackground from "../components/ParticlesBackground";
import Footer from "./footer";
import { useEffect } from "react";
import AuthService from "../services/auth.service";
import Box from "@mui/material/Box";

const theme = createTheme();

export default function SignOut() {
  let navigate = useNavigate();
  const handleBackToMain = () => {
    let path = "/";
    navigate(path);
  };

  useEffect(() => {
    AuthService.logout();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ParticlesBackground />
        <Container
            maxWidth="sm"
            fixed
            sx={{
                width: "90%",
                color: "white",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                position: "relative",
                mt:20
            }}
        >
            <Box sx={{bgcolor: "#ffffff", borderRadius: 10}}>

            <Typography component="h3" variant="h3" color="black" align={"center"}>
          Successfully Logged out!
        </Typography>
        <Button
          style={{
            weight: 200,
            borderRadius: 35,
            padding: "18px 32px",
            fontSize: "18px",
            color: "blue",
            borderWidth: 4,
          }}
          type="submit"
          fullWidth
          variant="outlined"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleBackToMain}
        >
          Go back to our main page
        </Button>
            </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
