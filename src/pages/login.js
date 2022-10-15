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
import {createTheme, ThemeProvider} from "@mui/material/styles";

import {useForm} from "react-hook-form";
import {Component, useEffect, useState} from "react";
import AuthService from "../services/auth.service";
import {withRouter} from "../common/with-router";


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

class Login extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    console.log({
      username: this.state.username,
      password: this.state.password
    });
    this.setState({
      message: "",
      loading: true
    });

    //Nu stiu daca e necesara asta, daca pica ceva se poate scoate
    // this.form.validateAll();

    AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.router.navigate("/content");
          window.location.reload();
        },
        error => {
          const responseMessage = (
                  error.response &&
                  error.response.data &&
                  error.response.data.message) ||
              error.message ||
              error.toString();

          this.setState({
            loading: false,
            message: responseMessage
          });
        }
    )


  };

  render() {
    return (

        <ThemeProvider theme={
          theme
        }

        >
          <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
            >
              <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
                <LockOutlinedIcon/>
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                  component="form"
                  onSubmit={this.handleSubmit}
                  noValidate
                  sx={{mt: 1}}
              >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={this.onChangeUsername}
                />
                <TextField
                    input="passwordField"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.onChangePassword}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                    onClick={this.handleSubmit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{mt: 12, mb: 4}}/>
          </Container>
        </ThemeProvider>
    );
  }
}
export default withRouter(Login);