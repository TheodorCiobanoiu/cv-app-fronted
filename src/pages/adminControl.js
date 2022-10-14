import "./login.css";
import Button from "@mui/material/Button";
import React from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Stack from "@mui/material/Stack";
import ParticlesBackground from "../components/ParticlesBackground";
//const settings = ["Profile", "Logout"];
//const today = Date.getFullYear() + "-" + Date.getMonth() + "-" + Date.getDate();
/*const defaultValues = {
  name: "",
  date: "10/04/2022",
  gender: "",
  os: "",
  favoriteNumber: 0,
};
*/
export default function Login() {
  /* const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };*/

  //const [formValues, setFormValues] = useState(defaultValues);

  /*const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSliderChange = (name) => (e, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };*/

  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <ParticlesBackground />
      <br />
      <div>
        <Box sx={{ width: "30%", margin: "auto" }}>
          <Stack spacing={2}>
            <Button variant="contained" href="/addAccount">
              Register account
            </Button>
            <Button variant="contained" href="/deleteAccount">
              Delete account
            </Button>
            <Button variant="contained" href="/addQuestion">
              Add questions
            </Button>
          </Stack>
        </Box>
      </div>
      <br />
      <br />
      <div>
        <Box
          m={1}
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ height: 40 }}
            onClick={() => navigate(-1)}
          >
            Go back
          </Button>
        </Box>
      </div>
      <Box sx={{ mt: 35, mb: 4 }}>
        <Footer />
      </Box>
    </div>
  );
}
