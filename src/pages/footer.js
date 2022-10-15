import * as React from "react";
import Typography from "@mui/material/Typography";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="white"
      align="center"
      position="fixed"
      bottom="0"
      width="100%"
      bgcolor="black"
      {...props}
    >
      {"Copyright © "}
      CV/Resume Platform &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <footer>
      <Copyright />
    </footer>
  );
}
