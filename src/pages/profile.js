import * as React from "react";
import Box from "@mui/material/Box";

import Footer from "./footer";
import Header from "./header";
import ParticlesBackground from "../components/ParticlesBackground";
//const settings = ["Profile", "Logout"];
const Profile = () => {
  return (
    <div>
      <Header />
      <br />
      <ParticlesBackground />
      <div></div>
      <Box sx={{ mt: 30, mb: 4 }}>
        <Footer />
      </Box>
    </div>
  );
};
export default Profile;
