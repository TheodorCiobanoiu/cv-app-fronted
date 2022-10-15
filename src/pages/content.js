import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Footer from "./footer";
import Header from "./header";
import ParticlesBackground from "../components/ParticlesBackground";
const role = "admin";
const Content = () => {
  return (
    <div>
      <Header />
      <br />
      <ParticlesBackground />
      <div>
        <Box sx={{ width: "30%", margin: "auto", color: "#b34454" }}>
          <Stack spacing={4} sx={{ mt: 4 }}>
            <Button
              style={{
                borderRadius: 35,
                padding: "18px 36px",
                fontSize: "18px",
                color: "white",
                borderWidth: 4,
              }}
              variant="outlined"
              href="/completeRecommendation"
            >
              Add recommendation
            </Button>
            <Button
              style={{
                weight: 200,
                borderRadius: 35,
                padding: "18px 32px",
                fontSize: "18px",
                color: "white",
                borderWidth: 4,
              }}
              variant="outlined"
              href="/yourRecommendation"
            >
              See status for recommendations
            </Button>
            {(role === "hr" || role === "admin") && (
              <Button
                style={{
                  borderRadius: 35,
                  padding: "18px 36px",
                  fontSize: "18px",
                  color: "white",
                  borderWidth: 4,
                }}
                variant="outlined"
                href="/viewRecommendations"
              >
                See all recommendations
              </Button>
            )}
            {role === "admin" && (
              <Button
                style={{
                  borderRadius: 35,
                  padding: "18px 36px",
                  fontSize: "18px",
                  color: "white",
                  borderWidth: 4,
                }}
                variant="outlined"
                href="/admin"
              >
                Admin control
              </Button>
            )}
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
