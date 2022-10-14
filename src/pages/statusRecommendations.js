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
      <ParticlesBackground />
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, mr: 1 }}
            ></Box>

            <Box sx={{ flexGrow: 0 }}>
              WELCOME "nume" &nbsp;&nbsp;
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <br />
      <div>
        <Typography sx={{ fontWeight: "bold", background: "#cfe8fc" }}>
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
            variant="contained"
            color="primary"
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
