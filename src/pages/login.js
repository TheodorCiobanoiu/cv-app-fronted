import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
/* import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid"; */
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./footer";
import ParticlesBackground from "../components/ParticlesBackground";

const theme = createTheme();

export default function LogIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get("username"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <ParticlesBackground />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, mt: 8, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="white">
            Log in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 6 }}
          >
            <Typography component="h7" variant="h7" color="white">
              Username:
            </Typography>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              variant="outlined"
              required
              fullWidth
            />
            <br />
            <br />
            <Typography component="h7" variant="h7" color="white">
              Password:
            </Typography>
            <br />
            <input
              required
              fullWidth
              type="password"
              id="password"
              name="password"
              variant="outlined"
            />
            <br />
            <br />
            {/*   <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-basic"
              label="Username"
              name="username"
              autoComplete="username"
              variant="outlined"
              bgcolor="white"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 1, mb: 2 }}
              onClick={handleSubmit}
            >
              Log In
            </Button>
            {/*    <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
