import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { menuItems } from "./menuItems";
import AuthService from "../services/auth.service";

function Header() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const userName = AuthService.getCurrentUser().username;

    // let navigate = useNavigate();

    /* const handleLogout = () =>{
          let path = "/login";
          navigate(path);
      };
      const handleViewProfile = () =>{
          let path = "/myProfile";
          navigate(path);
      };*/

    return (
        <div>
            <AppBar position="static" sx={{ bgcolor: "#0000" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/content"
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
                            <img src="Assets/images/logo.png" alt="logo"></img>
                        </Typography>

                        <Box
                            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, mr: 1 }}
                        ></Box>

                        <Box sx={{ flexGrow: 0 }}>
                            WELCOME {userName} &nbsp;&nbsp;
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
                                {menuItems.map((menuItem) => (
                                    <MenuItem key={menuItem.title} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">
                                            <a href={menuItem.url}>{menuItem.title}</a>
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default Header;
