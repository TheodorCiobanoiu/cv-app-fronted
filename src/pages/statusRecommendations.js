import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import ParticlesBackground from "../components/ParticlesBackground";
import Header from "./header";
import { Label } from "@mui/icons-material";

const settings = ["Profile", "Logout"];

function createData(name, status) {
  return { name, status };
}

const rows = [
  createData("Mihai", "Acceptat"),
  createData("Cristi", "Picat"),
  createData("Maria", "In asteptare"),
  createData("Tudor", "Acceptat"),
];

const StatusRecommendations = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <ParticlesBackground />
      <br />

      <div>
        <Typography
          component="h4"
          variant="h4"
          sx={{
            pl: 50,
            fontWeight: "bold",
            background: "#0000",
            color: "white",
          }}
        >
          Your Recommendations
        </Typography>
      </div>
      <Box sx={{ mt: 2, ml: 45 }}>
        <div>
          <FormControl>
            {/*  <InputLabel id="demo-simple-select-autowidth-label">
              Filtreaza
            </InputLabel> */}
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              autoWidth
              label="filtreaza"
            >
              <MenuItem value={10}>In functie de status</MenuItem>
              <MenuItem value={21}>Dupa nume</MenuItem>
              <MenuItem value={22}>Dupa data</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <Box
            mt={4}
            sx={{
              width: 300,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 300 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }} align="center">
                      Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </div>
      </Box>

      <br />

      <div>
        <Box
          m={1}
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
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
            sx={{ height: 40 }}
            onClick={() => navigate(-1)}
          >
            Go back
          </Button>
        </Box>
      </div>
      <Box sx={{ mt: 10, mb: 4 }}>
        <Footer />
      </Box>
    </div>
  );
};
export default StatusRecommendations;
