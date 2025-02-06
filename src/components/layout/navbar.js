
"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { Badge, useTheme } from "@mui/material";
import CustomBtn from "../common/customBtn";
import { Notifications, PersonOutlineOutlined, SearchOutlined, ShoppingCart } from "@mui/icons-material";
import SearchField from "./searchField";
// import AdbIcon from "@mui/icons-material/Adb";

const pages = ["E-Learning Courses", "Classroom Courses", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
    const theme = useTheme();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [scrollY, setScrollY] = React.useState(0);
    const [searchActive, setSearchActive] = React.useState(false);

    const login = false;

    const { accents } = theme.palette;

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleSearchField = () => {
        setSearchActive(!searchActive);
    };


    React.useEffect(() => {
        // Check if window is available (client-side rendering)
        if (typeof window === "undefined") return;

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", debounceScroll);
        };
    }, []);


    return (
        <AppBar component={"nav"} color={scrollY >= 0 ? "primary" : "transparent"} >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ height: 80 }}>
                    <Image src={"/logo.webp"} alt='logos' width={135} height={40} />
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            {/* <MenuIcon /> */}
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: "block", md: "none" } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}

                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, pl: 3 }}>
                        {!searchActive && pages.map((page) => (
                            <CustomBtn key={page} onMouseEnter={handleOpenUserMenu} title={page} color="secondary" sx={{ minWidth: 100 }} />
                        ))}
                        {searchActive && <SearchField handleClose={handleSearchField} />}
                    </Box>
                    {!searchActive && <Box sx={{ flexGrow: 0 }}>
                        <IconButton><SearchOutlined onClick={handleSearchField} color="secondary" /></IconButton>
                        {login ? <>
                            <IconButton>
                                <Badge sx={{
                                    "& .MuiBadge-dot": {
                                        backgroundColor: "accents.bubble1", // Custom color for the badge dot
                                    }
                                }}
                                    variant="dot" invisible={false}>
                                    <ShoppingCart color="secondary" />
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <Badge color="error" variant="dot" invisible={false}>
                                    <Notifications color="secondary" />
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <PersonOutlineOutlined color="secondary" />
                            </IconButton>
                        </>
                            :
                            <>
                                <CustomBtn title={"Log In"} color="secondary" sx={{ minWidth: 100 }} />
                                <CustomBtn variant="contained" title={"join Us"} sx={{ background: accents.bubble1, minWidth: 100 }} />
                            </>}

                        {/* <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>*/}
                        <Menu
                            sx={{ background: "primary", mt: "45px", "& .MuiMenu-paper": { width: "100%", maxWidth: "100% !important", left: "0px !important" } }}
                            id="menu-appbar"
                            size={"100%"}
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{ textAlign: "center" }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
