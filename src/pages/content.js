import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Footer from "./footer";
import Header from "./header";
//const settings = ["Profile", "Logout"];
const Content = () => {

  return (
    <div>
      <Header />
      <br />
      <div>
        <Box sx={{ width: "30%", margin: "auto", color: "#b34454"}}>
          <Stack spacing={2}>
            <Button style={{
                borderRadius: 35,
                backgroundColor: "#7f0e2c",
                padding: "18px 36px",
                fontSize: "18px"
            }} variant="contained" href="/completeRecommendation">
              Add recommendation
            </Button>
            <Button variant="contained" href="/yourRecommendation">
              See status for your recommendations
            </Button>
            <Button variant="contained" href="/viewRecommendations">
              See all recommendations (HR)
            </Button>
            <Button variant="contained" href="/admin">
              Admin control
            </Button>
          </Stack>
        </Box>
      </div>
      <Box sx={{ mt: 30, mb: 4 }}>
        <Footer />
      </Box>
    </div>
  );
};
export default Content;
