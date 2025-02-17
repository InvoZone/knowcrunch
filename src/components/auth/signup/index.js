"use client"; // Indicate this is a client-side component

// Import necessary components and hooks
import CustomBtn from "@/components/common/customBtn";
import CustomDialog from "@/components/common/customDialog";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import SignupForm from "./signupForm";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { openLoginSignUpPopup } from "@/store/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

/**
 * Signup component that handles the Signup dialog and button
 * Provides Google OAuth functionality and Signup form
 */
const Signup = () => {
    const [registerText, setRegisterText] = useState("signupHeading");
    const dispatch = useDispatch();
    // Get translations for account-related text
    const t = useTranslations("account");
    const { signupPopup } = useSelector((state) => state.auth);

    const handleOpen = () => {
        setRegisterText("signupHeading");
        dispatch(
            openLoginSignUpPopup({
                signupPopup: true,
            })
        );
    };

    const handleClose = () => {
        dispatch(
            openLoginSignUpPopup({
                signupPopup: false,
            })
        );
    };
    const handleSubmitForm = () => {
        setRegisterText("Completeregistration");
        // dispatch(openLoginSignUpPopup({
        //     signupPopup: false
        // }));
    };

    const handleOpenLogin = () => {
        dispatch(
            openLoginSignUpPopup({
                signupPopup: false,
                loginPopup: true,
            })
        );
    };

    return (
        <>
            {/* Signup button that triggers the dialog */}
            <CustomBtn
                variant="contained"
                title={"join Us"}
                sx={{
                    backgroundColor: "accents.bubble1",
                    minWidth: 100,
                }}
                onClick={handleOpen}
            />

            {/* Signup dialog containing the form */}
            <CustomDialog
                open={signupPopup}
                handleClose={handleClose}
            >
                {/* Dialog heading */}
                <Typography variant="h4" color="tertiary" pb={3}>
                    {t(registerText)}
                </Typography>
                {/* Wrap Signup form with Google OAuth provider */}
                <GoogleOAuthProvider
                    clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                >
                    <SignupForm
                        t={t}
                        handleClose={handleClose}
                        handleSubmitForm={handleSubmitForm}
                    />
                    {/* Sign up prompt for users without an account */}
                    {registerText === "signupHeading" && (
                        <Box component="div" textAlign={"center"}>
                            <Typography variant="body" color="neutral.neutral4">
                                {t("alreadyHaveAccount")} {"  "}
                                <Typography
                                    fontWeight={800}
                                    variant="body"
                                    color="link.light"
                                    component={"span"}
                                    sx={{ cursor: "pointer" }}
                                    onClick={handleOpenLogin}
                                >
                                    {t("signin")}
                                </Typography>
                            </Typography>
                        </Box>
                    )}
                </GoogleOAuthProvider>
            </CustomDialog>
        </>
    );
};

export default Signup;
