import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import ParticlesBackground from "../components/ParticlesBackground";
import Footer from "./footer";
import Box from "@mui/material/Box";
const theme = createTheme();

export default function SignOut() {
  let navigate = useNavigate();
  const handleBackToLogin = () => {
    let path = "/login";
    navigate(path);
  };

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
                mt:15
            }}
        >
            <Box sx={{bgcolor: "#ffffff", borderRadius: 10}}>

        <Typography component="h1" variant="h5" color="black" sx={{ mb: 5 }}>
          <h2 align={"center"}>Welcome to CV Resume Platform! </h2>
            <br/>Recommend your friends, review
          recommendation, gestionate platform and so much more!
        </Typography>
        <br />
        <Button
          style={{
            borderRadius: 35,
            padding: "18px 36px",
            fontSize: "18px",
            color: "blue",
            borderWidth: 4,
            position: "relative",
          }}
          type="submit"
          fullWidth
          variant="outlined"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleBackToLogin}
        >
          Login
        </Button>
            </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
