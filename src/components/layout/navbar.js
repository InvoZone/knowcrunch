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
import Link from "next/link";

// Import navigation data and components
import { navbarMenu } from "@/utils/navbarMenu";
import { useTranslations } from "next-intl";
import SuperMenu from "./superMenu";
import SuperMenuMobile from "./superMenuMobile";
import { useRouter, usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/auth";
import dynamic from "next/dynamic";

const Login = dynamic(() => import("../auth/login"));
const Signup = dynamic(() => import("../auth/signup"));

function Navbar() {
    // Initialize theme and translations
    const router = useRouter();
    const pathname = usePathname();
    const theme = useTheme();
    const dispatch = useDispatch();
    const t = useTranslations("navbar");
    const { isLoggedIn } = useSelector((state) => state.auth);

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
        isLg && setAnchorElSuperMenu(event.target);
        setSubMenu({});
        setSubMenu1({});
    };

    // Handle super menu closing
    const handleCloseSuperMenu = () => {
        setAnchorElSuperMenu(null);
        setMenus({});
        setSubMenu({});
        setSubMenu1({});
        setMobileMenu(false);
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

    const handleLogout = () => {
        dispatch(logout());
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
        <AppBar
            component={"nav"}
            color={
                scrollY >= 10 || menu?.id !== undefined
                    ? "primary"
                    : pathname === "/"
                        ? "transparent"
                        : "primary"
            }
            sx={{ zIndex: 1310, boxShadow: "none" }}
        >
            <Container maxWidth="lg">
                <Toolbar
                    disableGutters
                    sx={{
                        height: 80,
                        display: "flex",
                        padding: pathname === "/" ? "0 16px" : "",
                    }}
                >
                    {/* Conditional rendering of search field or main content */}
                    {searchActive && !isLg ? (
                        <SearchField handleClose={handleSearchField} />
                    ) : (
                        <>
                            {/* Mobile menu button and menu */}
                            <Box sx={{ display: { xs: "flex", lg: "none" } }}>
                                <IconButton onClick={handleOpenMobileMenu}>
                                    <Image
                                        src={"/icons/menu.svg"}
                                        width={24}
                                        height={24}
                                        alt={"menuIcon"}
                                        priority
                                    />
                                </IconButton>
                                {!isLg && (
                                    <SuperMenuMobile
                                        handleOpenSuperMenu={
                                            handleOpenSuperMenu
                                        }
                                        handleSubMenu={handleSubMenu}
                                        handleSubMenu1={handleSubMenu1}
                                        anchorElSuperMenu={anchorElSuperMenu}
                                        handleCloseSuperMenu={
                                            handleCloseSuperMenu
                                        }
                                        superMenu={navbarMenu}
                                        menu={menu}
                                        subMenu={subMenu}
                                        subMenu1={subMenu1}
                                        t={t}
                                        handleOpenMobileMenu={
                                            handleOpenMobileMenu
                                        }
                                        isLoggedIn={isLoggedIn}
                                        goBack={goBack}
                                        router={router}
                                        handleLogout={handleLogout}
                                    />
                                )}
                            </Box>

                            {/* Logo */}
                            <Box component={"div"} flexGrow={{ xs: 1, lg: 0 }}>
                                <Link href="/" passHref>
                                    <Image
                                        src={"/logo.webp"}
                                        alt="logos"
                                        width={135}
                                        height={40}
                                        priority
                                    />
                                </Link>
                            </Box>

                            {/* Desktop navigation menu */}
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "none", lg: "flex" },
                                    pl: 3,
                                }}
                            >
                                <Box onMouseLeave={handleCloseSuperMenu}>
                                    {/* Main navigation buttons */}
                                    {!searchActive &&
                                        navbarMenu.map((el) => (
                                            <CustomBtn
                                                key={el?.id}
                                                onMouseEnter={(e) =>
                                                    el?.menu
                                                        ? handleOpenSuperMenu(e, el)
                                                        : handleCloseSuperMenu()
                                                }
                                                title={t(el?.title)}
                                                onClick={() =>
                                                    router.push(el?.link)
                                                }
                                                color="secondary"
                                                sx={{
                                                    minWidth: 100,
                                                    height:
                                                        menu.id === el?.id
                                                            ? 80
                                                            : 45,
                                                }}
                                            />
                                        ))}

                                    {/* Desktop super menu */}
                                    {isLg && (
                                        <SuperMenu
                                            handleSubMenu={handleSubMenu}
                                            handleSubMenu1={handleSubMenu1}
                                            anchorElSuperMenu={
                                                anchorElSuperMenu
                                            }
                                            handleCloseSuperMenu={
                                                handleCloseSuperMenu
                                            }
                                            menu={menu}
                                            subMenu={subMenu}
                                            subMenu1={subMenu1}
                                            t={t}
                                        />
                                    )}
                                </Box>
                                {/* Search field */}
                                {searchActive && (
                                    <SearchField
                                        handleClose={handleSearchField}
                                    />
                                )}
                            </Box>

                            {/* Right side icons and buttons */}
                            {!searchActive && (
                                <Box sx={{ flexGrow: 0 }}>
                                    <IconButton>
                                        <Image
                                            loading="lazy"
                                            src={"/icons/search.svg"}
                                            width={24}
                                            height={24}
                                            alt={"searchIcon"}
                                            onClick={handleSearchField}
                                        />
                                    </IconButton>

                                    {isLoggedIn && (
                                        // Logged in user icons
                                        <>
                                            <IconButton
                                                display={{
                                                    xs: "none",
                                                    md: "flex",
                                                }}
                                            >
                                                <Badge
                                                    sx={{
                                                        "& .MuiBadge-dot": {
                                                            backgroundColor:
                                                                "accents.bubble1", // Custom color for the badge dot
                                                        },
                                                    }}
                                                    variant="dot"
                                                    invisible={false}
                                                >
                                                    <Image
                                                        src={"/icons/cart.svg"}
                                                        width={24}
                                                        height={24}
                                                        alt={"cartIcon"}
                                                        loading="lazy"
                                                    />
                                                </Badge>
                                            </IconButton>
                                            <IconButton>
                                                <Badge
                                                    color="error"
                                                    variant="dot"
                                                    invisible={false}
                                                >
                                                    <Image
                                                        src={"/icons/notification.svg"}
                                                        width={24}
                                                        height={24}
                                                        alt={"notificationIcon"}
                                                        loading="lazy"
                                                    />
                                                </Badge>
                                            </IconButton>
                                            <IconButton onClick={handleLogout}>
                                                <Image
                                                    src={"/icons/person.svg"}
                                                    width={24}
                                                    height={24}
                                                    alt={"personIcon"}
                                                    loading="lazy"
                                                />
                                            </IconButton>
                                        </>
                                    )}
                                    {/* // Login/Join buttons */}
                                    {isLg && !isLoggedIn && (
                                        <>
                                            <Login />
                                            <Signup />
                                        </>
                                    )}
                                </Box>
                            )}
                        </>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
