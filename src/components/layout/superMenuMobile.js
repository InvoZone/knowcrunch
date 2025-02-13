// Import required components and icons
import {
    Box,
    Container,
    Grid2,
    Menu,
    MenuItem,
    Typography,
    useTheme,
} from "@mui/material";
import Image from "next/image";
import chevRightIcon from "@/assets/icons/chevRight.svg";
import chevLeftIcon from "@/assets/icons/chevLeft.svg";
import cancelIcon from "@/assets/icons/cross.svg";
import CustomBtn from "../common/customBtn";
import Login from "../auth/login";

const SuperMenuMobile = ({
    anchorElSuperMenu,
    handleCloseSuperMenu,
    handleSubMenu,
    handleSubMenu1,
    menu,
    subMenu,
    t,
    superMenu,
    isLoggedIn,
    handleOpenSuperMenu,
    handleOpenMobileMenu,
    goBack,
    router,
    handleLogout
}) => {
    const theme = useTheme();
    const { primary } = theme.palette;


    return (
        <Box position={"relative"}>
            {/* Main Menu Component */}
            <Menu
                sx={{
                    position: "absolute",
                    "& .MuiMenu-paper": {
                        width: "100%",
                        maxWidth: "100% !important",
                        left: "0px !important",
                        top: "0px !important",
                        background: primary.main,
                        padding: 0,
                    },
                    "& .MuiMenu-list": { padding: 0 },
                    zIndex: 1310,
                }}
                id="menu-appbar-mobile"
                anchorEl={anchorElSuperMenu}
                disableScrollLock
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                open={Boolean(anchorElSuperMenu)}
                onClose={handleCloseSuperMenu}
            >
                <Container maxWidth={"xl"} sx={{ py: 4, minHeight: 500 }}>
                    <Grid2 container>
                        {/* Header with back button and close icon */}
                        <Grid2 size={12}>
                            <Box
                                component={"div"}
                                sx={{
                                    height: 54,
                                    display: "flex",
                                    justifyContent:
                                        !menu?.id && !subMenu?.id
                                            ? "flex-end"
                                            : "space-between",
                                    borderRadius: 1,
                                    p: 0,
                                }}
                            >
                                {(menu?.id || subMenu?.id) && (
                                    <Box
                                        component={"div"}
                                        display={"flex"}
                                        alignItems={"center"}
                                        gap={1}
                                        onClick={goBack}
                                    >
                                        <Image
                                            src={chevLeftIcon}
                                            alt="chevLeftIcon"
                                            width={24}
                                            height={24}
                                            loading="lazy"
                                        />
                                        <Typography
                                            variant="titleLg"
                                            color={"secondary"}
                                        >
                                            {t(subMenu?.title || menu?.title)}{" "}
                                        </Typography>
                                    </Box>
                                )}
                                <Image
                                    src={cancelIcon}
                                    alt="cancel"
                                    width={48}
                                    height={48}
                                    onClick={handleOpenMobileMenu}
                                />
                            </Box>
                        </Grid2>

                        {/* Main menu items and auth buttons */}
                        {!menu?.id && !subMenu?.id && (
                            <Grid2 size={12}>
                                {isLoggedIn && (
                                    <MenuItem
                                        onClick={(e) =>
                                            handleOpenSuperMenu(e, menu)
                                        }
                                        sx={{ height: 54, borderRadius: 1 }}
                                    >
                                        <Typography
                                            variant="h6"
                                            color={"secondary"}
                                        >
                                            {t("myProfile")}{" "}
                                        </Typography>
                                    </MenuItem>
                                )}
                                {superMenu?.map((menu) => (
                                    <MenuItem
                                        key={menu?.id}
                                        onClick={(e) => {
                                            router.push(menu?.link);
                                            handleOpenSuperMenu(e, menu);
                                        }
                                        }
                                        sx={{ height: 54, borderRadius: 1 }}
                                    >
                                        <Typography
                                            variant="h6"
                                            color={"secondary"}
                                        >
                                            {t(menu?.title)}
                                        </Typography>
                                    </MenuItem>
                                ))}

                                {/* Authentication buttons */}
                                <Box
                                    component={"div"}
                                    sx={{
                                        position: "absolute",
                                        bottom: 40,
                                        width: "calc(100% - 32px)",
                                    }}
                                >
                                    <Box
                                        component={"div"}
                                        display={"flex"}
                                        justifyContent={{
                                            xs: "center",
                                            sm: "center",
                                            md: "flex-end",
                                        }}
                                    >
                                        {isLoggedIn ? (
                                            <CustomBtn
                                                title={"Log out"}
                                                color="secondary"
                                                sx={{ minWidth: 100 }}
                                                onClick={handleLogout}
                                            />
                                        ) : (
                                            <>
                                                <Login />
                                                <CustomBtn
                                                    variant="contained"
                                                    title={"join Us"}
                                                    sx={{
                                                        backgroundColor:
                                                            "accents.bubble1",
                                                        minWidth: 100,
                                                    }}
                                                />
                                            </>
                                        )}
                                    </Box>
                                </Box>
                            </Grid2>
                        )}

                        {/* First level submenu items */}
                        {!subMenu?.id && (
                            <Grid2 size={12}>
                                {menu?.menu?.map((menu) => (
                                    <MenuItem
                                        key={menu?.id}
                                        onClick={() => handleSubMenu(menu)}
                                        sx={{
                                            height: 54,
                                            display: "flex",
                                            justifyContent: "space-between",
                                            borderRadius: 1,
                                            p: 0,
                                        }}
                                    >
                                        <Typography
                                            variant="body"
                                            color={"secondary"}
                                        >
                                            {t(menu?.title)}{" "}
                                        </Typography>{" "}
                                        <Image
                                            src={chevRightIcon}
                                            alt="chevRightIcon"
                                            width={24}
                                            height={24}
                                        />
                                    </MenuItem>
                                ))}
                            </Grid2>
                        )}

                        {/* Second level submenu items */}
                        {subMenu?.subMenu && (
                            <Grid2 size={{ md: 5, lg: 5 }}>
                                {subMenu?.subMenu?.map((el) => (
                                    <MenuItem
                                        key={el?.id}
                                        onMouseEnter={() => handleSubMenu1(el)}
                                        sx={{
                                            height: 54,
                                            borderRadius: 1,
                                            p: 0,
                                        }}
                                    >
                                        <Typography
                                            variant="body"
                                            color={"secondary"}
                                        >
                                            {t(el?.title)}{" "}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Grid2>
                        )}
                    </Grid2>
                </Container>
            </Menu>
        </Box>
    );
};

export default SuperMenuMobile;
