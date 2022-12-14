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
  const handleBackToLogin = () => {
    let path = "/login";
    navigate(path);
  };

  return (
    <ThemeProvider theme={theme}>
      <ParticlesBackground />

      <Container component="main" maxWidth="xs" sx={{ mt: 25 }}>
        <CssBaseline />

        <Typography component="h1" variant="h5" color="white" sx={{ mb: 5 }}>
          Hello, our site is cool trust me
        </Typography>
        <br />
        <Button
          style={{
            borderRadius: 35,
            padding: "18px 36px",
            fontSize: "18px",
            color: "white",
            borderWidth: 4,
          }}
          type="submit"
          fullWidth
          variant="outlined"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleBackToLogin}
        >
          Login
        </Button>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
