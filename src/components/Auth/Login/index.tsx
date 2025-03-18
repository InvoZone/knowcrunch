"use client"; // Indicate this is a client-side component

// Import necessary components and hooks
import React from "react";
import CustomBtn from "@/components/Common/CustomBtn";
import CustomDialog from "@/components/Common/CustomDialog";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import LoginForm from "./LoginForm";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { openForgotPopup, openLoginSignUpPopup } from "@/lib/slices/auth";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";

interface LoginProps {
    onClick?: (_event: React.MouseEvent<HTMLElement>) => void;
}

/**
 * Login component that handles the login dialog and button
 * Provides Google OAuth functionality and login form
 */
const Login: React.FC<LoginProps> = ({ onClick = () => { } }) => {
    const dispatch = useAppDispatch();
    const t = useTranslations("account");
    const { loginPopup } = useAppSelector((state) => state.auth);

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        onClick(event);
        dispatch(
            openLoginSignUpPopup({
                loginPopup: true,
            })
        );
    };

    const handleOpenSignup = () => {
        dispatch(
            openLoginSignUpPopup({
                signupPopup: true,
                loginPopup: false,
                forgotPopup: false,
            })
        );
    };

    const handleClose = () => {
        dispatch(
            openLoginSignUpPopup({
                loginPopup: false,
            })
        );
    };

    const handleOpenForgotPopup = () => {
        dispatch(
            openForgotPopup({
                forgotPopup: true,
                loginPopup: false,
            })
        );
    };

    return (
        <>
            {/* Login button that triggers the dialog */}
            <CustomBtn
                title={"Log In"}
                color="secondary"
                sx={{ minWidth: 100 }}
                onClick={handleOpen}
                aria-label="Login button"
            />

            {/* Login dialog containing the form */}
            <CustomDialog open={loginPopup} handleClose={handleClose} aria-label="Login dialog">
                {/* Dialog heading */}
                <Typography variant="h4" color="tertiary" pb={3}>
                    {t("loginHeading")}
                </Typography>
                {/* Wrap login form with Google OAuth provider */}
                <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? ""}>
                    <LoginForm
                        t={t}
                        handleClose={handleClose}
                        handleOpenForgotPopup={handleOpenForgotPopup}
                    />
                    {/* Sign up prompt for users without an account */}
                    <Box component="div" textAlign={"center"}>
                        <Typography variant="body" color="neutral.neutral4">
                            {t("dontHaveAccount")} {"  "}
                            <Typography
                                onClick={handleOpenSignup}
                                fontWeight={800}
                                variant="body"
                                color="link.light"
                                component={"span"}
                                sx={{ cursor: "pointer", pl: "10px" }}
                                aria-label="Sign up link"
                            >
                                {t("signup")}
                            </Typography>
                        </Typography>
                    </Box>
                </GoogleOAuthProvider>
            </CustomDialog>
        </>
    );
};

export default Login;
