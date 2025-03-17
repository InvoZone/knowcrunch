"use client"; // Indicate this is a client-side component

// Import necessary components and hooks
import { useState } from "react";
import CustomBtn from "@/components/Common/CustomBtn";
import CustomDialog from "@/components/Common/CustomDialog";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import SignupForm from "./SignupForm";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { openLoginSignUpPopup } from "@/lib/slices/auth";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";

interface SignupProps {
    onClick?: (_event: React.MouseEvent<HTMLElement>) => void;
}

/**
 * Signup component that handles the Signup dialog and button
 * Provides Google OAuth functionality and Signup form
 */
const Signup: React.FC<SignupProps> = ({ onClick = () => "" }) => {
    const [registerText, setRegisterText] = useState<string>("signupHeading");
    const dispatch = useAppDispatch();
    // Get translations for account-related text
    const t = useTranslations("account");
    const signupPopup = useAppSelector((state) => state.auth.signupPopup);

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        onClick(event);
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
                title={"Join Us"}
                sx={{
                    backgroundColor: "accents.bubble1",
                    minWidth: 100,
                }}
                onClick={handleOpen}
                aria-label="Open Signup Dialog"
            />

            {/* Signup dialog containing the form */}
            <CustomDialog open={signupPopup} handleClose={handleClose} aria-label="Signup Dialog">
                {/* Dialog heading */}
                <Typography variant="h4" color="tertiary" pb={3}>
                    {t(registerText)}
                </Typography>
                {/* Wrap Signup form with Google OAuth provider */}
                <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}>
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
                                    sx={{ cursor: "pointer", pl: "10px" }}
                                    onClick={handleOpenLogin}
                                    aria-label="Open Login Dialog"
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
