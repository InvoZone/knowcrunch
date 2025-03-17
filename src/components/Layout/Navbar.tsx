"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Image from "next/image";
import { Badge, useMediaQuery, useTheme } from "@mui/material";
import CustomBtn from "../Common/CustomBtn";
import SearchField from "./SearchField";
import Link from "next/link";
import { navbarMenu } from "../../constants/navbarMenu";
import type { Menu, SubMenu } from "../../constants/navbarMenu";
import { useTranslations } from "next-intl";
import SuperMenu from "./SuperMenu";
import SuperMenuMobile from "./SuperMenuMobile";
import { useRouter, usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../lib/slices/auth";
import stripeLogo from "../../assets/Navbar/stripeLogo.webp";
import Login from "../Auth/Login";
import Signup from "../Auth/SignUp";

export interface MenuItem {
    id: string;
    title: string;
    link: string;
    menu?: Menu[];
    subMenu?: SubMenu[];
}

function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const theme = useTheme();
    const dispatch = useDispatch();
    const t = useTranslations("navbar");
    const { isLoggedIn } = useSelector((state: any) => state.auth);
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));

    const [anchorElSuperMenu, setAnchorElSuperMenu] = React.useState<null | HTMLElement>(null);
    const [scrollY, setScrollY] = React.useState(0);
    const [searchActive, setSearchActive] = React.useState(false);
    const [menu, setMenus] = React.useState<MenuItem | {}>({});
    const [subMenu, setSubMenu] = React.useState<MenuItem | {}>({});
    const [subMenu1, setSubMenu1] = React.useState<MenuItem | {}>({});
    const [mobileMenu, setMobileMenu] = React.useState(false);

    const handleOpenMobileMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMenu(!mobileMenu);
        setMenus({});
        setSubMenu({});
        setSubMenu1({});
        setAnchorElSuperMenu(!mobileMenu ? event.currentTarget : null);
    };

    const handleOpenSuperMenu = (event: React.MouseEvent<HTMLElement>, page: MenuItem) => {
        console.log("🚀 ~ handleOpenSuperMenu ~ page:", page);
        if (!page) return;

        setMenus(page);
        isLg && setAnchorElSuperMenu(event.currentTarget);
        setSubMenu({});
        setSubMenu1({});
    };

    const handleCloseSuperMenu = () => {
        setAnchorElSuperMenu(null);
        setMenus({});
        setSubMenu({});
        setSubMenu1({});
        setMobileMenu(false);
    };

    const handleSearchField = () => {
        setSearchActive(!searchActive);
    };

    const handleSubMenu = (menu: MenuItem) => {
        if (!menu?.subMenu) return;
        setSubMenu(menu);
        setSubMenu1({});
    };

    const handleSubMenu1 = (menu: MenuItem) => {
        setSubMenu1(menu);
    };

    const goBack = () => {
        (subMenu as MenuItem)?.id ? setSubMenu({}) : setMenus({});
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    React.useEffect(() => {
        if (typeof window === "undefined") return;

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isCheckout = pathname === "/checkout";

    return (
        <AppBar
            color={scrollY >= 10 ? "primary" : pathname === "/" ? "transparent" : "primary"}
            sx={{ zIndex: 1310, boxShadow: "none" }}
            aria-label="Navigation Bar"
        >
            <Container maxWidth="xl">
                <Toolbar
                    component="nav"
                    disableGutters
                    sx={{ height: 80, display: "flex", gap: "10px" }}
                >
                    {searchActive && !isLg && !isCheckout ? (
                        <SearchField handleClose={handleSearchField} aria-label="Search Field" />
                    ) : (
                        <>
                            {/* Mobile menu button and menu */}
                            <Box sx={{ display: { xs: isCheckout ? "none" : "flex", lg: "none" } }}>
                                <IconButton
                                    onClick={handleOpenMobileMenu}
                                    aria-label="Mobile Menu Toggle"
                                >
                                    <Image
                                        src={"/icons/header/menu.svg"}
                                        width={24}
                                        height={24}
                                        alt={"menuIcon"}
                                        priority
                                        aria-label="Menu Icon"
                                    />
                                </IconButton>
                                {!isLg && !isCheckout && (
                                    <SuperMenuMobile
                                        handleOpenSuperMenu={() => handleOpenSuperMenu}
                                        handleSubMenu={() => handleSubMenu}
                                        handleSubMenu1={() => handleSubMenu1}
                                        anchorElSuperMenu={anchorElSuperMenu}
                                        handleCloseSuperMenu={handleCloseSuperMenu}
                                        superMenu={navbarMenu}
                                        menu={menu}
                                        subMenu={subMenu}
                                        subMenu1={subMenu1}
                                        t={t}
                                        handleOpenMobileMenu={handleOpenMobileMenu}
                                        isLoggedIn={isLoggedIn}
                                        goBack={goBack}
                                        handleLogout={handleLogout}
                                        aria-label="Mobile Navigation Menu"
                                    />
                                )}
                            </Box>

                            {/* Logo */}
                            <Box
                                component={"div"}
                                flexGrow={{ xs: 1, lg: isCheckout ? 1 : 0 }}
                                aria-label="Logo"
                            >
                                <Link href="/" passHref>
                                    <Image
                                        src={"/icons/header/logo.svg"}
                                        alt="logos"
                                        width={135}
                                        height={40}
                                        priority
                                        unoptimized={true}
                                        aria-label="Website Logo"
                                    />
                                </Link>
                            </Box>

                            {/* Desktop navigation menu */}
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "none", lg: isCheckout ? "none" : "flex" },
                                    pl: 3,
                                }}
                            >
                                <Box onMouseLeave={handleCloseSuperMenu}>
                                    {/* Main navigation buttons */}
                                    {!searchActive &&
                                        navbarMenu.map((el: any) => (
                                            <CustomBtn
                                                key={el?.id}
                                                onMouseEnter={(e: any) =>
                                                    el?.menu
                                                        ? handleOpenSuperMenu(e, el)
                                                        : handleCloseSuperMenu()
                                                }
                                                title={t(el?.title)}
                                                onClick={() => router.push(el?.link)}
                                                color="secondary"
                                                sx={{
                                                    minWidth: 100,
                                                    height: (menu as any)?.id === el?.id ? 80 : 45,
                                                }}
                                                aria-label={`Navigation Button: ${el?.title}`}
                                            />
                                        ))}

                                    {/* Desktop super menu */}
                                    {isLg && (
                                        <SuperMenu
                                            handleSubMenu={(menu: Menu) => handleSubMenu(menu)}
                                            handleSubMenu1={(menu: Menu) => handleSubMenu1(menu)}
                                            anchorElSuperMenu={anchorElSuperMenu}
                                            handleCloseSuperMenu={handleCloseSuperMenu}
                                            menu={menu}
                                            subMenu={subMenu}
                                            subMenu1={subMenu1}
                                            t={t}
                                            aria-label="Desktop Navigation Menu"
                                        />
                                    )}
                                </Box>
                                {/* Search field */}
                                {searchActive && (
                                    <SearchField
                                        handleClose={handleSearchField}
                                        aria-label="Search Field"
                                    />
                                )}
                            </Box>

                            {/* Right side icons and buttons */}
                            {!searchActive && !isCheckout && (
                                <Box sx={{ flexGrow: 0 }}>
                                    <IconButton
                                        onClick={handleSearchField}
                                        aria-label="Search Icon"
                                    >
                                        <Image
                                            loading="lazy"
                                            src={"/icons/header/search.svg"}
                                            width={24}
                                            height={24}
                                            alt={"searchIcon"}
                                            aria-label="Search Icon"
                                        />
                                    </IconButton>

                                    {isLoggedIn && (
                                        // Logged in user icons
                                        <>
                                            <IconButton
                                                sx={{
                                                    display: {
                                                        xs: "none",
                                                        md: "flex",
                                                    },
                                                }}
                                                aria-label="Cart Icon"
                                            >
                                                <Badge
                                                    sx={{
                                                        "& .MuiBadge-dot": {
                                                            backgroundColor: "accents.bubble1", // Custom color for the badge dot
                                                        },
                                                    }}
                                                    variant="dot"
                                                    invisible={false}
                                                >
                                                    <Image
                                                        src={"/icons/header/cart.svg"}
                                                        width={24}
                                                        height={24}
                                                        alt={"cartIcon"}
                                                        loading="lazy"
                                                        aria-label="Cart Icon"
                                                    />
                                                </Badge>
                                            </IconButton>
                                            <IconButton aria-label="Notification Icon">
                                                <Badge
                                                    color="error"
                                                    variant="dot"
                                                    invisible={false}
                                                >
                                                    <Image
                                                        src={"/icons/header/notification.svg"}
                                                        width={24}
                                                        height={24}
                                                        alt={"notificationIcon"}
                                                        loading="lazy"
                                                        aria-label="Notification Icon"
                                                    />
                                                </Badge>
                                            </IconButton>
                                            <IconButton
                                                onClick={handleLogout}
                                                aria-label="Logout Icon"
                                            >
                                                <Image
                                                    src={"/icons/header/person.svg"}
                                                    width={24}
                                                    height={24}
                                                    alt={"personIcon"}
                                                    loading="lazy"
                                                />
                                            </IconButton>
                                        </>
                                    )}
                                    {/* // Login/Join buttons */}
                                    {isLg && !isLoggedIn && !isCheckout && (
                                        <>
                                            <Login aria-label="Login Button" />
                                            <Signup aria-label="Join Button" />
                                        </>
                                    )}
                                </Box>
                            )}

                            {isCheckout && (
                                <Box
                                    component={"div"}
                                    sx={{ flexGrow: 0, display: "flex", gap: 2 }}
                                    aria-label="Checkout Icons"
                                >
                                    <Image
                                        src={"/icons/header/secured.svg"}
                                        width={32}
                                        height={32}
                                        alt={"personIcon"}
                                        loading="lazy"
                                        aria-label="Secure Icon"
                                    />
                                    <Image
                                        src={stripeLogo}
                                        width={146}
                                        height={32}
                                        alt={"stripeLogo"}
                                        loading="lazy"
                                        aria-label="Stripe Logo"
                                    />
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
