// Enable client-side rendering
"use client";

// Import necessary dependencies
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Image from "next/image";
import { Badge, useMediaQuery, useTheme } from "@mui/material";
import CustomBtn from "../common/customBtn";
import SearchField from "./searchField";

// Import icons
import searchIcon from "@/assets/icons/search.svg";
import notificationIcon from "@/assets/icons/notification.svg";
import cartIcon from "@/assets/icons/cart.svg";
import menuIcon from "@/assets/icons/menu.svg";
import personIcon from "@/assets/icons/person.svg";

// Import navigation data and components
import { navbarMenu } from "@/utils/navbarMenu";
import { useTranslations } from "next-intl";
import SuperMenu from "./superMenu";
import SuperMenuMobile from "./superMenuMobile";

function Navbar() {
    // Initialize theme and translations
    const theme = useTheme();
    const t = useTranslations("navbar");

    // Responsive breakpoint check
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));

    // State management
    const [anchorElSuperMenu, setAnchorElSuperMenu] = React.useState(null);
    const [scrollY, setScrollY] = React.useState(0);
    const [searchActive, setSearchActive] = React.useState(false);
    const [menu, setMenus] = React.useState({});
    const [subMenu, setSubMenu] = React.useState({});
    const [subMenu1, setSubMenu1] = React.useState({});
    const [mobileMenu, setMobileMenu] = React.useState(false);


    // Mock login state
    const login = false;

    // Get theme accents
    const { accents } = theme.palette;

    // Handle mobile menu toggle
    const handleOpenMobileMenu = (event) => {
        setMobileMenu(!mobileMenu);
        setMenus({});
        setSubMenu({});
        setSubMenu1({});
        setAnchorElSuperMenu(!mobileMenu ? event.target : null);
    };

    // Handle super menu opening
    const handleOpenSuperMenu = (event, page) => {
        setMenus(page);
        setAnchorElSuperMenu(event.target);
        setSubMenu({});
        setSubMenu1({});
    };

    // Handle super menu closing
    const handleCloseSuperMenu = () => {
        setTimeout(() => {
            setAnchorElSuperMenu(null);
            setMenus({});
            setSubMenu({});
            setSubMenu1({});
            setMobileMenu(false);
        }, 100);
    };

    // Toggle search field visibility
    const handleSearchField = () => {
        setSearchActive(!searchActive);
    };

    // Handle first level submenu
    const handleSubMenu = (menu) => {
        setSubMenu(menu);
        setSubMenu1({});
    };

    // Handle second level submenu
    const handleSubMenu1 = (menu) => {
        setSubMenu1(menu);
    };

    // Handle navigation back in mobile menu
    const goBack = () => {
        subMenu?.id ? setSubMenu({}) : setMenus({});
    };

    // Handle scroll events
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
        <AppBar component={"nav"} color={scrollY >= 0 ? "primary" : "transparent"} sx={{ zIndex: 1310, boxShadow: "none" }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ height: 80, display: "flex", justifyContent: "space-between" }}>
                    {/* Conditional rendering of search field or main content */}
                    {searchActive && !isLg ? <SearchField handleClose={handleSearchField} /> :
                        <>
                            {/* Mobile menu button and menu */}
                            <Box sx={{ display: { xs: "flex", lg: "none" } }}>
                                <IconButton onClick={handleOpenMobileMenu}>
                                    <Image src={menuIcon} width={24} height={24} alt={"menuIcon"} priority />
                                </IconButton>
                                {!isLg && <SuperMenuMobile
                                    handleOpenSuperMenu={handleOpenSuperMenu}
                                    handleSubMenu={handleSubMenu}
                                    handleSubMenu1={handleSubMenu1}
                                    anchorElSuperMenu={anchorElSuperMenu}
                                    handleCloseSuperMenu={handleCloseSuperMenu}
                                    superMenu={navbarMenu}
                                    menu={menu}
                                    subMenu={subMenu}
                                    subMenu1={subMenu1}
                                    t={t}
                                    handleOpenMobileMenu={handleOpenMobileMenu}
                                    login={login}
                                    goBack={goBack}
                                />}
                            </Box>

                            {/* Logo */}
                            <Image src={"/logo.webp"} alt='logos' width={135} height={40} priority />

                            {/* Desktop navigation menu */}
                            <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" }, pl: 3 }} >
                                <Box onMouseLeave={handleCloseSuperMenu}>
                                    {/* Main navigation buttons */}
                                    {!searchActive && navbarMenu.map((el) => (
                                        <CustomBtn key={el?.id} onMouseEnter={(e) => el?.menu && handleOpenSuperMenu(e, el)} title={t(el?.title)} color="secondary" sx={{ minWidth: 100, height: menu.id === el?.id ? 80 : 45 }}
                                        />
                                    ))}

                                    {/* Desktop super menu */}
                                    {isLg && <SuperMenu
                                        handleSubMenu={handleSubMenu}
                                        handleSubMenu1={handleSubMenu1}
                                        anchorElSuperMenu={anchorElSuperMenu}
                                        handleCloseSuperMenu={handleCloseSuperMenu}
                                        menu={menu}
                                        subMenu={subMenu}
                                        subMenu1={subMenu1}
                                        t={t}
                                    />}
                                </Box>
                                {/* Search field */}
                                {searchActive && <SearchField handleClose={handleSearchField} />}
                            </Box>

                            {/* Right side icons and buttons */}
                            {!searchActive && <Box sx={{ flexGrow: 0 }}>
                                <IconButton><Image loading="lazy" src={searchIcon} width={24} height={24} alt={"searchIcon"} onClick={handleSearchField} /></IconButton>
                                {isLg && <>{login ?
                                    // Logged in user icons
                                    <>
                                        <IconButton display={{ xs: "none", md: "flex" }}>
                                            <Badge sx={{
                                                "& .MuiBadge-dot": {
                                                    backgroundColor: "accents.bubble1", // Custom color for the badge dot
                                                }
                                            }}
                                                variant="dot" invisible={false}>
                                                <Image src={cartIcon} width={24} height={24} alt={"cartIcon"} loading="lazy" />
                                            </Badge>
                                        </IconButton>
                                        <IconButton>
                                            <Badge color="error" variant="dot" invisible={false}>
                                                <Image src={notificationIcon} width={24} height={24} alt={"notificationIcon"} loading="lazy" />
                                            </Badge>
                                        </IconButton>
                                        <IconButton>
                                            <Image src={personIcon} width={24} height={24} alt={"personIcon"} loading="lazy" />
                                        </IconButton>
                                    </>
                                    :
                                    // Login/Join buttons
                                    <>
                                        <CustomBtn title={"Log In"} color="secondary" sx={{ minWidth: 100 }} />
                                        <CustomBtn variant="contained" title={"join Us"} sx={{ background: accents.bubble1, minWidth: 100 }} />
                                    </>}  </>}
                            </Box>}
                        </>}
                </Toolbar>
            </Container>
        </AppBar >
    );
}

export default Navbar;
