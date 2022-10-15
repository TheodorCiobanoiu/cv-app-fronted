import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import ParticlesBackground from "../components/ParticlesBackground";
import Footer from "./footer";

const theme = createTheme();

export default function SignOut() {
  let navigate = useNavigate();
  const handleBackToMain = () => {
    let path = "/home";
    navigate(path);
  };

  return (
      <ThemeProvider theme={theme}>
        <ParticlesBackground />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Typography component="h3" variant="h4" color="white">
            Successfully Logged out!
          </Typography>
          <Button
              style={{
                weight: 200,
                borderRadius: 35,
                padding: "18px 32px",
                fontSize: "18px",
                color: "white",
                borderWidth: 4,
              }}
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleBackToMain}
          >
            Go back to our main page.
          </Button>
        </Container>
        <Footer />
      </ThemeProvider>
  );
}